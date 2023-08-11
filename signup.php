<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $conn = new mysqli('sql6.freesqldatabase.com','sql6639014','PsBK1p9eFz','sql6639014');
    if($conn->connect_error)    
    {
        die('Connection Failed : '.$conn->connect_error);
    }
    else    
    {
        $comm = $conn->prepare("INSERT INTO user_login_details(name, email, password) values(?, ?, ?)");
        $comm->bind_param("sss",$name, $email, $password);
        $comm->execute();
        $comm->close();
        $conn->close();
    }
    header("Location: index.html");
?>
