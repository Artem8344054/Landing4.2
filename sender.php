<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $text = $_POST['text'];

	$to = "bars834@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Аpplication from the site";

	
	$msg="
    Name: $name /n
    Tmail: $email /n
    Text: $text"; 	
	mail($to, $subject, $msg, "From: $from ");

?>

<p>Hello, the form has been submitted!!!</p>

