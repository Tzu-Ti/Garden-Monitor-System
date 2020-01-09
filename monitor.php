<!DOCTYPE html>
<html style="height: 100%">
    <head>
		<?php
			session_start();
			if(!isset($_SESSION['is_login']) && !($_SESSION['is_login'] == true)) {
				echo("<script> alert('Login First!!!'); location.href='../index.php';</script>");
			}
			if($_SESSION['account'] != "admin") {
				echo("<script> alert('Administrator only!'); location.href='../index.php';</script>");
			}
		?>
        <title> Monitor | Garden Monitor System </title>
        <link rel="stylesheet" href="css/monitor.css">
        <link rel="stylesheet" href="css/formal.css">
        <link href="https://fonts.googleapis.com/css?family=Titillium+Web:200&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet">
		<link rel="Shortcit Icon" type="image/x-icon" href="image/logo.ico">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    </head>

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js" type="text/javascript"></script>
	<script type="text/javascript" src="script/formal.js"></script>
	<script type="text/javascript" src="script/rtsp.js"></script>
	<script type="text/javascript" src="script/watermqtt.js"></script>
    
    <body class="body">
        <header class="header">
			<div class="topLogoDiv">
				<div class="topLogo"></div>
				<div class="topName">
					<font class="topCompanyName"> WTT MONITOR </font>
					<font class="topPageName"> Monitor </font>
				</div>
			</div>
			<div class="topMenu"></div>
		</header>
		<div class="popDiv">
			<div id="popDiv1" class="popDivSmall">
				<div class="popDivName"> MONITOR </div>
				<div id="popDivImage1"></div>
			</div>
			<div id="popDiv2" class="popDivSmall">
				<div class="popDivName"> WATER </div>
				<div id="popDivImage2"></div>
			</div>
			<div id="popDiv3" class="popDivSmall">
				<div class="popDivName"> EVENTS </div>
				<div id="popDivImage3"></div>
			</div>
			<div id="popDiv4" class="popDivSmall">
				<div class="popDivName"> SETTING </div>
				<div id="popDivImage4"></div>
			</div>
			<div id="popDiv5" class="popDivSmall">
				<div class="popDivName"> CONTACT </div>
				<div id="popDivImage5"></div>
			</div>
		</div>
		<div class="popDivShadow"></div>
		<div class="withoutHeader">
			<div class="cameraName"> Camera 1 </div>
			<div id="screen">
				<img id="img"><img>
			</div>
			<div class="vertical">
				<div class="up">
					<canvas id="triangleUp" width="10px" height="20px"></canvas>
					<script>
						var canvas = document.getElementById("triangleUp");
						var context = canvas.getContext('2d');
						 
						context.beginPath();//開始繪製
							  
						context.moveTo(5, 0);//移到那一個坐標點 (X,Y)
						context.lineTo(10, 20);//從x點到y點
						context.lineTo(0, 20);
						context.lineTo(5, 0);
							   
						context.fillStyle = 'black';//填滿的顏色
						context.fill();//填滿
						context.strokeStyle = 'black';//設定線條顏色  預設為 黑色
						context.stroke();//繪製邊線
					</script>
				</div>
				<div class="verticalLine">
					<div class="verticalDiv"></div>
					<div class="verticalDiv"></div>
					<div class="verticalDiv"></div>
					<div class="verticalDiv"></div>
				</div>
				<div class="down">
					<canvas id="triangleDown" width="10px" height="20px"></canvas>
					<script>
						var canvas = document.getElementById("triangleDown");
						var context = canvas.getContext('2d');
						 
						context.beginPath();//開始繪製
							  
						context.moveTo(0, 0);//移到那一個坐標點 (X,Y)
						context.lineTo(10, 0);//從x點到y點
						context.lineTo(5, 20);
						context.lineTo(0, 0);
							   
						context.fillStyle = 'black';//填滿的顏色
						context.fill();//填滿
						context.strokeStyle = 'black';//設定線條顏色  預設為 黑色
						context.stroke();//繪製邊線
					</script>
				</div>
			</div>
			<div class="horizontal">
				<div class="left">
					<canvas id="triangleLeft" width="20px" height="10px" style="float: left"></canvas>
					<script>
						var canvas = document.getElementById("triangleLeft");
						var context = canvas.getContext('2d');
						 
						context.beginPath();//開始繪製
							  
						context.moveTo(0, 5);//移到那一個坐標點 (X,Y)
						context.lineTo(20, 0);//從x點到y點
						context.lineTo(20, 10);
						context.lineTo(0, 5);
							   
						context.fillStyle = 'black';//填滿的顏色
						context.fill();//填滿
						context.strokeStyle = 'black';//設定線條顏色  預設為 黑色
						context.stroke();//繪製邊線
					</script>
				</div>
				<div class="horizontalLine">
					<div class="horizontalDiv"></div>
					<div class="horizontalDiv"></div>
					<div class="horizontalDiv"></div>
					<div class="horizontalDiv"></div>
					<div class="horizontalDiv"></div>
					<div class="horizontalDiv"></div>
					<div class="horizontalDiv"></div>
					<div class="horizontalDiv"></div>
					<div class="horizontalDiv"></div>
					<div class="horizontalDiv"></div>
					<div class="horizontalDiv"></div>
					<div class="horizontalDiv"></div>
					<div class="horizontalDiv"></div>
				</div>
				<div class="right">
					<canvas id="triangleRight" width="20px" height="10px" style="float: left"></canvas>
					<script>
						var canvas = document.getElementById("triangleRight");
						var context = canvas.getContext('2d');
						 
						context.beginPath();//開始繪製
							  
						context.moveTo(0, 0);//移到那一個坐標點 (X,Y)
						context.lineTo(20, 5);//從x點到y點
						context.lineTo(0, 10);
						context.lineTo(0, 0);
							   
						context.fillStyle = 'black';//填滿的顏色
						context.fill();//填滿
						context.strokeStyle = 'black';//設定線條顏色  預設為 黑色
						context.stroke();//繪製邊線
					</script>
				</div>
			</div>
			<div class="home">
				<div class="littleHome"></div>
			</div>
			<div id="pub"> Start </div>
        	<div id="shadow"> Watering... </div>
		</div>
		<div id="bottom">
			<div class="bottomTopBorder"></div>
			<div class="bottomLeft">
				<p style="font-weight: bold; margin-top: 0px">Member
				<p style="margin: 4px 0"> <a href="php/logout.php"> Log Out </a>
				<p style="margin: 4px 0"> <a href="information.php"> Personal Information </a>
				<p style="margin: 4px 0"> <a href="modify.php"> Modify Profile </a>
				<p style="margin: 4px 0"> <a href="http://google.com"> Coming Soon </a>
			</div>
			<div class="bottomRight">
				<div id="copyright"> 
					<p style="margin-top: 0px"> WEI TZU TI (魏子迪) </p>
					<p style="margin: 4px 0"> TEL：(886) 0915615618 </p>
					<p style="margin: 4px 0"> E-MAIL：a2699560@gmail.com </p>
					<p style="margin: 4px 0"> ADDRESS：No. 70, Chongshan 4th St., East Dist., Tainan City 701, Taiwan (R.O.C.) </p>
					<p style="margin: 4px 0"> Copyright © 2019 Tzu-Ti Wei, All rights reserved </p>
				</div>
			</div>
		</div>
		
    </body>
</html>
