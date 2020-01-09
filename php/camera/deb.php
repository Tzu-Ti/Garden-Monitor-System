<?php
    $debString = $_POST['Deb'];
    $ch = curl_init($debString);
    curl_exec($ch);
    curl_close($ch);
?>