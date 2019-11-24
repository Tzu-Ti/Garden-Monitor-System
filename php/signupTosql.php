<?php
    $servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "accountdb";
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	if(!$conn) {die("connect error");}
	mysqli_query($conn, 'SET NAMES utf8');
	
	$information = $_POST['Information'];
	
    $name = $information['name'];
    $account = $information['account'];
    $password = $information['password'];
    $email = $information['email'];
    $birth = $information['birth'];
    
	$sql = "INSERT INTO `account` (`name`, `account`, `password`, `email`, `birthday`) VALUES ('$name', '$account', '$password', '$email', '$birth');";
    $results = mysqli_query($conn, $sql) or die("Sign up failed");
	
?>
