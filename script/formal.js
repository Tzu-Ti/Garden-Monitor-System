function enterSmallDiv() {
	$(this).find(".popDivName").stop();
	$(this).find("#popDivImage1").stop();
	$(this).find("#popDivImage2").stop();
	$(this).find("#popDivImage3").stop();
	$(this).find("#popDivImage4").stop();
	$(this).find("#popDivImage5").stop();
	
	$(this).find(".popDivName").animate({
		"top": "15%"
	}, 500);
	$(this).find("#popDivImage1").animate({
		"width": "toggle"
	});
	$(this).find("#popDivImage2").fadeToggle(500);
	$(this).find("#popDivImage3").fadeToggle(500);
	$(this).find("#popDivImage4").fadeToggle(500);
	$(this).find("#popDivImage5").animate({
		"width": "toggle"
	});
	
};
function leaveSmallDiv() {
	$(this).find(".popDivName").stop(true);
	$(this).find("#popDivImage1").stop(true);
	$(this).find("#popDivImage2").stop(true);
	$(this).find("#popDivImage3").stop(true);
	$(this).find("#popDivImage4").stop(true);
	$(this).find("#popDivImage5").stop(true);
	
	$(this).find(".popDivName").animate({
		"top": "30%"
	}, 500);
	$(this).find("#popDivImage1").animate({
		"width": "toggle"
	});
	$(this).find("#popDivImage2").fadeToggle(500);
	$(this).find("#popDivImage3").fadeToggle(500);
	$(this).find("#popDivImage4").fadeToggle(500);
	$(this).find("#popDivImage5").animate({
		"width": "toggle"
	});
};
var change = 0;
function popDiv() {
    $(".popDiv").slideToggle(500);
    $(".popDivShadow").slideToggle(500);
    if (change == 0) {
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
}

$(function() {
    $(".topCompanyName").bind("click", function() {
        location.href = "index.php";
    });
	$(".topLogo").bind("click", function() {
        location.href = "index.php";
    });
    $(".popDivSmall").bind("click", function() {
        var popId = $(this).attr("id");
        switch(popId) {
            case "popDiv1":
                location.href = "monitor.php";
                break;
            case "popDiv2":
                location.href = "water.php";
                break;
            case "popDiv3":
                location.href = "events.php";
                break;
            case "popDiv4":
                location.href = "setting.php";
                break;
            case "popDiv5":
                location.href = "contact.php";
                break;
        }
    });
    
    $(".topMenu").bind("click", popDiv);
    $(".popDivShadow").bind("click", popDiv);
});
$(function() {
	$(".popDivSmall").mouseenter(enterSmallDiv);
	$(".popDivSmall").mouseleave(leaveSmallDiv);
});
