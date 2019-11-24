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
									alert("This account is useful");
									$(".signupTitle").text("Password");
									$("#account").css({
										"display": "none"
									});
									$("#password").slideToggle(500);
									$("#password").focus();
									lastState = 3;
								} else if (data == '2') {
									alert("This account had already existed");
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
						$(".signupInput").append("<button id='submit' onclick='submitBtnClick(yourname, account, password, email, birth, sex)'> Submit </button>");
					}
					lastState = 6;
					break;
			}
		}
	});
});