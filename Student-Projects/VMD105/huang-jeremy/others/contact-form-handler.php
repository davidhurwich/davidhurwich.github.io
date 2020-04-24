<?php
    $name = $_Poat['name'];
    $visitor_email = $_Poat['email'];
    $message = $_Poat['message'];

    $email_from = 'jeremy3183@gmail.com';

    $email_subject = "New Form Submission";

    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";

    $to = "jeremy3183@gmail.com";

    $header = "From: $email_from \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: ../others/contact.html");

?>
