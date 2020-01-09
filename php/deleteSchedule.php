<?php
    include("mysql.php");
    mysqli_query($conn, 'SET NAMES utf8');

    $number = $_POST["NUM"];
    $number = json_decode($number, true);
    $number = $number["NUMBER"];

    // echo $number["NUMBER"];

    $sql = "DELETE FROM `waterschedule` WHERE `number`='$number'";
    $query = mysqli_query($conn, $sql);

    echo $query;

    mysqli_close($conn);
?>