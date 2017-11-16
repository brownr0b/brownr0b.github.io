<?php
$email = $_POST['email'];
if (isset($_POST['send'])) {
    $to = 'robertambrown@gmail.com';
    $subject = 'New Message From BSQ';
    $message = 'Name: ' . $_POST['name'] . "\r\n\r\n";
    $message .= 'Email: ' . $_POST['email'] . "\r\n\r\n";
    $message .= 'Comments: ' . $_POST['comments'];
    $headers = "From: " . $_POST['email'] . "\r\n";
    $headers .= 'Content-type: text/plain; charset=utf-8';
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    if ($email){
        $headers .= "\r\nReply-To: $email";
    }
    $success = mail($to, $subject, $message, $headers, '-frobertambrown@gmail.com');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Your message has been sent.</title>
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,300,500,700" rel="stylesheet">
    <style>
        html{
            font-family: 'Raleway', sans-serif;
        }

        body{
            margin: 0;
        }
        h6{
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            font-size: 14px;
            margin: 10px;
            letter-spacing: 1px;
        }
        p{
            font-weight: 500;
        }
        .back{
            margin-top: 20px;
        }
        .prev{
            display: inline-block;
            transition: all .5s ease;
            text-decoration: none;
            padding: 14px;
            color: #f2f2f2;
            text-transform: uppercase;
            font-weight: 700;
            background-color: rgba(91, 125, 145, 0.49);
        }
        .prev:hover {
            background-color: rgba(16,16,16,0.5);
            transition: background-color .5s ease;
        }
        #container{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
    </style>
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
</head>
<body>
    <div id="container">
        <?php if (isset($success) && $success) { ?>
            <h1>Thanks!</h1>
            <p>Your message has been sent.</p>
            <div class="back"><a href="index.php" class="prev"><h6>Return</h6></a></div>
        <?php } else { ?>
            <h1>Oops!</h1>
            <p>There was a problem sending your message.</p>
            <div class="back"><a href="index.php#contact" class="prev"><h6>Return</h6></a></div>
        <?php } ?>
    </div>

<script>
    //    function goBack() {
    //        event.preventDefault();
    //        window.history.back();
    //    }
</script>
</body>
</html>