<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "connect.sishir@gmail.com";
    $subject = "New message from Educational Library Contact Form";
    
    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message\n";

    // Set headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Send the email
    if (mail($to, $subject, $email_message, $headers)) {
        // If email is sent successfully, send a success response
        http_response_code(200);
        echo "success";
    } else {
        // If there was an error sending the email, send an error response
        http_response_code(500);
        echo "error";
    }
} else {
    // If the form is not submitted via POST method, send an error response
    http_response_code(405);
    echo "Method not allowed";
}
?>
