<?php
    include("mysql.php");
    mysqli_query($conn, 'SET NAMES utf8');

    $sql = "SELECT * FROM `waterrecord` ORDER BY `time`";
    $query = mysqli_query($conn, $sql);
    $results = mysqli_fetch_all($query);

    echo json_encode($results);
    mysqli_close($conn);
?>