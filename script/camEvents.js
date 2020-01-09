function Dictionary() {
    let items = {};
    
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
};

const dictCamEvents = new Dictionary();
var rightlastI = 0;
var month = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

$.ajax({
    url: "php/getCamEvent.php",
    cache: false,
    dataType: "json",
    type: "POST",
    error: function(){ alert('Ajax request failed'); },
    success: function(data) {
        //console.log(data);
        for(let i in data) {
            var timeIpAction = [data[i][1], data[i][2], data[i][3]];
            var date = data[i][0].toString();
            var dateSplited = date.split("-");
            console.log(dateSplited[1]);
            var dateStr = dateSplited[2] + "/" + month[Number(dateSplited[1])] + "/" + dateSplited[0];
            console.log(dateStr);
            dictCamEvents.set(dateStr, timeIpAction);
        }
        //console.log(dictCamEvents.getKeys());
    }
});

setTimeout(function() {
    var keys = dictCamEvents.getKeys();

    for(let key in keys) {
        //console.log(key);

        var dayTag = $("<div></div>");
        dayTag.attr("class", "rightInsideDiv");
        $(".rightInside").append(dayTag);

        var titleTag = $("<div></div>");
        titleTag.attr("class", "rightDate");
        $(".rightInsideDiv:eq("+key+")").append(titleTag);
        $(".rightDate:eq("+key+")").text(keys[key]);

        var lineTag = $("<div></div>");
        lineTag.attr("class", "line");
        $(".rightInsideDiv:eq("+key+")").append(lineTag);

        var contentTag = $("<div></div>");
        contentTag.attr("class", "rightContent");
        $(".rightInsideDiv:eq("+key+")").append(contentTag);

        var value = dictCamEvents.getValue(keys[key]);
        console.log(value);

        var i, currentI;
        for(i = 0; i < value.length; i++) {
            currentI = rightlastI + i;

            var perContentTag = $("<div></div>");
            perContentTag.attr("class", "rightPerContent");
            $(".rightContent:eq("+key+")").append(perContentTag);

            var time = $("<div></div>");
            time.attr("class", "rightTime");
            $(".rightPerContent:eq("+currentI+")").append(time);

            var ip = $("<div></div>");
            ip.attr("class", "rightIp");
            $(".rightPerContent:eq("+currentI+")").append(ip);

            var event = $("<div></div>");
            event.attr("class", "rightEvent");
            $(".rightPerContent:eq("+currentI+")").append(event);

            var str = value[i][0][0] + ":" + value[i][0][1] + ":" + value[i][0][2];
            $(".rightTime:eq("+currentI+")").text(str);
    
            $(".rightIp:eq("+currentI+")").text(value[i][1]);
                
            $(".rightEvent:eq("+currentI+")").text(value[i][2]);
        }

        rightlastI = currentI+1;
        console.log("last I: ", rightlastI);
    }
}, 300);
