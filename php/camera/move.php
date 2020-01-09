<?php
    $directionString = $_POST['Move'];
    $ch = curl_init($directionString);
    curl_exec($ch);
    curl_close($ch);
?>