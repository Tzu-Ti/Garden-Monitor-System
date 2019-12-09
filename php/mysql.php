<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "accountdb";
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	if(!$conn) {die("connect error");}
?>