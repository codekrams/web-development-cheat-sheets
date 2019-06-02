<?php

require_once __DIR__ ."/autoload.php";

use Carbon\Carbon;


$errorHandler = new Whoops\Run;
$errorHandler->pushHandler(new Whoops\Handler\PrettyPageHandler);
$errorHandler->register();

$credentials = require "opt/lampp/htdocs/composer/config/mail.php;
$today = Carbon::now()->toDayDateTimeString();

$mail_transport = Swift_SmtpTransport::newInstance(
    $credentials['host'], $credentials['port'], $credentials['secured']
)->setUsername($credentials['username'])->setPassword($credentials['password']);

$mailer = Swift_Mailer::newInstance($mail_transport);

$message = Swift_Message::newInstance('Testing SwiftMailer')
->setFrom('emailadress"=> "Name")
->setTo('emailadress', 'emailadress2')
    ->setBody('string', 'text/html');

echo $mailer->send($message) ? $result = "Message send successfully";