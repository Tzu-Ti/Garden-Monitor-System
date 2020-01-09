<?php
    $speedString = $_POST['Speed'];
    $ch = curl_init($speedString);
    curl_exec($ch);
    curl_close($ch);
?>