<?php
	include("mysql.php");
	
	session_start();

	if(isset($_POST['account']) && isset($_POST['password'])){
		$sql = "SELECT * FROM `account` WHERE `account` LIKE '".$_POST['account']."'";
		$results = mysqli_query($conn, $sql) or die("No this account");
		$result = mysqli_fetch_array($results);
		
		// if input is email
		if(empty($result)) {
			$sql = "SELECT * FROM `account` WHERE `email` LIKE '".$_POST['account']."'";
			$results = mysqli_query($conn, $sql) or die("No this E-mail");
			$result = mysqli_fetch_array($results);
		}
		echo $result['password'];
		
		if($_POST['password'] == $result['password']){
			$_SESSION['is_login'] = true;
			$_SESSION['account'] = $result['account'];
			$_SESSION['name'] = $result['name'];
			$_SESSION['email'] = $result['email'];
			$_SESSION['pokemon'] = $result['pokemon'];
			header('Location: ../index.php');
		}
		else{
			$_SESSION['is_login'] = false;
			echo("<script> alert('Login Failed, confirm your account number or password'); location.href='../index.php';</script>");
		}
		
	}else{
		echo("<script> alert('Not get the number'); location.href='../index.php';</script>");
	}
	mysqli_close($conn);
?>
