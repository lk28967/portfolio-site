<?php

    $name = $_POST['full-name'];
    $emailAddress = $_POST['email'];
    $phone = $_POST['phone'];
    $radio = $_POST['yesno'];
    $message = $_POST['message'];

    $to = "contact@laurakaneart.com";
    $subject = "Form Submission: ".$name;
    $body = "";
    $msg = "Thanks! I'll get back to you as soon as I can!";

    $body .= "From: ".$name."\r\n";
    $body .= "Email: ".$emailAddress."\r\n";
    $body .= "Phone Number: ".$phone."\r\n";
    $body .= "Can I text? ".$radio."\r\n";
    $body .= "Message: ".$message."\r\n";

    mail($to, $subject, $body);

    header("Location: http://laurakaneart.com/contact.html", TRUE, 301);
    exit();

    echo '<script>
             alert("'.$msg.'");
          </script>';
?>