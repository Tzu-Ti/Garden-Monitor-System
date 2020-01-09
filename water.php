<!DOCTYPE html>
<html style="height: 100%">

<head>
    <title> Water | Garden Monitor System </title>
    <link rel="stylesheet" href="css/formal.css">
    <link rel="stylesheet" href="css/water.css">
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web:200&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet">
	<link rel="Shortcit Icon" type="image/x-icon" href="image/logo.ico">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js" type="text/javascript"></script>
<script type="text/javascript" src="script/formal.js"></script>
<script type="text/javascript" src="script/waterRecord.js"></script>
<script type="text/javascript" src="script/mqtt.js"></script>
<script type="text/javascript" src="script/schedule.js"></script>

<body class="body">
	<?php
		session_start();
		if(!isset($_SESSION['is_login']) && !($_SESSION['is_login'] == true)) {
			echo("<script> alert('Login First!!!'); location.href='../index.php';</script>");
        }
        if($_SESSION['account'] != "admin") {
            echo("<script> alert('Administrator only!'); location.href='../index.php';</script>");
        }
	?>
    <header class="header">
        <div class="topLogoDiv">
            <div class="topLogo"></div>
            <div class="topName">
                <font class="topCompanyName"> WTT MONITOR </font><br>
				<font class="topPageName"> Water </font>
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

    <div id="detail"></div>
    <div class="withoutHeader" style="background-color: rgb(214, 252, 244)">
        <div class="field"> Home Garden </div>
        <div class="summary">
            <table class="table">
                <tbody style="width: 100%; height: 100%">
                    <tr class="row"></tr>
                    <tr class="row"></tr>
                    <tr class="row"></tr>
                    <tr class="row"></tr>
                    <tr class="row"></tr>
                    <tr class="row"></tr>
                    <tr class="row"></tr>
                    <tr class="row"></tr>
                    <tr class="dayline"></tr>
                </tbody>
            </table>
        </div>
        <div class="schedule">
            <div class="scheduleTitle"> Schedule </div>
            <div class="insideAddDiv">
                <select id="addDay" required>
                    <option value="1"> Monday </option>
                    <option value="2"> Tuesday </option>
                    <option value="3"> Wednesday </option>
                    <option value="4"> Thursday </option>
                    <option value="5"> Friday </option>
                    <option value="6"> Saturday </option>
                    <option value="7"> Sunday </option>
                </select>
                <select id="addHour" class="addTime" required>
                    <option value="0"> 00 </option>
                    <option value="1"> 01 </option>
                    <option value="2"> 02 </option>
                    <option value="3"> 03 </option>
                    <option value="4"> 04 </option>
                    <option value="5"> 05 </option>
                    <option value="6"> 06 </option>
                    <option value="7"> 07 </option>
                    <option value="8"> 08 </option>
                    <option value="9" selected="selected"> 09 </option>
                    <option value="10"> 10 </option>
                    <option value="11"> 11 </option>
                    <option value="12"> 12 </option>
                    <option value="13"> 13 </option>
                    <option value="14"> 14 </option>
                    <option value="15"> 15 </option>
                    <option value="16"> 16 </option>
                    <option value="17"> 17 </option>
                    <option value="18"> 18 </option>
                    <option value="19"> 19 </option>
                    <option value="20"> 20 </option>
                    <option value="21"> 21 </option>
                    <option value="22"> 22 </option>
                    <option value="23"> 23 </option>
                </select>
                :
                <select id="addMinute" class="addTime" required>
                    <option value="0"> 00 </option>
                    <option value="1"> 01 </option>
                    <option value="2"> 02 </option>
                    <option value="3"> 03 </option>
                    <option value="4"> 04 </option>
                    <option value="5"> 05 </option>
                    <option value="6"> 06 </option>
                    <option value="7"> 07 </option>
                    <option value="8"> 08 </option>
                    <option value="9"> 09 </option>
                    <option value="10"> 10 </option>
                    <option value="11"> 11 </option>
                    <option value="12"> 12 </option>
                    <option value="13"> 13 </option>
                    <option value="14"> 14 </option>
                    <option value="15"> 15 </option>
                    <option value="16"> 16 </option>
                    <option value="17"> 17 </option>
                    <option value="18"> 18 </option>
                    <option value="19"> 19 </option>
                    <option value="23"> 20 </option>
                    <option value="23"> 21 </option>
                    <option value="23"> 22 </option>
                    <option value="23"> 23 </option>
                    <option value="24"> 24 </option>
                    <option value="25"> 25 </option>
                    <option value="26"> 26 </option>
                    <option value="27"> 27 </option>
                    <option value="28"> 28</option>
                    <option value="29"> 29 </option>
                    <option value="30"> 30 </option>
                    <option value="31"> 31 </option>
                    <option value="32"> 32 </option>
                    <option value="33"> 33 </option>
                    <option value="34"> 34 </option>
                    <option value="35"> 35 </option>
                    <option value="36"> 36 </option>
                    <option value="37"> 37 </option>
                    <option value="38"> 38 </option>
                    <option value="39"> 39 </option>
                    <option value="40"> 40 </option>
                    <option value="41"> 41 </option>
                    <option value="42"> 42 </option>
                    <option value="43"> 43 </option>
                    <option value="44"> 44 </option>
                    <option value="45"> 45 </option>
                    <option value="46"> 46 </option>
                    <option value="47"> 47 </option>
                    <option value="48"> 48 </option>
                    <option value="49"> 49 </option>
                    <option value="50"> 50 </option>
                    <option value="51"> 51 </option>
                    <option value="52"> 52 </option>
                    <option value="53"> 53 </option>
                    <option value="54"> 54 </option>
                    <option value="55"> 55 </option>
                    <option value="56"> 56 </option>
                    <option value="57"> 57 </option>
                    <option value="58"> 58 </option>
                    <option value="59"> 59 </option>
                </select>
                :
                <select id="addSecond" class="addTime" required>
                    <option value="0"> 00 </option>
                    <option value="1"> 01 </option>
                    <option value="2"> 02 </option>
                    <option value="3"> 03 </option>
                    <option value="4"> 04 </option>
                    <option value="5"> 05 </option>
                    <option value="6"> 06 </option>
                    <option value="7"> 07 </option>
                    <option value="8"> 08 </option>
                    <option value="9"> 09 </option>
                    <option value="10"> 10 </option>
                    <option value="11"> 11 </option>
                    <option value="12"> 12 </option>
                    <option value="13"> 13 </option>
                    <option value="14"> 14 </option>
                    <option value="15"> 15 </option>
                    <option value="16"> 16 </option>
                    <option value="17"> 17 </option>
                    <option value="18"> 18 </option>
                    <option value="19"> 19 </option>
                    <option value="23"> 20 </option>
                    <option value="23"> 21 </option>
                    <option value="23"> 22 </option>
                    <option value="23"> 23 </option>
                    <option value="24"> 24 </option>
                    <option value="25"> 25 </option>
                    <option value="26"> 26 </option>
                    <option value="27"> 27 </option>
                    <option value="28"> 28</option>
                    <option value="29"> 29 </option>
                    <option value="30"> 30 </option>
                    <option value="31"> 31 </option>
                    <option value="32"> 32 </option>
                    <option value="33"> 33 </option>
                    <option value="34"> 34 </option>
                    <option value="35"> 35 </option>
                    <option value="36"> 36 </option>
                    <option value="37"> 37 </option>
                    <option value="38"> 38 </option>
                    <option value="39"> 39 </option>
                    <option value="40"> 40 </option>
                    <option value="41"> 41 </option>
                    <option value="42"> 42 </option>
                    <option value="43"> 43 </option>
                    <option value="44"> 44 </option>
                    <option value="45"> 45 </option>
                    <option value="46"> 46 </option>
                    <option value="47"> 47 </option>
                    <option value="48"> 48 </option>
                    <option value="49"> 49 </option>
                    <option value="50"> 50 </option>
                    <option value="51"> 51 </option>
                    <option value="52"> 52 </option>
                    <option value="53"> 53 </option>
                    <option value="54"> 54 </option>
                    <option value="55"> 55 </option>
                    <option value="56"> 56 </option>
                    <option value="57"> 57 </option>
                    <option value="58"> 58 </option>
                    <option value="59"> 59 </option>
                </select>
                <div id="add"> ADD </div>
            </div>
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
