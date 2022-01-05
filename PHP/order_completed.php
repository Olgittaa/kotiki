<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="robots" content="index,follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../CSS/regSuccess.css" />
    <link rel="stylesheet" href="../CSS/style.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap"
      rel="stylesheet"
    >
    <link
            href="https://fonts.googleapis.com/css2?family=Barlow&display=swap"
            rel="stylesheet"/>
    <link rel="icon" href="../Icons/gamepad.png"/>
    <title>Login</title>
  </head>
  <body>
    <header id="main-header">
      <div class="nav-container">
        <nav>
          <div id="logo-container">
            <h1><a id="home" href="../">Computatrum</a></h1>
          </div>
          <ul>
            <li><a href="../">About</a></li>
            <li><a href="../">Contact</a></li>
            <li><a href="../HTML/login.html" id="login">Login</a></li>
            <li><a href="../HTML/registration.html" id="sign-up">Sign Up</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
   
      <form action='../PHP/login.php' method="POST">
        <section id="hero">
          <div class="success-container">
            <div class="container2">
              <div class="form">
                <h2 style="text-align: center;">Login</h2>
                <br>
                <div class="field">
                  <label for="uname"><b>Login</b></label>
                  <input type="text" placeholder="Enter Username" name='uname' id="uname" required>
                </div>
                <div class="field">
                  <label for="pwd"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name='password' id="pwd" required>
                </div>
                <div class="field">
                  <button onclick="cancel()">Cancel</button>
                  <button type="submit" value="Login" onClick="login()">Login</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </main>
   
  </body>
</html>