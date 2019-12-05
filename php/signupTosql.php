<?php
    include("mysql.php");
	mysqli_query($conn, 'SET NAMES utf8');
	
	$information = $_POST['Information'];
	
    $name = $information['name'];
    $account = $information['account'];
    $password = $information['password'];
    $email = $information['email'];
    $birth = $information['birth'];
	$pokemon = $information['pokemon'];
    
	$sql = "INSERT INTO `account` (`name`, `account`, `password`, `email`, `birthday`, `pokemon`) VALUES ('$name', '$account', '$password', '$email', '$birth', '$pokemon');";
    $results = mysqli_query($conn, $sql) or die("Sign up failed");
	
?>
