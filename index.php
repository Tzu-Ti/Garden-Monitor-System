<!DOCTYPE html>
<html style="height: 100%">
	<head>
		<title> Home | Garden Monitor System </title>
		<link rel="stylesheet" href="css/home.css">
		<link href="https://fonts.googleapis.com/css?family=Titillium+Web:200&display=swap" rel="stylesheet">
		<link rel="Shortcit Icon" type="image/x-icon" href="image/logo.ico">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	</head>
	
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script type="text/javascript" src="script/home.js"></script>
 
	<body class="body">
		<div id="left">
			
			<div class="loginDiv">
				<div style="position: absolute; top: 48%; left: 0px; width: 25%; height: 4%; background-color: black"></div>
				<?php
					session_start();
					if(isset($_SESSION['is_login']) && $_SESSION['is_login'] == true) {
						echo "<div class='username'>".$_SESSION['name']."</div>";
					}
					else {
						echo('<div class="loginButton"> login </div>');
					}
				?>
				<div style="position: absolute; top: 48%; right: 0px; width: 25%; height: 4%; background-color: black"></div>
			</div>
			<div id="logo"></div>
			<div id="three-div">
				<div class="three-div"> Features </div>
				<div class="three-div"> Events </div>
				<div class="three-div"> Contact us </div>
			</div>
		</div>
		
		<div id="right">
			<div id="right1" class="moving">
				<div class="funcName"> 
					<div class="funcHat"></div>
					<div class="title"> MONITOR </div>
					<div class="note"> See the live video of the field through this page. </div>
				</div>
				<div class="cover"></div>
				<div class="bottomLine"></div>
			</div>
			
			<div id="right2" class="moving">
				<div class="funcName"> 
					<div class="funcHat"></div>
					<div class="title"> WATER </div>
					<div class="note"> Set the watering system through this page. </div>
				</div>
				<div class="cover"></div>
				<div class="bottomLine"></div>
			</div>
			
			<div id="right3" class="moving">
				<div class="funcName"> 
					<div class="funcHat"></div>
					<div class="title"> SETTING </div>
					<div class="note"> Make some settings through this page, including camera, personal information, forgot password. </div>
				</div>
				<div class="cover"></div>
				<div class="bottomLine"></div>
			</div>
			
		</div>
		
		<div class="login">
			<div id="cancel" style="position: absolute; width: 50px; height: 50px; cursor: pointer;">
				<img src="image/cancel.png" width="50px" height="50px">
			</div>
			<div class="loginInputDiv">
				<div style="width: 200px; height: 200px; position: relative; margin: 0 auto">
					<img src="image/water.png" width="200px" height="200px">
				</div>
				<h1 style="text-align: center"> Sign in WTT MONITOR </h1>
				<form method="post" action="php/checkUser.php" class="loginForm">
					<input id="account" name="account" type="text" placeholder="E-mail / Account Number" required autofocus class="loginInput" size="30"> <br>
					<input id="password" name="password" type="password" placeholder="Password" class="loginInput" size="30" required> <br>
					<button id="submit" onclick="submitBtnClick()"> Login </button>
				</form>
					<a href="signup.php"> Sign Up </a>
				<div style="width: 80%; height: 2px; background-color: grey; margin: 1px auto; text-align: center">
					<a href="http://google.com"> Forgot Account Number or password </a>
				</div>
			</div>
		</div>
	</body>
</html>
