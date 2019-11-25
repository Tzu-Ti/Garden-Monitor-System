function submitBtnClick(yourname, account, password, email, birth) {
	var information = {
		"name": yourname,
		"account": account,
		"password": password,
		"email": email,
		"birth": birth
	};
	console.log(information);
	
	$.ajax({
		url: 'php/signupTosql.php',
		cache: false,
		dataType: 'html',
		type: 'POST',
		data: {"Information": information},
		error: function(){alert('Ajax request failed');},
		success: function(data){ 
			alert("Sign up success!"); 
			location.href = "index.php";
		}
	});
}

var yourname, account, password, email, birth, sex;
var passwordCode = "";
$(function() {
	var state = 1;
	var lastState = 1;
	$("input").keydown(function(event) {
		if(event.which == 13) {
			console.log("state: "+state);
			console.log("lastState: "+lastState);
			state++;
			console.log("enter");
			
			switch(state){
				// 2: account number
				case 2:
					$(".signupTitle").text("Account number");
					if(lastState == 1) {
						yourname = $("#name").val();
						console.log(yourname);
						$("#name").css({
							"display": "none"
						});
						$("#account").slideToggle(500);
						$("#account").focus();
					}
					lastState = 2;
					break;
				// 3: password
				case 3:
					if(lastState == 2) {
						account = $("#account").val();
						// check the account is not existed.
						$.ajax({
							url: 'php/checkAccount.php',
							cache: false,
							dataType: 'html',
							type: 'POST',
							data: {"Account": account},
							error: function(){ alert('Ajax request failed'); },
							success: function(data) {
								if(data == '1') {
									$(".signupTitle").text("Password");
									$("#account").css({
										"display": "none"
									});
									$("#password").slideToggle(500);
									$("#password").focus();
									lastState = 3;
								} else if (data == '2') {
									alert("This account has been used");
									state--;
								}
							}	
						});
					}
					break;
				// 4: email
				case 4:
					$(".signupTitle").text("E-mail");
					if(lastState == 3) {
						password = $("#password").val();
						console.log(password);
						for (var i = 0; i < password.length; i++) {
							passwordCode += '*';
						}
						$("#password").css({
							"display": "none"
						});
						$("#email").slideToggle(500);
						$("#email").focus();
					}
					lastState = 4;
					break;
				// 5: birthday
				case 5:
					$(".signupTitle").text("Birthday");
					if(lastState == 4) {
						email = $("#email").val();
						console.log(email);
						$("#email").css({
							"display": "none"
						});
						$("#birth").slideToggle(500);
						$("#birth").focus();
					}
					lastState = 5;
					break;
				
				// 6: submit
				case 6:
					$(".signupTitle").text("Sure To Submit?");
					if(lastState == 5) {
						birth = $("#birth").val();
						console.log(birth);
						$("#birth").css({
							"display": "none"
						});
						$(".signupImage").css({
							"background-image": "none"
						});
						var information = "Name: "+yourname+"<br>";
						$(".signupImage").html(
							"<ul style='list-style-type:none; font-size:1.5em; padding-left: 0px; margin-top: 15%'><li><b>Name: </b>"+yourname+"</li>"+
							"<li><b>Account Number: </b>"+account+"</li>"+
							"<li><b>Password: </b>"+passwordCode+"</li>"+
							"<li><b>E-mail: </b>"+email+"</li>"+
							"<li><b>Birthday: </b>"+birth+"</li></ul>"
						);
						$(".signupInput").append("<button id='submit' onclick='submitBtnClick(yourname, account, password, email, birth, sex)'> Submit </button>");
						$("#submit").focus();
					}
					lastState = 6;
					break;
			}
		}
	});
});

$(function() {
	var timer;
	$(".img").each(function() {
		var tag = $("<div></div>");
		tag.attr("class", "big");
		$(".all").append(tag);
		var src = $(this).attr("src");
		tag.attr("style", "background-image: url("+src+")");
	});
	$(".img").click(function() {
		clearTimeout(timer);
		$(".signupImage").css({ "border": "5px solid #666" });
		$(".all").stop();
		
		var index = $(".img").index(this);
		
		var pos = index * -300 + 75;
		$(".all").animate({
			"left": pos+"px"
		}, 2500);
		
		var next = index + 1;
		if(next == $(".img").length) next=0;
		
		timer = setTimeout(function() {
			$(".img")[next].click()
		}, 3000);
	});
	
	// Click the first image at the first time.
	$(".img")[0].click();
	
	// Double click to lock the image
	$(".img").dblclick(function() {
		$(".all").stop();
		var index = $(".img").index(this);
		var pos = index * -300 + 75;
		$(".all").animate({
			"left": pos+"px"
		}, 500);
		
		indexRE = index % 3;
		console.log(indexRE);
		switch(indexRE) {
			case 0:
				$(".signupImage").css({ "border": "5px solid green" });
				break;
			case 1:
				$(".signupImage").css({ "border": "5px solid orange" });
				break;
			case 2:
				$(".signupImage").css({ "border": "5px solid blue" });
				break;
		}
		clearTimeout(timer);
	});
});

$(function() {
	$(".imgStyle").mouseenter(function() {
		var index = $(".imgStyle").index(this);
		index = index % 3;
		console.log(index);
		switch(index) {
			case 0:
				$(this).css({ "border": "5px solid green" });
				break;
			case 1:
				$(this).css({ "border": "5px solid orange" });
				break;
			case 2:
				$(this).css({ "border": "5px solid blue" });
				break;
		}
	});
	$(".imgStyle").mouseleave(function() {
		$(this).css({
			"border": "5px solid grey"
		});
	});
});