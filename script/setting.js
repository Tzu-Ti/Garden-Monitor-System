$(function() {
	$(".fourDiv:eq(0)").bind("click", function() {
		location.href = "camera.php";
	});
	$(".fourDiv:eq(1)").bind("click", function() {
		location.href = "modify.php";
	});
	$(".fourDiv:eq(2)").bind("click", function() {
		location.href = "forgot_pass.php";
	});
	$(".fourDiv:eq(3)").bind("click", function() {
		location.href = "information.php";
	});
});