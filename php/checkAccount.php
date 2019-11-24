<?php
    include("mysql.php");
	
	mysqli_query($conn, 'SET NAMES utf8');
	
	$account = $_POST['Account'];
	
	// To fetch that this account exists or not
	$sql = "SELECT * FROM `account` WHERE `account`='$account';";
	$results = mysqli_query($conn, $sql);
	$result = mysqli_fetch_array($results);
	
	if(empty($result)) {
		echo '1';	// '1' represent useful.
	} else {
		echo '2';	// '2' represent which account had already existed.
	}
	mysqli_close($conn);
?>