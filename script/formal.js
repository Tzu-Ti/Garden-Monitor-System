var scale;
function enterSmallDiv() {
	$(this).find(".popDivName").stop();
	$(this).find("#popDivImage1").stop();
	$(this).find("#popDivImage2").stop();
	
	$(this).find(".popDivName").animate({
		"top": "20%"
	}, 500);
	$(this).find("#popDivImage1").animate({
		"width": "toggle"
	});
	$(this).find("#popDivImage2").fadeToggle(500);
	
	
};
function leaveSmallDiv() {
	$(this).find(".popDivName").stop(true);
	$(this).find("#popDivImage1").stop(true);
	$(this).find("#popDivImage2").stop(true);
	
	$(this).find(".popDivName").animate({
		"top": "30%"
	}, 500);
	$(this).find("#popDivImage1").animate({
		"width": "toggle"
	});
	$(this).find("#popDivImage2").fadeToggle(500);
};

$(function() {
    $(".topLogoDiv").bind("click", function() {
        location.href = "index.html";
    });
    var change = 0;
    $(".topMenu").bind("click", function() {
        $(".popDiv").slideToggle(500);
		$(".popDivShadow").slideToggle(500);
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
$(function() {
	$(".popDivSmall").mouseenter(enterSmallDiv);
	$(".popDivSmall").mouseleave(leaveSmallDiv);
});
