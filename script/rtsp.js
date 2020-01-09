var ws;
var pyip='wttmonitor.dlinkddns.com';
function startWS() {
    console.log('start once again');
    ws = new WebSocket("ws://"+pyip+":9999");
    ws.onopen =  function (msg) {
        console.log('webSocket opened');
    };
    ws.onmessage = function (message) {
        //console.log('receive message : ' + message.data); 
		$("#img").attr("src",message.data);
		//var image = new Image();  
		//image.onload = function () {  
		//	context.clearRect(0, 0,  canvas.width, canvas.height);  
		//	context.drawImage(image, 0, 0,canvas.width, canvas.height);  
		//}
		//image.src =message.data;
    };
    ws.onerror = function (error) {
        console.log('error :' + error.name + error.number);
		$("#screen").css({
			"background-color": "black",
			"opacity": "0.5",
			"color": "white"
		});
		$("#screen").text("Not connected to webSocket...");
    };
    ws.onclose =  function () {
        console.log('webSocket closed');
    };
    // ws.send("websocket from js");
}
startWS();

function changeVerticalDiv() {
	$(".verticalDiv").each(function() {
		$(this).css({
			"background-color": "white"
		});
	});
	setTimeout(function() {
		$(".verticalDiv:eq("+(3-vertical)+")").css({
			"background-color": "#3F88C5"
		});
		//console.log(vertical);
	}, 200);
};
function changeHorizontalDiv() {
	$(".horizontalDiv").each(function() {
		$(this).css({
			"background-color": "white"
		});
	});
	setTimeout(function() {
		$(".horizontalDiv:eq("+horizontal+")").css({
			"background-color": "#3F88C5"
		});
		//console.log(horizontal);
	}, 200);
};
// Start web rotate camera to home
var vertical = 0;	// 0~3
var horizontal = 6;	// 0~12 -180, -150, -120, -90, -60, -30, 0, 30, 60, 90, 120 ,150 ,180
var horizontalDEB = [-180, -150, -120, -90, -60, -30, 0, 30, 60, 90, 120 ,150 ,180];
rotate("home");
setPTZSpeed();
changeVerticalDiv();
changeHorizontalDiv();

function rotate(direction) {
	var directionString = "http://wttraspberryserver.ddns.net:80/cgi-bin/view/cammove.cgi?move="+direction;
	$.ajax({
		url: 'php/camera/move.php',
		cache: false,
		dataType: 'html',
		type: 'POST',
		data: {Move: directionString},
		error: function(){ alert('Ajax request failed'); },
		success: function() {
			console.log(direction);
		}
	});
};
function setPTZSpeed() {
	var speedString = "http://wttraspberryserver.ddns.net:80/cgi-bin/view/ptzspeed.cgi?speed=10";
	$.ajax({
		url: 'php/camera/setSpeed.php',
		cache: false,
		dataType: 'html',
		type: 'POST',
		data: {Speed: speedString},
		error: function(){ alert('Ajax request failed'); },
		success: function() {
			console.log("Set Rotate Speed OK!");
		}
	});
};
function rotateDEB(deg) {
	var degString = "http://wttraspberryserver.ddns.net:80/cgi-bin/view/cammove.cgi?aPan="+deg;
	$.ajax({
		url: 'php/camera/deb.php',
		cache: false,
		dataType: 'html',
		type: 'POST',
		data: {Deb: degString},
		error: function(){ alert('Ajax request failed'); },
		success: function() {
			console.log("Degree: "+deg);
		}
	});
};
function verticalReach(lastVertical) {
	//console.log("lastVertical: "+lastVertical);
	//console.log("vertical: "+vertical);
	if(lastVertical != vertical) {
		if(lastVertical < vertical) {
			rotate("up");
			lastVertical++;
		} else {
			rotate("down");
			lastVertical--;
		}
		setTimeout(function() {
			verticalReach(lastVertical);
		}, 500);
	}
}

$(function() {
	$(".up").bind("click", function() {
		if(vertical < 3) {
			rotate("up");
			vertical++;
			changeVerticalDiv();
		}
	});
	$(".down").bind("click", function() {
		if(vertical > 0) {
			rotate("down");
			vertical--;
			changeVerticalDiv();
		}
	});
	$(".left").bind("click", function() {
		if(horizontal > 0) {
			rotate("left");
			horizontal--;
			changeHorizontalDiv();
		}
	});
	$(".right").bind("click", function() {
		if(horizontal > 0) {
			rotate("right");
			horizontal++;
			changeHorizontalDiv();
		}
	});
	$(".home").bind("click", function() {
		rotate("home");
		vertical = 0;
		horizontal = 6;
		changeVerticalDiv();
		changeHorizontalDiv();
	});
	$(".verticalDiv").bind("click", function() {
		lastVertical = vertical;
		
		var index = $(".verticalDiv").index(this);
		vertical = 3-index;
		changeVerticalDiv();
		
		verticalReach(lastVertical);
	});
	$(".horizontalDiv").bind("click", function() {
		var index = $(".horizontalDiv").index(this);
		horizontal = index;
		changeHorizontalDiv();
		
		rotateDEB(horizontalDEB[horizontal]);
	});
});