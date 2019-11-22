<?php
	$servername = "sql201.byethost.com";
	$username = "b5_24743115";
	$password = "ewqazewqaz2504";
	$dbname = "b5_24743115_account";
	$conn = mysql_connect($servername, $username, $password);
	if(!$conn) {die("connect error");}
	mysql_select_db($dbname, $conn);
	
	session_start();

	if(isset($_POST['username']) && isset($_POST['password'])){
		$sql = "SELECT * FROM `account` WHERE `account` LIKE '".$_POST['username']."'";
		$results = mysql_query($sql) or die("No this account");
		$result = mysql_fetch_array($results);
		echo $result['password'];
		if($_POST['password'] == $result['password']){
			$_SESSION['is_login'] = true;
			$_SESSION['name'] = $result['name'];
			header('Location: ../index.php');
		}
		else{
			$_SESSION['is_login'] = false;
			echo("<script> alert('Login Failed, confirm your account number or password'); location.href='../index.php';</script>");
		}
	}else{
		echo("<script> alert('Login Failed, confirm your account number or password'); location.href='../index.php';</script>");
	}
	mysql_close($conn);
?>
