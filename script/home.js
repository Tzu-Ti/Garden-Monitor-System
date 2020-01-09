var fadeInTime = 800;
var fadeOutTime = 300;
function fadein(num1, num2) {
	if(num1 == 1) {
		$(".cover:eq(" + num1 + ")").animate({
			"opacity": "0.2",
		}, fadeInTime);
		$(".cover:eq(" + num2 + ")").animate({
			"opacity": "0.3",
		}, fadeInTime);
	} else if(num2 == 1) {
		$(".cover:eq(" + num1 + ")").animate({
			"opacity": "0.3",
		}, fadeInTime);
		$(".cover:eq(" + num2 + ")").animate({
			"opacity": "0.2",
		}, fadeInTime);
	} else {
		$(".cover:eq(" + num1 + ")").animate({
			"opacity": "0.3",
		}, fadeInTime);
		$(".cover:eq(" + num2 + ")").animate({
			"opacity": "0.3",
		}, fadeInTime);
	}
	
}
function fadeout(num1, num2) {
	
	$(".cover:eq("+num1+")").animate({
		"opacity": "0"
	}, fadeOutTime);
	$(".cover:eq("+num2+")").animate({
		"opacity": "0"
	}, fadeOutTime);
}

var number1, number2, number, prenumber;
function movingLeft() {
	var numbers = [0, 1, 2];
	var currentID = $(this).attr("id");
	number = currentID.split("")[5] - 1;
	
	$(this).stop();
	$(this).animate({
		"background-position": "80%"
	}, fadeInTime)
	$(".bottomLine:eq(" + number +")").animate({
		"width": "100%"
	}, fadeInTime)
	
	if(number == number1) {
		$(".cover:eq(" + number2 + ")").stop();
	} else {
		$(".cover:eq(" + number1 + ")").stop();
	}
	
	for(var i = 0; i < 3; i++) {
		if(i == number) {
			numbers.splice(i, 1);
		}
	}
	number1 = numbers[0];
	number2 = numbers[1];
	
	fadein(number1, number2);
	
	$(".note:eq("+number+")").stop();
	$(".note:eq("+number+")").fadeToggle(fadeInTime);
	
	$(".funcName:eq("+number+")").stop();
	$(".funcName:eq("+number+")").animate({
		"top": "20%"
	}, fadeInTime);
};
function movingRight() {
	$(this).stop(true);
	$(this).animate({
		"background-position": "90%"
	}, fadeOutTime);
	$(".cover").stop(true);
	$(".bottomLine").stop(true);
	$(".bottomLine:eq(" + number + ")").css({
		"width": "0%"
	});
	
	fadeout(number1, number2);
	
	$(".note:eq("+number+")").stop();
	$(".note:eq("+number+")").fadeToggle(fadeOutTime);
	
	$(".funcName:eq("+number+")").stop();
	$(".funcName:eq("+number+")").animate({
		"top": "30%"
	}, fadeOutTime);
}

function submitBtnClick() {
	$(".loginForm").submit();
}


$(function() { 
	$(".moving").mouseenter(movingLeft);
	$(".moving").mouseleave(movingRight);
}); 
	
$(function() {
	// go to monitor.html
	$(".moving:eq(0)").bind("click", function() {
		location.href = "monitor.php";
	});
	// go to water.html
	$(".moving:eq(1)").bind("click", function () {
		location.href = "water.php";
	});
	// go to setting.html
	$(".moving:eq(2)").bind("click", function () {
		location.href = "setting.php";
	});
	// go to features.php
	$(".three-div:eq(0)").click(function() {
		location.href = "features.php";
	});
	// go to events.php
	$(".three-div:eq(1)").click(function() {
		location.href = "events.php";
	});
	// go to contact.php
	$(".three-div:eq(2)").click(function() {
		location.href = "contact.php";
	});
	$(".loginButton").bind("click", function() {
		$(".login").fadeToggle(300);
	});
	$("#cancel").bind("click", function() {
		$(".login").fadeToggle(300);
	});
	$(".username").bind("click", function() {
		if(confirm("Logout?")) {
			location.href = "php/logout.php";
		}
	});
});
