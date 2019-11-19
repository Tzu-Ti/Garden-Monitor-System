<!DOCTYPE html>
<html style="height: 100%">
	<head>
		<title> Home | Garden Monitor System </title>
		<link rel="stylesheet" href="css/home.css">
		<link href="https://fonts.googleapis.com/css?family=Titillium+Web:200&display=swap" rel="stylesheet">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	</head>
	
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script type="text/javascript" src="script/home.js"></script>
 
	<body class="body">
		<div id="left">
			<?php
				session_start();
				if(isset($_SESSION['is_login']) && $_SESSION['is_login'] == true) {
					echo "<h1>".$_SESSION['name']."</h1>";
				}
				else {
					echo('<button id="testButton"> Login </button>');
				}
			?>
			<div class="loginDiv"></div>
			<div id="logo"></div>
			<div id="three-div">
				<div class="three-div"> Features </div>
				<div class="three-div"> News </div>
				<div class="three-div"> Contact us </div>
			</div>
		</div>
		
		<div id="right">
			<div id="right1" class="moving">
				<div class="funcName"> 
					<div class="funcHat"></div>
					MONITOR 
				</div>
				<div class="cover"></div>
				<div class="bottomLine"></div>
			</div>
			
			<div id="right2" class="moving">
				<div class="funcName"> 
					<div class="funcHat"></div>
					WATER
				</div>
				<div class="cover"></div>
				<div class="bottomLine"></div>
			</div>
			
			<div id="right3" class="moving">
				<div class="funcName"> 
					<div class="funcHat"></div>
					SETTING
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
					<input id="email" type="text" name="username" placeholder="E-mail / Account Number" required autofocus class="loginInput" size="30"> <br>
					<input id="password" type="password" name="password" placeholder="Password" class="loginInput" size="30"> <br>
					<button id="submit" onclick="submitBtnClick()"> Login </button>
				</form>
				<div style="width: 80%; height: 2px; background-color: grey; margin: 1px auto; text-align: center">
					<a href="http://google.com"> Forgot Account Number or password </a>
				</div>
			</div>
		</div>
	</body>
</html>
