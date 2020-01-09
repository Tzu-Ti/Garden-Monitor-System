var pokemon = ["Ivysaur", "charmeleon", "wartotle", "bayleef", "quilava", "croconaw"];
pressSubmit = 0;
var finished = 0;
function changePokemon() {
    var randomNumber1 = Math.floor(Math.random() * 80);
	var randomNumber2 = Math.floor(Math.random() * 100);
    var pokemonNumber = randomNumber2 % 6;
    $(".big").css({
        "left": randomNumber1 + "%",
        "background-image": "url('image/pokemon/" + pokemon[pokemonNumber] + ".png')"
    });
    $(".big").fadeToggle(500);

	setTimeout(function () {
		if(pressSubmit == 0) {
			$(".big").fadeToggle(500);
			setTimeout(function() {
				changePokemon();
			}, 500);
		} else {
			sendEmail();
			$("#contactInput").slideToggle(2000);
			$(".submitDiv").animate({
				"height": "85%"
			}, 2000);
			$(".big").animate({
				"left": "35%",
				"width": "30%"
			}, 2000);
			checkFinished();
		}
	}, 2000);
};
function checkFinished() {
	setTimeout(function() {
		if(finished == 1) {
			location.href = "index.php";
		} else {
			checkFinished();
		}
	}, 3000);
};
function sendEmail() {
	var text = $("#contactInput").val();
	
	$.ajax({
		url: 'php/sendEmail.php',
		cache: false,
		dataType: 'html',
		type: 'POST',
		data: {"Information": text},
		error: function(){alert('Ajax request failed');},
		success: function(data){ 
			alert("Mail sent successful!"); 
			finished = 1;
		}
	});
}

$(function(){
    changePokemon();
	
	//send email
	$(".big").bind("click", function() {
		pressSubmit = 1;
	});
});
