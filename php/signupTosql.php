<?php
    $servername = "sql201.byethost.com";
	$username = "b5_24743115";
	$password = "ewqazewqaz2504";
	$dbname = "b5_24743115_account";
	$conn = mysql_connect($servername, $username, $password);
	if(!$conn) {die("connect error");}
    mysql_select_db($dbname, $conn);
    
    $name = $_POST['name'];
    $account = $_POST['account'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    $birth = $_POST['birth'];
    $sex = $_POST['sex'];
    
    if(isset($name) && isset($account) && isset($password) && isset( $email)) {
        $sql = "INSERT INTO ˋaccountˋ (ˋnameˋ, ˋaccountˋ, ˋpasswordˋ, ˋemailˋ, ˋbirthdayˋ, ˋsexˋ) VALUES ('$name', '$account', '$password', '$email', '$birth', '$sex '";
        $results = mysql_query($sql) or die("Sign up failed");
    }
?>
