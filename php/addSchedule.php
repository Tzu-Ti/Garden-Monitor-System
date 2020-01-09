<?php
    include("mysql.php");
    mysqli_query($conn, 'SET NAMES utf8');

    $data = $_POST["DATA"];
    $data = json_decode($data, true);

    $number = $data["NUMBER"];
    $day = $data["DAY"];
    $H = $data["H"];
    $M = $data["M"];
    $S = $data["S"];

    $sql = "INSERT INTO `waterschedule` (`number`, `different`, `day`, `time`) VALUES ('$number', '1', '$day', '$H:$M:$S');";
    $query = mysqli_query($conn, $sql);

    echo $day;

    mysqli_close($conn);
?>