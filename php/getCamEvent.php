<?php
    function splitTimeDate($time) {
        $timeSplited = explode(":", $time);
        $H = $timeSplited[0];
        $M = $timeSplited[1];
        $S = $timeSplited[2];
        
        $output = [$H, $M, $S];

        return $output;
    };

    include("mysql.php");

    mysqli_query($conn, 'SET NAMES utf8');

    $sql = "SELECT * FROM `pythonclient` ORDER BY `time` DESC";
    $query = mysqli_query($conn, $sql);
    $results = mysqli_fetch_all($query);
    $output = array();    

    for($i=0; $i < count($results); $i++) {
        $result = $results[$i];
        $dateSplited = explode(" ", $result[0]);
        
        $date = $dateSplited[0];
        $time = splitTimeDate($dateSplited[1]);

        $ip = $result[1];
        $action = $result[2];

        $combine = [$date, $time, $ip, $action];
        array_push($output, $combine);
    }
    echo json_encode($output);
    mysqli_close($conn);
?>