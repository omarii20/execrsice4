<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/edit-style.css">
    <title>welcome </title>
</head>
<body id="edit_serverSide">

    <section>    
        <?php 
            $user_name = $_GET["userName"];
            $phone_num = $_GET["phoneNumber"];
            $message = $_GET["msg"];
        
            echo "<h1>Welcome " . $user_name .  "</h1><br>";
            echo "<h3>We received your message, we will get back to you at this number: </h3> <h3 class='number'>" . $phone_num . "</h3></br>";
            echo "<p>Your message is: " . $message . "</p>";
            echo "<br> <h3> Have a good day!</h3>";
        ?>        
    </section>    

</body>
</html>