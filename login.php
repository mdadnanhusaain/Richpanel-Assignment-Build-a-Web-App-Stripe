<?php
    $email = $_POST['email'];
    $password = $_POST['password'];
    $conn = new mysqli('sql6.freesqldatabase.com','sql6639014','PsBK1p9eFz','sql6639014');
    if($conn->connect_error)    
    {
        die('Connection Failed : '.$conn->connect_error);
    }
    else    
    {
        $res = $conn->prepare("SELECT pass FROM user_login_details WHERE email=?");
        $comm->bind_param("s",$email);
        $comm->execute();
        $comm->close();
        if($res == $password)   {
            header("Location: index.html");
        }
        else {
            echo "<script>
            alert('Wrong Password');
            </script>";
        }
        $conn->close();
    }
?>