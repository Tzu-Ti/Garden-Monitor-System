<!DOCTYPE html>
<html style="height: 100%">

    <head>
        <title> Sign Up | Garden Monitor System </title>
        <link rel="stylesheet" href="css/formal.css">
        <link rel="stylesheet" href="css/signup.css">
        <link href="https://fonts.googleapis.com/css?family=Titillium+Web:200&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet">
		<link rel="Shortcit Icon" type="image/x-icon" href="image/logo.ico">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    </head>

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript" src="script/formal.js"></script>
	<script type="text/javascript" src="script/signup.js"></script>

    <body class="body">
        <header class="header">
            <div class="topLogoDiv">
                <div class="topLogo"></div>
                <div class="topName">
                    <p class="topCompanyName"> WTT MONITOR </p>
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
			<div id="image1" class="imgStyle">
				<img class="img" src="image/pokemon/bulbasaur.png">
			</div>
			<div id="image2" class="imgStyle">
				<img class="img" src="image/pokemon/charmander.png">
			</div>
			<div id="image3" class="imgStyle">
				<img class="img" src="image/pokemon/squirtle.png">
			</div>
			<div id="image4" class="imgStyle">
				<img class="img" src="image/pokemon/chikorita.png">
			</div>
			<div id="image5" class="imgStyle">
				<img class="img" src="image/pokemon/cyndaquil.png">
			</div>
			<div id="image6" class="imgStyle">
				<img class="img" src="image/pokemon/totodile.png">
			</div>
            <div class="signupDiv">
				Pick The Pokemon to Represent You<br>Double Click to Lock The Pokemon
                <div class="signupImage">
                    <div class="all"></div>
                    <div class="synopsis">
                        <ul class="synopsisUL"></ul>
                    </div>
                    <div style="position: absolute; bottom: 10%; width: 100%">Move Here to See What You Filled</div>
				</div>
				<div class="signupInputDiv">
					<div class="signupTitle"> Your name </div>
					<div class="signupInput">
						<input type="text" id="name" style="font-size:2em; text-align:center;" required autofocus>
						<input type='text' id='account' style='font-size:2em; text-align:center; display: none' required autofocus>
						<input type='password' id='password' style='font-size:2em; text-align:center; display: none' required autofocus>
                        <input type='email' id='email' style='font-size:2em; text-align:center; display: none' required autofocus>
                        <select id="birth-Y" class="birth" style='font-size:2em; text-align:center; display: none' required>
                                <option value="1945"> 1945 </option>
                                <option value="1946"> 1946 </option>
                                <option value="1947"> 1947 </option>
                                <option value="1948"> 1948 </option>
                                <option value="1949"> 1949 </option>
                                <option value="1950"> 1950 </option>
                                <option value="1951"> 1951 </option>
                                <option value="1952"> 1952 </option>
                                <option value="1953"> 1953 </option>
                                <option value="1954"> 1954 </option>
                                <option value="1955"> 1955 </option>
                                <option value="1956"> 1956 </option>
                                <option value="1957"> 1957 </option>
                                <option value="1958"> 1958 </option>
                                <option value="1959"> 1959 </option>
                                <option value="1960"> 1960 </option>
                                <option value="1961"> 1961 </option>
                                <option value="1962"> 1962 </option>
                                <option value="1963"> 1963 </option>
                                <option value="1964"> 1964 </option>
                                <option value="1965"> 1965 </option>
                                <option value="1966"> 1966 </option>
                                <option value="1967"> 1967 </option>
                                <option value="1968"> 1968 </option>
                                <option value="1969"> 1969 </option>
                                <option value="1970"> 1970 </option>
                                <option value="1971"> 1971 </option>
                                <option value="1972"> 1972 </option>
                                <option value="1973"> 1973 </option>
                                <option value="1974"> 1974 </option>
                                <option value="1975"> 1975 </option>
                                <option value="1976"> 1976 </option>
                                <option value="1977"> 1977 </option>
                                <option value="1978"> 1978 </option>
                                <option value="1979"> 1979 </option>
                                <option value="1980"> 1980 </option>
                                <option value="1981"> 1981 </option>
                                <option value="1982"> 1982 </option>
                                <option value="1983"> 1983 </option>
                                <option value="1984"> 1984 </option>
                                <option value="1985"> 1985 </option>
                                <option value="1986"> 1986 </option>
                                <option value="1987"> 1987 </option>
                                <option value="1988"> 1988 </option>
                                <option value="1989"> 1989 </option>
                                <option value="1990"> 1990 </option>
                                <option value="1991"> 1991 </option>
                                <option value="1992"> 1992 </option>
                                <option value="1993"> 1993 </option>
                                <option value="1994"> 1994 </option>
                                <option value="1995"> 1995 </option>
                                <option value="1996"> 1996 </option>
                                <option value="1997" selected> 1997 </option>
                                <option value="1998"> 1998 </option>
                                <option value="1999"> 1999 </option>
                                <option value="2000"> 2000 </option>
                        </select>
                        <select id="birth-M" class="birth" style='font-size:2em; text-align:center; display: none' required>
                                <option value="1"> 1 </option>
                                <option value="2"> 2 </option>
                                <option value="3"> 3 </option>
                                <option value="4"> 4 </option>
                                <option value="5"> 5 </option>
                                <option value="6"> 6 </option>
                                <option value="7"> 7 </option>
                                <option value="8"> 8 </option>
                                <option value="9"> 9 </option>
                                <option value="10"> 10 </option>
                                <option value="11"> 11 </option>
                                <option value="12" selected> 12 </option>
                        </select>
                        <select id="birth-D" class="birth" style='font-size:2em; text-align:center; display: none' required>
                                <option value="1"> 1 </option>
                                <option value="2"> 2 </option>
                                <option value="3" selected> 3 </option>
                                <option value="4"> 4 </option>
                                <option value="5"> 5 </option>
                                <option value="6"> 6 </option>
                                <option value="7"> 7 </option>
                                <option value="8"> 8 </option>
                                <option value="9"> 9 </option>
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
                                <option value="24"> 24 </option>
                                <option value="25"> 25 </option>
                                <option value="26"> 26 </option>
                                <option value="27"> 27 </option>
                                <option value="28"> 28 </option>
                                <option value="29"> 29 </option>
                                <option value="30"> 30 </option>
                                <option value="31"> 31 </option>
                        </select>
                        <input type="text" id="confirm" style="display: none">
                        <button id="submitBirth" class="birth"> Submit </button>		
                    </div>
                    
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
                    <p style="margin: 4px 0"> ADDRESS：No. 70, Chongshan 4th St., East Dist., Tainan City 701, Taiwan (R.O.C.)
                    </p>
                    <p style="margin: 4px 0"> Copyright © 2019 Tzu-Ti Wei, All rights reserved </p>
                </div>
            </div>
        </div>
    </body>
</html>
