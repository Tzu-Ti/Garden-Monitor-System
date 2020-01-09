<?php
    include("mysql.php");
    mysqli_query($conn, 'SET NAMES utf8');

    $sql = "SELECT * FROM `waterschedule` ORDER BY `day` ASC";
    $query = mysqli_query($conn, $sql);
    $results = mysqli_fetch_all($query);

    $output = json_encode($results);
    echo($output);

    mysqli_close($conn);
?>