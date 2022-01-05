<?php
session_start();
include_once "connect.php";
if(!isset($_SESSION['user_id']))
{
header('Location: ../index.html');
}
$sql = mysqli_query($conn, "SELECT * FROM users WHERE id = {$_SESSION['user_id']}");
$row = mysqli_fetch_assoc($sql);
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="robots" content="index,follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../CSS/regSuccess.css" />
    <link rel="stylesheet" href="../CSS/style.css" />
    <link rel="icon" href="../Icons/gamepad.png"/>
    <link
      href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap"
      rel="stylesheet"
    >
    <link
      href="https://fonts.googleapis.com/css2?family=Barlow&display=swap"
      rel="stylesheet"
    />
    <title>OrderCompleted</title>
  </head>
  <body>
    <header id="main-header">
      <div class="nav-container">
        <nav>
          <div id="logo-container">
            <h1><a id="home" href="profile.php">Computatrum</a></h1>
          </div>
          <ul>
            <li><a href="#philosophy-header">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a><?php echo "You: ".$row['uname'] ?></a></li>
            <li><a href ='logout.php'>Log Out</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <section id="hero">
        <div class="success-container">
          <img
            id="success-ico"
            src="../Icons/checked.png"
            alt="sign that everything is allright"
          />
          <h2 id="reg-message-info">
            Thank's for your order <br />
            We'll contact you soon.
          </h2>
          <div class="reg-btn-container">
            <a href="../PHP/profile.php"><button  id="reg-home-btn">Home</button></a>
<!--            <a href=""><button id="reg-login-btn">Login</button></a>-->
          </div>
        </div>
      </section>
    </main>
  </body>
</html>
