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
    <link rel="stylesheet" href="../CSS/constructor.css" />
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
    <title>Constructor</title>
  </head>
  <body onload="fillTable(0)">
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
    <div id="progress-bar" class="progress-bar">
      <div id="progress" class="container">
        <ul id="prograss-num" class="progress-bar-ul">
          <li class="step active">Video Card</li>
          <li class="step">Processor</li>
          <li class="step">Motherboard</li>
          <li class="step">Memory</li>
          <li class="step">SSD</li>
          <li class="step">HDD</li>
          <li class="step">Power</li>
          <li class="step">Design</li>
        </ul>
      </div>
    </div>
    <div class="place">
      <div class="pc2d">
        <img id="pc2d" src="../IMG/2d/block_with_videocard.png" alt="pc">
        </div>
      <div class="accessories">
        <div>
          <input type="text" id="myInput" onkeyup="search()" placeholder="Search for names.."
                 title="Type in a name">
          <div class="dropdown">
            <button id="dropdownbtn" onclick="dropdown()" class="dropbtn">Sort by:</button>
            <div id="myDropdown" class="dropdown-content">
              <a href="#" onclick="sortTable(0)">Best match</a>
              <a href="#" onclick="sortTable(1)">Price (low to high)</a>
              <a href="#" onclick="sortTable(2)">Price (high to low)</a>
            </div>
          </div>
          <table id="table-content">
            <thead>
            <tr>
              <th style="width:15%;"></th>
              <th style="width:50%;">Name</th>
              <th style="width:10%;">Rating</th>
              <th style="width:15%;">Price</th>
              <th style="width:10%;"></th>
            </tr>
            </thead>
          </table>
        </div>
        <div class="btn">
          <button id="progress-prev">Prev</button>
          <button id="progress-next">Next</button>
          <a href="../PHP/order_form.php">
            <button>Finish</button>
          </a>
        </div>
        <script src="../JS/script.js"></script>
        <script src="../JS/table.js"></script>
      </div>
    </div>

    </main>
  </body>
</html>
