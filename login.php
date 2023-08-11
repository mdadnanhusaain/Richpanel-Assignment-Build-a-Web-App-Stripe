<?php
    $email = $_POST['email'];
    $password = $_POST['password'];
    $conn = new mysqli('localhost','root','','test');
    if(isset($_POST['login_btn']))
    {
        $sql = "SELECT * FROM user_login_details WHERE email = '?'";
        $result = mysqli_query($conn,$sql);
        while($row = mysqli_fetch_assoc($result)) {
            $result_pass = $row['password'];
            if($password == $result_pass)
                header('Location:index.html');
            else    {
                echo "<script>
                alert(`Incorrect password for ${password}`);
                </script>";
            }
        }
        $conn->close();
    }
    else    
    {
        echo "<script>console.log('Failed to establish connection');</script>";
        die('Connection Failed : '.$conn->connect_error);
    }
    header("Location: index.html");
?>