<!DOCTYPE html>
<html style="height: 100%">

<head>
    <title> Contact Us | Garden Monitor System </title>
    <link rel="stylesheet" href="css/formal.css">
    <link rel="stylesheet" href="css/contact.css">
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web:200&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet">
	<link rel="Shortcit Icon" type="image/x-icon" href="image/logo.ico">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript" src="script/formal.js"></script>
<script type="text/javascript" src="script/contact.js"></script>

<body class="body">
	<?php
		session_start();
		if(!isset($_SESSION['is_login']) && !($_SESSION['is_login'] == true)) {
			echo("<script> alert('Login First!!!'); location.href='../index.php';</script>");
		}
	?>
    <header class="header">
        <div class="topLogoDiv">
            <div class="topLogo"></div>
            <div class="topName">
                <font class="topCompanyName"> WTT MONITOR </font>
				<font class="topPageName"> Contact Us </font>
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
        <div class="contactTitle"> What you want to tell me or ask me? Press the Pokemon to send the letter. </div>
		<textarea id="contactInput" required></textarea>
        <div class="submitDiv">
            <div class="big"></div>
        </div>
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
                <p style="margin: 4px 0"> ADDRESS：No. 70, Chongshan 4th St., East Dist., Tainan City 701, Taiwan
                    (R.O.C.)
                </p>
                <p style="margin: 4px 0"> Copyright © 2019 Tzu-Ti Wei, All rights reserved </p>
            </div>
        </div>
    </div>
</body>

</html>
