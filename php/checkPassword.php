<?php
    include("mysql.php");
	
	mysqli_query($conn, 'SET NAMES utf8');
	
	session_start();
	$account = $_SESSION['account'];
	$oldPass = $_POST['oldPassword'];
	
	// To fetch that this account exists or not
	$sql = "SELECT `password` FROM `account` WHERE `account`='$account';";
	$results = mysqli_query($conn, $sql);
	$result = mysqli_fetch_array($results);
	
	if($oldPass == $result[0]) {
		echo '1';	// '1' represent correct.
	} else {
		echo '2';	// '2' represent not correct.
	}
	mysqli_close($conn);
?>