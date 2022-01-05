<?php

include_once "connect.php";
session_start();

$uname = mysqli_real_escape_string($conn, $_POST['uname']);
$first_name = mysqli_real_escape_string($conn, $_POST['first_name']);
$second_name = mysqli_real_escape_string($conn, $_POST['second_name']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$phone = mysqli_real_escape_string($conn, $_POST['phone']);
$password = mysqli_real_escape_string($conn, $_POST['password']);
$conf_password = mysqli_real_escape_string($conn, $_POST['conf_password']);

if ($password === $conf_password)
  {
  if(filter_var($email, FILTER_VALIDATE_EMAIL))
  {

    $sql1 = mysqli_query($conn, "INSERT INTO users (uname, email, first_name,	second_name,	phone,	password) VALUES ('{$uname}', '{$email}','{$first_name}','{$second_name}','{$phone}','{$password}')");
    if ($sql1)
    {
      $sql2 = mysqli_query($conn, "SELECT * FROM users WHERE uname= '{$uname}'");
      $row = mysqli_fetch_assoc($sql2);
      $_SESSION['user_id'] = $row['id'];

      header("Location: ../HTML/registrationSuccessful.html");
    }
  }
  

  }
  else {
  header("Location: ../HTML/registration.html");
  }
