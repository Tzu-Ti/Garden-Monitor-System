$(function() {
    $(".topLogoDiv").bind("click", function() {
        location.href = "index.html";
    });
    var change = 0;
    $(".topMenu").bind("click", function() {
        $(".popDiv").slideToggle(500);
        if(change == 0) {
            $(".topMenu").animate({
                "width": "3px",
                "height": "20px",
                "border-width": "0px 3px",
                "padding": "0 8px",
            });
            change = 1;
        }
        else {
            $(".topMenu").animate({
                "width": "30px",
                "height": "3px",
                "border-width": "3px 0px",
                "padding": "8px 0",
            });
            change = 0;
        }
    });
});
