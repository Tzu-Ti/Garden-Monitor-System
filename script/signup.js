$(function() {
	var state = 2;
	$("form").keydown(function(event) {
		console.log(state);
		if(event.which == 13) {
			console.log("enter");
			$("input").remove();
			if(state==2) {
				$(".signupTitle").text("Account number");
				$("form").append("<input type='text' id='username' style='font-size:2em; text-align:center' required autofocus>", "<input type='text' id='confirm' style='display: none'>");
				state++;
			}
			else if(state==3) {
				$(".signupTitle").text("Password");
				$("form").append("<input type='password' id='password' style='font-size:2em; text-align:center' required autofocus>", "<input type='text' id='confirm' style='display: none'>");
				state++;
			}
			else if(state==4) {
				$(".signupTitle").text("E-mail");
				$("form").append("<input type='email' id='email' style='font-size:2em; text-align:center' required autofocus>", "<input type='text' id='confirm' style='display: none'>");
				state++;
			}
			else if(state==5) {
				$(".signupTitle").text("Birthday");
				$("form").append("<input type='text' id='birth' style='font-size:2em; text-align:center' required autofocus placeholder='1997/12/03'>", "<input type='text' id='confirm' style='display: none'>");
				state++;
			}
			else if(state==6) {
				$(".signupTitle").text("Sex");
				$("form").append("<input type='radio' name='sex' style='font-size:2em; text-align:center' value='female' required>Female", "<input type='radio' name='sex' style='font-size:2em; text-align:center' value='male' required>Male");
				state++;
			}
		}
	});
});