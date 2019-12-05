function submitBtnClick(yourname, account, password, email, birth, pokemon) {
	if(pokemon.length == 0) {
		alert("Double Click to Choose The Pokemon");
		return 0;
	}
	var information = {
		"name": yourname,
		"account": account,
		"password": password,
		"email": email,
		"birth": birth,
		"pokemon": pokemon
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

function validateEmail(email) {
	reg = /^[^\s]+@[^\s]+\.[^\s]{2,3}$/;
	if (reg.test(email)) {
		return true;
	} else {
		return false;
	}
};

var yourname, account, password, email, birth
var pokemon = "";
var passwordCode = "";
$(function() {
	var state = 1;
	var lastState = 1;
	$("input").keydown(function(event) {
		if(event.which == 13) {
			state++;
			
			switch(state){
				// 2: account number
				case 2:
					$(".signupTitle").text("Account number");
					if(lastState == 1) {
						yourname = $("#name").val();
						console.log(yourname);
						$(".synopsisUL").append("<li><b>Name: </b>"+yourname+"</li>");
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
									$(".synopsisUL").append("<li><b>Account Number: </b>" + account + "</li>");
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
						$(".synopsisUL").append("<li><b>Password: </b>" + passwordCode + "</li>");
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
					if(lastState == 4) {
						email = $("#email").val();
						var validation = validateEmail(email);
						console.log(validation);
						if(validation) {
							console.log(email);
							$(".signupTitle").text("Birthday");
							$(".synopsisUL").append("<li><b>E-mail: </b>" + email + "</li>");
							$("#email").css({
								"display": "none"
							});
							$(".birth").slideToggle(500);
							$("#birth-Y").focus();
							lastState = 5;
						} else {
							alert("Wrong E-mail Format");
							state--;
						}
					}
					break;
				
				// 6: submit
				case 6:
					$(".signupTitle").text("Sure To Submit?");
					if(lastState == 5) {
						var Y = $("#birth-Y").val();
						var M = $("#birth-M").val();
						var D = $("#birth-D").val();
						//birth = $(".birth").val();
						console.log(Y);
						console.log(M);
						console.log(D);
						$(".synopsisUL").append("<li><b>Birthday: </b>" + birth + "</li>");
						$(".birth").css({
							"display": "none"
						});
						$(".signupImage").css({
							"background-image": "none"
						});
						$(".signupInput").append("<button id='submit' onclick='submitBtnClick(yourname, account, password, email, birth, pokemon)'> Submit </button>");
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
		pokemon = $(this).attr("src");
		pokemon = pokemon.split("/");
		pokemon = pokemon[pokemon.length-1];
		pokemon = pokemon.split(".");
		pokemon = pokemon[0];
		console.log(pokemon);
		$("#pokemon").remove();
		$(".synopsisUL").prepend("<li id='pokemon'><b>Pokemon: </b>" + pokemon + "</li>");
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

	// Click Birthday submit button
	$("#submitBirth").click(function() {
		console.log("CLICK!!!!!");
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

$(function() {
	$(".signupImage").mouseenter(function() {
		$(".synopsis").stop()
		$(".synopsis").fadeToggle(500);
	});
	$(".synopsis").mouseleave(function () {
		$(".synopsis").stop(true)
		$(".synopsis").fadeToggle(500);
	});
});
