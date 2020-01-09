$(function() {
	$(".pokemonSmall").mouseenter(function() {
		var index = $(".pokemonSmall").index(this);
		index = index % 3;
		console.log(index);
		switch(index) {
			case 0:
				$(this).css({ "border": "3px solid green" });
				break;
			case 1:
				$(this).css({ "border": "3px solid orange" });
				break;
			case 2:
				$(this).css({ "border": "3px solid blue" });
				break;
		}
	});
	$(".pokemonSmall").mouseleave(function() {
		$(this).css({
			"border": "3px solid grey"
		});
	});
	$(".pokemonSmall").click(function() {
		var pokemon = ["bulbasaur", "charmander", "squirtle", "chikorita", "cyndaquil", "totodile"];
		var index = $(".pokemonSmall").index(this);
		$("#pokemon").val(pokemon[index]);
	});
});

function formSubmit() {
	if(oldPasswordOK == 0){
		alert("Input your current password");
		$("#oldPassword").css({
			"background-color": "#FF3030"
		});
	} else {
		if(passwordOK == 1)	$("#modifyForm").submit();
		else	alert("Comfirm your information");
	}
};
function comfirmPass() {
	passwordVal = $("#password").val();
	passwordVal2 = $("#password2").val();
	if(passwordVal2 != passwordVal) {
		$("#password2").css({
			"background-color": "#FF3030"
		});
		passwordOK = 0;
	} else {
		$("#password2").css({
			"background-color": "#26FF26"
		});
		passwordOK = 1;
	}
};
var passwordOK = 1;
var passwordVal, passwordVal2;
$(function() {
	$("#password").on("input", function(){
		comfirmPass()
	});
	$("#password2").on("input", function() {
		comfirmPass()
	});
});
var oldPasswordOK = 0;
$(function() {
	$("#oldPassword").blur(function() {
		var oldPassword = $(this).val();
		console.log(oldPassword);
		$.ajax({
			url: 'php/checkPassword.php',
			cache: false,
			dataType: 'html',
			type: 'POST',
			data: {"oldPassword": oldPassword},
			error: function(){ alert('Ajax request failed'); },
			success: function(data) {
				console.log(data);
				if(data == '1') {
					$("#oldPassword").css({
						"background-color": "#26FF26"
					});
					oldPasswordOK = 1;
				} else if(data == '2') {
					$("#oldPassword").css({
						"background-color": "#FF3030"
					});
					oldPasswordOK = 0;
				}
			}	
		});
	});
});
