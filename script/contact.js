var pokemon = ["Ivysaur", "charmeleon", "wartotle", "bayleef", "quilava", "croconaw"];
function changePokemon() {
    var randomNumber = Math.floor(Math.random() * 80);
    var pokemonNumber = randomNumber % 6;
    $(".big").css({
        "left": randomNumber + "%",
        "background-image": "url('image/pokemon/" + pokemon[pokemonNumber] + ".png')"
    });
    $(".big").fadeToggle(500);
    setTimeout(function () {
        $(".big").fadeToggle(500);
        setTimeout(function() {
            changePokemon();
        }, 500);
    }, 2000);
};
$(function(){
    changePokemon();
});
