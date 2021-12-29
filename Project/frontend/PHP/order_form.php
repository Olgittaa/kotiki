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
    <link rel="stylesheet" href="../CSS/regSuccess.css"/>
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
    <title>Order form</title>
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
                  <li><a href = 'logout.php'>Log Out</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
      <section id="hero">
        <div class="success-container">
          <div class="container2">
            <div class="form">
              <img class = "order-container" src="../IMG/Computer1.png"  >

              <div class="field">
                <div class="details">
             <label for="name"><b>Named</b>  </label>
              <div class=" block-1"
                <label ><b>First</b>  </label>
             <input value="<?php echo htmlspecialchars($row['first_name']) ?>"  type="text" placeholder="First" name="name" required>
             </div>
             <div class=" block-2"
             <label ><b>Second</b>  </label>
             <input value="<?php echo htmlspecialchars($row['second_name']) ?>" type="text" placeholder="Seccond" name="name" required>
             </div>
           </div>
          </div>
              <div class="field">
             <label  for="phone"><b>Phone</b></label>
             <input value="<?php echo htmlspecialchars($row['phone']) ?>" type="text" placeholder="Your phone" name="phone" required>
              </div>

              <div class="field">
             <label for="email"><b>Email</b></label>
             <input value="<?php echo htmlspecialchars($row['email']) ?>" type="text" placeholder="Your Email" name="email" required>
             </div>

             <div class="field">
             <label for="adress"><b>Adress</b></label>
             <input type="text" placeholder="Your Adress" name="adress" required>
             </div>
          </div>
          <div class="field">
            <button  onclick="cancel()" >Cancel</button>
            <button onclick="submite()" type="submite" >Submit</button>
          </div>
        </div>
      </section>
    </main>
    <script>
    function cancel() {
      window.location.href = "./profile.php";
    }
    function submite() {
      window.location.href = "./order_completed.php";
    }
    </script>
  </body>
</html>
