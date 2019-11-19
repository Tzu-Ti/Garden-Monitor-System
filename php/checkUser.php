<?php
	session_start();
	$db_user = "admin";
	$db_password = 'admin';

	if(isset($_POST['username']) && isset($_POST['password'])){
		if($_POST['username'] == $db_user && $_POST['password'] == $db_password){
			$_SESSION['is_login'] = true;
			$_SESSION['name'] = "Titi";
			header('Location: ../index.php');
		}
		else{
			$_SESSION['is_login'] = false;
			header('Location: ../index.php?msg=登入失敗，請確認帳號密碼');
		}
	}else{
		header('Location: ../index.php?msg=請正確登入');
	}
?>
