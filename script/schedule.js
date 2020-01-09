function Dictionary() {
    var items = {};
    
    this.has = function(key) {
        return items.hasOwnProperty(key);
    };
    this.set = function(key, value) {
        if(this.has(key)) {
            items[key].push(value);
        } else {
            items[key] = [value];
        }
    };
    this.getKeys = function() {
        let keys = [];
        for(let k in items) {
            keys.push(k);
        }
        return keys;
    };
    this.getValue = function(key) {
        return items[key];
    };
    this.clean = function() {
        items = {};
    };
    this.all = function() {
        return items;
    };
};

var existNumber, nonExistNumber;
var allNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function getSchedule() {
    $.ajax({
        url: "php/getSchedule.php",
        cache: false,
        dataType: "json",
        type: "POST",
        error: function(){ alert('Ajax request failed'); },
        success: function(data) {
            // console.log(data);
            for(let index in data) {
                var perData = data[index];
                var day = perData[2];
                var indexTime = [perData[0], perData[3]];
                dictSchedule.set(day, indexTime);
            }
        }
    });
    var lastI = 0;
    var currentI = 0;
    existNumber = [];
    nonExistNumber = [];
    setTimeout(function() {
        var keys = dictSchedule.getKeys();

        for(let key in keys) {
            var value = dictSchedule.getValue(keys[key]);
            // console.log(value);

            var perTag = $("<div></div>");
            perTag.attr("class", "insideDiv");
            $(".schedule").append(perTag);

            var dayTag = $("<div></div>");
            dayTag.attr("class", "day");
            $(".insideDiv:eq("+key+")").append(dayTag);
            $(".day:eq("+key+")").text(week[keys[key]]);

            var i;
            for(i = 0; i < value.length; i++) {
                currentI = lastI + i;
                // console.log("data: "+currentI);

                var timeTag = $("<div></div>");
                timeTag.attr("class", "time");
                $(".insideDiv:eq("+key+")").append(timeTag);
                $(".time:eq("+currentI+")").text(value[i][1]);
                existNumber.push(value[i][0]);

                var xTag = $("<input></input>");
                xTag.attr("type", "button")
                xTag.attr("class", "X");
                xTag.attr("onclick", "Delete("+value[i][0]+")");
                $(".time:eq("+currentI+")").append(xTag);
            }
            lastI = currentI + 1;
        }
        console.log(existNumber);
        for(let i in allNumber) {
            var exist = 0;
            for(let j in existNumber) {
                if(i == existNumber[j]) exist = 1;
            }
            if(exist == 0)  nonExistNumber.push(i);
        }
        console.log(nonExistNumber);

        // when get the schedule from mysql, update the raspberry's schedule
        setTimeout(function() {
            updateServer();
        }, 500);
    }, 300);
}

function deleteSchedule(number) {
    var params = {
        "NUMBER": number
    };
    $.ajax({
        url: "php/deleteSchedule.php",
        cache: false,
        dataType: "json",
        type: "POST",
        data: "NUM="+JSON.stringify(params),
        error: function(){ alert('Ajax request failed'); },
        success: function(data) {
            // console.log(data);
            dictSchedule.clean();
            getSchedule();
        }
    });
}

// number is the index in the database
function Delete(number) {
    var msg = "Delete?";
    if(confirm(msg) == true) {
        console.log("hello");
        $(".insideDiv").remove();
        deleteSchedule(number);
    }
}

function addSchedule(day, H, M, S) {
    console.log(H+M+S);

    var params = {
        "NUMBER": nonExistNumber[0],
        "DAY": day,
        "H": H,
        "M": M,
        "S": S
    };
    $.ajax({
        url: "php/addSchedule.php",
        cache: false,
        dataType: "json",
        type: "POST",
        data: "DATA="+JSON.stringify(params),
        error: function(){ alert('Ajax request failed'); },
        success: function(data) {
            console.log(data);
            dictSchedule.clean();
            getSchedule();
        }
    });
}

function updateServer() {
    var all = dictSchedule.all();
    // console.log(all);
    var jsonAll = JSON.stringify(all);
    console.log(jsonAll);
    publish_schedule(jsonAll);
}

var dictSchedule = new Dictionary();
var week = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var weekFullName = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

getSchedule();

$(function() {
    $("#add").bind("click", function() {
        var day = $("#addDay").val();
        var H = $("#addHour").val();
        var M = $("#addMinute").val();
        var S = $("#addSecond").val();

        var msg = "Add a new schedule at " +　weekFullName[day] + ", " + H + ":" + M + ":" + S + "?";
        if(confirm(msg) == true) {
            $(".insideDiv").remove();
            addSchedule(day, H, M, S);
        }
    });
});


