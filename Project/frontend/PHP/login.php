<?php

include_once "connect.php";
session_start();

$uname = mysqli_real_escape_string($conn, $_POST['uname']);
$password = mysqli_real_escape_string($conn, $_POST['password']);

$sql = mysqli_query($conn, "SELECT * FROM users WHERE uname = '{$uname}'");
if(mysqli_num_rows($sql) > 0)
{
  $row = mysqli_fetch_assoc($sql);
  if($password === $row['password'])
  {
    $_SESSION['user_id'] = $row['id'];
    header("Location: profile.php");
  }
}
