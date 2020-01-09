$(function() {
    for(var k = 0; k < 50; k++) {
        for(var i = 0; i < 8; i++) {
            var td = $("<td></td>");
            td.attr("class", "box");
            $(".row:eq("+i+")").append(td);
        }
    }
    for(var k = 0; k < 50; k++) {
        var td = $("<td></td>");
        td.attr("class", "daybox");
        $(".dayline").append(td);
    }
    
    timeline = getDayLine();
    for(var k = 49; k >= 0; k--) {
        var day = timeline.pop();
        if(day < 10)    day = "0"+day;
        $(".daybox:eq("+k+")").text(day);
    }
});
getRecord();
$(function() {
    var width = $(".box").width();
    $("#detail").css("width", width*5);
    $(".box").mouseenter(function() {
        var index = $(".box").index(this);
        // console.log(index);
        $("#detail").stop();

        var inboxindex = boxindex.indexOf(index);
        var information = timeAction[inboxindex];
        if(information)
            $("#detail").html(information[1]+"<br>"+information[0]);
        else
            $("#detail").html("No water record");

        var boxPosition = $(this).offset();
        var moveLeft = $("#detail").width()/2 - $(this).width()/2;
        var moveTop = $("#detail").height() + $(this).height()/2;
        $("#detail").css({
            "left": (boxPosition["left"] - moveLeft),
            "top": (boxPosition["top"] - moveTop)
        });
        $("#detail").toggle();
    });
    $(".box").mouseleave(function() {
        $("#detail").stop();
        $("#detail").toggle();
    });
});

function getDayLine() {
    timeline = [];
    var today = new Date();
    var y = today.getFullYear();
    var m = today.getMonth() + 1;
    var d = today.getDate();

    for(var i = 2; i >= 1; i--) {
        var lastMonth = new Date(y, m-i, 0);
        var lastMonthDay = lastMonth.getDate()

        for(var j = 1; j <= lastMonthDay; j++) {
            timeline.push(j);
        }
    }

    for(var i = 1; i <= d; i++) {
        timeline.push(i);
    }
    // console.log(timeline);

    return timeline;
}

function calcDays(Y, M, D) {
    var today = new Date();
    var thatDay = new Date(Y, M-1, D);
    var compared = Math.floor((today - thatDay) / 86400000);

    return compared;
}

var boxindex = [];
var timeAction = [];
function putInRecord(datas) {
    var position = [];
    for(let i in datas) {
        var fulldate = datas[i][0];
        var action = datas[i][1];

        var fulldateSplited = fulldate.split(" ");
        var date = fulldateSplited[0];
        var time = fulldateSplited[1];

        var YMD = date.split("-");
        var Y = YMD[0];
        var M = YMD[1];
        var D = YMD[2];

        var HMS = time.split(":");
        var H = HMS[0];

        var rowNumber = Math.floor(H / 3 );
        // console.log(rowNumber);

        var difference = calcDays(Y, M, D);
        var tdPosition = 49-difference;
        var index = (rowNumber)*50 + tdPosition;

        if(difference < 50 && boxindex.indexOf(index) == -1) {
            position.push([rowNumber, tdPosition]);
            boxindex.push(index);
            timeAction.push([fulldate, action]);
        }
    }
    setTimeout(function() {
        for(let i in position) {
            var row = position[i][0];
            var td = position[i][1];

            $(".row:eq("+row+")").children(".box:eq("+td+")").css("background-color", "#c38d28");
        }
    }, 1000);
}

function getRecord() {
    var today = new Date();
    var y = today.getFullYear();
    var m = today.getMonth() + 1;
    var d = today.getDate();
    $.ajax({
        url: "php/getRecord.php",
        cache: false,
        dataType: "json",
        type: "POST",
        error: function(){ alert('Ajax request failed'); },
        success: function(data) {
            // console.log(data);
            putInRecord(data);
        }
    });
}