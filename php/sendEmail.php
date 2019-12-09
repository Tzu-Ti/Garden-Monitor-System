<?php
// get session information
session_start();
$address = $_SESSION['email'];
$pokemon = $_SESSION['pokemon'];

// Load Mysql database info
include("mysql.php");
// Use PHPMailer to send email
//新增
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//設定檔案路徑
require '../../PHPMailer/src/Exception.php';
require '../../PHPMailer/src/PHPMailer.php';
require '../../PHPMailer/src/SMTP.php';

//建立物件                                                                
$mail = new PHPMailer(true);

// get text from contact.js
$text = $_POST['Information'];
echo $text;

try {
    //Server settings
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;  // Enable verbose debug output
	$mail->Charset = 'UTF-8';
    $mail->SMTPDebug = 0; // DEBUG訊息
    $mail->isSMTP(); // 使用SMTP
    $mail->Host = 'smtp.gmail.com'; // SMTP server 位址
    $mail->SMTPAuth = true;  // 開啟SMTP驗證
    $mail->Username = 'a2699560@gmail.com'; // SMTP 帳號
    $mail->Password = 'ewqazewqaz2504'; // SMTP 密碼
    //$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->SMTPSecure = "ssl"; // Gmail要透過SSL連線
    $mail->Port       = 465; // SMTP TCP port 

    //設定收件人資料
    $mail->setFrom('a2699560@gmail.com', 'WTT Monitor'); // 寄件人(透過Gmail發送會顯示Gmail帳號為寄件者)
    $mail->addAddress('a3350525@yahoo.com.tw', 'YAHOO'); // 收件人會顯示 Apple User<apple@example.com>(*註2)
    // $mail->addAddress('banana@example.com'); // 名字非必填
    //$mail->addReplyTo('info@example.com', 'Information'); //回信的收件人
    //$mail->addCC('cc@example.com'); //副本
    //$mail->addBCC('bcc@example.com'); //密件副本

    // 附件
    //$mail->addAttachment('/var/tmp/file.tar.gz'); // 附件 (*註3) 
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg'); // 插入附件可更改檔名

    // 信件內容
    $mail->isHTML(true); // 設定為HTML格式
    $mail->Subject = 'WTT Monitor Question'; // 信件標題
    $mail->Body    = "<h1> {$address} </h1> {$text}"; // 信件內容
    $mail->AltBody = "{$address}, {$text}"; // 對方若不支援HTML的信件內容

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>