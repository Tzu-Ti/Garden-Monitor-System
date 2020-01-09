<?php
	include("mysql.php");
	
	session_start();
	$account = $_SESSION['account'];
	if(!empty($_POST['name'])) {
		$name = $_POST['name'];
		$sql = "UPDATE `account` SET `name`='$name' WHERE `account`= '$account'";
		$results = mysqli_query($conn, $sql) or die("Update failed");
	}
	if(!empty($_POST['password'])) {
		$password = $_POST['password'];
		$sql = "UPDATE `account` SET `password`='$password' WHERE `account`= '$account'";
		$results = mysqli_query($conn, $sql) or die("Update failed");
	}
	if(!empty($_POST['email'])) {
		$email = $_POST['email'];
		$sql = "UPDATE `account` SET `email`='$email' WHERE `account`= '$account'";
		$results = mysqli_query($conn, $sql) or die("Update failed");
	}
	if(!empty($_POST['birth'])) {
		$birth = $_POST['birth'];
		$sql = "UPDATE `account` SET `birthday`='$birth' WHERE `account`= '$account'";
		$results = mysqli_query($conn, $sql) or die("Update failed");
	}
	if(!empty($_POST['pokemon'])) {
		$pokemon = $_POST['pokemon'];
		$sql = "UPDATE `account` SET `pokemon`='$pokemon' WHERE `account`= '$account'";
		$results = mysqli_query($conn, $sql) or die("Update failed");
	}
	echo("<script>alert('Modify profile successful!'); location.href='../information.php';</script>");
?>