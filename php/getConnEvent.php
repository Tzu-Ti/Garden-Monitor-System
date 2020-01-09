<?php
	function getSec($str_sec) {
		$time = explode(":", $str_sec[3]);
		$H = $time[1];
		$M = $time[2];
		$S = $time[3];
		$toSec = $H*60*60 + $M*60 + $S;

		return $toSec;
	};

	function getTime($str_sec) {
		$time = explode(":", $str_sec[3]);
		$H = $time[1];
		$M = $time[2];
		$S = $time[3];

		$timeArr = [$H, $M, $S];
		return $timeArr;
	}

	function getDay($str_sec) {
		$time = explode(":", $str_sec[3]);
		$date = $time[0];
		$date = explode("[", $date);
		
		return $date[1];
	};

	function filter($input) {
		$output = array();
		for($i = 0; $i < count($input); $i++) {
			switch($input[$i][2]) {
				case "/events.php":
					$input[$i][2] = "EVENTS";
					array_unshift($output, $input[$i]);
					break;
				case "/contact.php":
					$input[$i][2] = "CONTACT";
					array_unshift($output, $input[$i]);
					break;
				case "/index.php":
					$input[$i][2] = "HOME";
					array_unshift($output, $input[$i]);
					break;
				case "/information.php":
					$input[$i][2] = "INFORMATION";
					array_unshift($output, $input[$i]);
					break;
				case "/modify.php":
					$input[$i][2] = "MODIFY";
					array_unshift($output, $input[$i]);
					break;
				case "/monitor.php":
					$input[$i][2] = "MONITOR";
					array_unshift($output, $input[$i]);
					break;
				case "/setting.php":
					$input[$i][2] = "SETTING";
					array_unshift($output, $input[$i]);
					break;
				case "/signup.php":
					$input[$i][2] = "SIGNUP";
					array_unshift($output, $input[$i]);
					break;
				default:
					$input[$i][2] = "OTHER";
					break;
			}
		}
		return $output;
	}

	$file_path = "../../apache/logs/access.log";
	$results = array();
	$filtered = array();
	$splited = array();

	$firstNum = $_POST["NUM"];
	$firstNum = json_decode($firstNum, true);
	$last = $firstNum["LASTNUM"];
	$first = $firstNum["FIRSTNUM"];

	if(file_exists($file_path)) {
		$file_arr = file($file_path);
		$arr_num = count($file_arr);

		$str_sec = explode(" ", $file_arr[$arr_num-$first-1]);
		$lastSec = 0;
		$lastIp = "";
		$lastEvent = "";
		if($str_sec[0] != "::1") {
			$lastSec = getSec($str_sec);
			$lastIp = $str_sec[0];
			$lastEvent = $str_sec[6];
		}
			

		for($i = ($arr_num-$first); $i < ($arr_num-$last); $i++) {
			$str_sec = explode(" ", $file_arr[$i]);
			if($str_sec[0] != "::1") {
				$sec = getSec($str_sec);	// convert hour minute sec to sec
				$date = getDay($str_sec);
				$time = getTime($str_sec);
				$ip = $str_sec[0];

				$result = array($ip, $date, $str_sec[6], $time, $sec);	// (ip, date, event, time)
				array_push($splited, $result);
				
			}	
		}

		$filtered = filter($splited);
		for($i = 0; $i < count($filtered); $i++) {
			$sec = $filtered[$i][4];
			$ip = $filtered[$i][0];
			$event = $filtered[$i][2];
			if(($sec - $lastSec > 120 || $ip != $lastIp) || $event != $lastEvent) {
				array_push($results, $filtered[$i]);
				$lastSec = $sec;
				$lastIp = $ip;
				$lastEvent = $event;
			}
		}

		echo json_encode($results);
		//echo $results;
	} else {
		echo "failed";
	}
?>