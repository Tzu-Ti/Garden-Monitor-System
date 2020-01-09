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

var firstNum = 0;
var lastNum = 0;
function ajaxGetData(dataNum) {
    lastNum = firstNum;
    firstNum += dataNum;
    var params = {
        "LASTNUM": lastNum,
        "FIRSTNUM": firstNum
    };
    //console.log(JSON.stringify(params));
    $.ajax({
        url: "php/getConnEvent.php",
        cache: false,
        dataType: "json",
        type: "POST",
        data: "NUM="+JSON.stringify(params),
        beforeSend: function() {
            var waitTag = $("<div></div>");
            waitTag.attr("class", "waitDiv");
            $(".leftInside").append(waitTag);
            console.log("before");
        },
        complete: function() {
            $(".waitDiv").remove();
        },
        error: function(){ alert('Ajax request failed'); },
		success: function(data) {
            for(var i = 0; i < data.length; i++) {
                //console.log(data[i]);
                var TimeipEvent = [data[i][3], data[i][0], data[i][2]]; // [time, ip, event]
                var keys = dictConnEvents.getKeys();
                if(data[i][1] == keys[lastKey] && lastKey != 0) {
                    data[i][1] += " (continued)";
                    dictConnEvents.set(data[i][1], TimeipEvent);
                } else {
                    dictConnEvents.set(data[i][1], TimeipEvent);
                }
                
            }
            //console.log(dictConnEvents.getKeys());
        }
    });
};

const dictConnEvents = new Dictionary();
var lastKey = 0;
var lastI = 0;

ajaxGetData(2000);
    
setTimeout(function() {
    var keys = dictConnEvents.getKeys();

    for(let key in keys) {
        //console.log(key);

        var dayTag = $("<div></div>");
        dayTag.attr("class", "insideDiv");
        $(".leftInside").append(dayTag);

        var titleTag = $("<div></div>");
        titleTag.attr("class", "date");
        $(".insideDiv:eq("+key+")").append(titleTag);
        $(".date:eq("+key+")").text(keys[key]);

        var lineTag = $("<div></div>");
        lineTag.attr("class", "line");
        $(".insideDiv:eq("+key+")").append(lineTag);

        var contentTag = $("<div></div>");
        contentTag.attr("class", "content");
        $(".insideDiv:eq("+key+")").append(contentTag);

        var value = dictConnEvents.getValue(keys[key]);
        //console.log(value);

            
        var i, currentI;
        for(i = 0; i < value.length; i++) {
            currentI = lastI + i;
            //console.log("current I: "+currentI);

            var perContentTag = $("<div></div>");
            perContentTag.attr("class", "perContent")
            $(".content:eq("+key+")").append(perContentTag);

            var time = $("<div></div>");
            time.attr("class", "time");
            $(".perContent:eq("+currentI+")").append(time);
                
            var ip = $("<div></div>");
            ip.attr("class", "ip");
            $(".perContent:eq("+currentI+")").append(ip);

            var event = $("<div></div>");
            event.attr("class", "event");
            $(".perContent:eq("+currentI+")").append(event);

            var str = value[i][0][0] + ":" + value[i][0][1] + ":" + value[i][0][2];
            $(".time:eq("+currentI+")").text(str);
    
            $(".ip:eq("+currentI+")").text(value[i][1]);
                
            $(".event:eq("+currentI+")").text(value[i][2]);
        }
                
        lastI = currentI+1;
        lastKey = key;
        //console.log("last I: ", lastI);
    }
}, 300);

function refresh() {
    ajaxGetData(2000);
    setTimeout(function() {
        var keys = dictConnEvents.getKeys();
        // console.log(keys);
        // console.log("length: "+keys.length);
        // console.log("lastKey: "+lastKey);

        var key;
        for(key = Number(lastKey)+1; key < keys.length; key++) {
            //console.log("key: "+key);
        
            var dayTag = $("<div></div>");
            dayTag.attr("class", "insideDiv");
            $(".leftInside").append(dayTag);

            var titleTag = $("<div></div>");
            titleTag.attr("class", "date");
            $(".insideDiv:eq("+key+")").append(titleTag);
            $(".date:eq("+key+")").text(keys[key]);

            var lineTag = $("<div></div>");
            lineTag.attr("class", "line");
            $(".insideDiv:eq("+key+")").append(lineTag);

            var contentTag = $("<div></div>");
            contentTag.attr("class", "content");
            $(".insideDiv:eq("+key+")").append(contentTag);

            var value = dictConnEvents.getValue(keys[key]);
            //console.log(value);

            var i, currentI;
            for(i = 0; i < value.length; i++) {
                currentI = lastI + i;
                //console.log("current I: "+currentI);

                var perContentTag = $("<div></div>");
                perContentTag.attr("class", "perContent")
                $(".content:eq("+key+")").append(perContentTag);

                var time = $("<div></div>");
                time.attr("class", "time");
                $(".perContent:eq("+currentI+")").append(time);

                var ip = $("<div></div>");
                ip.attr("class", "ip");
                $(".perContent:eq("+currentI+")").append(ip);

                var event = $("<div></div>");
                event.attr("class", "event");
                $(".perContent:eq("+currentI+")").append(event);

                var str = value[i][0][0] + ":" + value[i][0][1] + ":" + value[i][0][2];
                $(".time:eq("+currentI+")").text(str);
    
                $(".ip:eq("+currentI+")").text(value[i][1]);
                
                $(".event:eq("+currentI+")").text(value[i][2]);
            }

            lastI = currentI+1;
            lastKey = key;
        }
    }, 300);
};

var allDataNum = 2000;
var lastTime = 0;
$(function() {
    $(".leftInside").scroll(function() {
        var h = $(this).height();   // div height
        var sh = $(this)[0].scrollHeight;   // current scroll height
        var st =$(this)[0].scrollTop;   // now scroll top position
        //console.log("st: "+st+" h: "+h+" sh: "+sh);
        if(st+h >= sh-1) {
            var dt = new Date();
            nowTime = dt.getTime();
            //console.log(nowTime - lastTime);
            if(nowTime - lastTime > 2000) {
                //console.log("allDataNum: "+allDataNum);
                if(allDataNum > 27000) {
                    alert("Out of data!!");
                    var overTag = $("<div></div>");
                    overTag.attr("class", "overDiv");
                    $(".leftInside").append(overTag);
                    $(".overDiv").text("Out of data!!!");
                }
                else {
                    refresh();
                    allDataNum += 2000;
                }
                lastTime = nowTime;
            }
            
        }
    });
});