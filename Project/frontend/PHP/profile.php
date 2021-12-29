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
    <link rel="stylesheet" href="../CSS/style.css" />
    <link rel="icon" href="../Icons/gamepad.png" />
    <link
      href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Barlow&display=swap"
      rel="stylesheet"
    />
    <title>Computatrum</title>
  </head>
  <body>
    <header id="main-header">
      <div class="nav-container">
        <nav>
          <div id="logo-container">
            <h1><a id="home" href="index.html">Computatrum</a></h1>
          </div>
          <ul>
            <li><a href="#philosophy-header">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a><?php echo "You: ".$row['uname'] ?></a></li>
            <li><a href = 'logout.php'>Log Out</a></li>
          <!--
            <li><a href="../HTML/login.html" id="login">Login</a></li>
            <li><a href="../HTML/registration.html" id="sign-up">Sign Up</a></li>
          -->
          </ul>
        </nav>
      </div>
      <div id="progress-bar"></div>
    </header>
    <main>
      <section id="intro">
        <h2>Escape the reality - build your PC</h2>
        <div class="button-container">
          <button id="store" class="inverse-button">Store</button>
          <button id="construct" class="inverse-button" >Build
            now
          </button>
        </div>
      </section>
      <section id="popular-models">
        <header id="models-header">
          <div class="header-text">
            <h2>
              The best solutions for any of your requirements
            </h2>
            <h3>
              We offer incredible computers with a personalized design with the best value for their money. <br/>
              Сhoose your future mashine from our ready-made configurations and change them according to your needs or <br/>
              create a completely unique solution personally for you.
            </h3>
          </div>
          <span id="all-configurations"> <a href="">All configurations
            <span class="active-triangle">&#9658</span>
            <span class="triangle">&#9658</span>
            </a>
          </span>
        </header>
        <div class="card-container">
          <div class="card">
            <div class="computer">
              <div class="circle"></div>
              <img id="pc1" src="../IMG/Computer1.png" alt="" />
            </div>
            <div class="info">
              <h1 class="title">Computatrum Phantom</h1>
              <h3>Starts from 1099$</h3>
              <button class="purchase">Purchase</button>
            </div>
          </div>
          <div class="card">
            <div class="computer">
              <div class="circle"></div>
              <img id="pc2" src="../IMG/computer2.png" alt=""/>
            </div>
            <div class="info">
              <h1 class="title">Computatrum Dragon</h1>
              <h3>Starts from 1599$</h3>
              <button class="purchase">Purchase</button>
            </div>
          </div>
          <div class="card">
            <div class="computer">
              <div class="circle"></div>
              <img id="pc3" src="../IMG/Computer3.png" alt="" />
            </div>
            <div class="info">
              <h1 class="title">Computatrum Equilibrium</h1>
              <h3>Starts from 2099$</h3>
              <button class="purchase">Purchase</button>
            </div>
          </div>
          <div class="card">
            <div class="computer">
              <div class="circle"></div>
              <img id="pc4" src="../IMG/Computer4.png" alt="" />
            </div>
            <div class="info">
              <h1 class="title">Computatrum Vermillion</h1>
              <h3>Starts from 3199$</h3>
              <button class="purchase">Purchase</button>
            </div>
          </div>
        </div>
      </section>
      <section id="philosophy">
        <header id="philosophy-header">
          <h2>Philosophy of Computatrum Industries</h2>
        </header>
        <div id="slider">
          <div id="lastClone" class="slide">
            <div class="slide-content">
              <div class="slide-image">
                <img src="../IMG/Slider6.jpg" alt="">
              </div>
              <div class="slide-text">
                <h2 class="slide-header">Delivery</h2>
                <p class="slide-article">
                  Finished computers are packed in special wooden nominative boxes <br/>
                  that are safely delivered to you anywhere in the world.
                </p>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-content">
              <div class="slide-image">
                <img src="../IMG/Slider1.jpg" alt="">
              </div>
              <div class="slide-text">
                <h2 class="slide-header">Design and development department</h2>
                <p class="slide-article">
                  Our company hires the best 3D designers to create the exact 3D model <br/>
                  of the computer you ordered, which we will present to you and <br/>
                  at the same time agreeing on all your next wishes<br/>
                  about the appearance of your future device.
                </p>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-content">
              <div class="slide-image">
                <img src="../IMG/Slider2.jpg" alt="">
              </div>
              <div class="slide-text">
                <h2 class="slide-header">Customization</h2>
                <p class="slide-article">
                  At your request, we create unique computer cases<br/>
                  with unique painting and prints.<br/>
                  We work with gold, silver, wood and any other material <br/>
                  that will help express your personality.
                </p>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-content">
              <div class="slide-image">
                <img src="../IMG/Slider3.jpg" alt="">
              </div>
              <div class="slide-text">
                <h2 class="slide-header">Professional assembly of the computer</h2>
                <p class="slide-article">
                  The best specialists will assemble your computer<br/>
                  with care and meticulousness, make the right cable management<br/>
                  and connect all the elements according to gold standards.
                </p>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-content">
              <div class="slide-image">
                <img src="../IMG/Slider4.jpg" alt="">
              </div>
              <div class="slide-text">
                <h2 class="slide-header">Reliable testing</h2>
                <p class="slide-article">
                  For 24 hours, each computer of our company <br/>
                  is first tested by specialized benchmarks that will check <br>
                  the stability of the device under load, then <br/>
                  testers will check the performance of the computer in <br/>
                  different situations of use, depending on your requirements.
                </p>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-content">
              <div class="slide-image">
                <img src="../IMG/Slider5.jpg" alt="">
              </div>
              <div class="slide-text">
                <h2 class="slide-header">Warranty and support</h2>
                <p class="slide-article">
                  Due to the competence of our specialists and serіous testing<br/>
                  of computers which reduces the probability of technical failure by 99%<br/>
                  we provide a warranty and support of at least 3 years<br/>
                  on all of our devices.
                </p>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-content">
              <div class="slide-image">
                <img src="../IMG/Slider6.jpg" alt="">
              </div>
              <div class="slide-text">
                <h2 class="slide-header">Delivery</h2>
                <p class="slide-article">
                  Finished computers are packed in special wooden nominative boxes <br/>
                  that are safely delivered to you anywhere in the world
                </p>
              </div>
            </div>
          </div>
          <div id="firstClone" class="slide">
            <div class="slide-content">
              <div class="slide-image">
                <img src="../IMG/Slider1.jpg" alt="">
              </div>
              <div class="slide-text">
                <h2 class="slide-header">Design and development department</h2>
                <p class="slide-article">
                  Our company hires the best 3D designers to create the exact 3D model <br/>
                  of the computer you ordered, which we will present to you and <br/>
                  at the same time agreeing on all your next wishes<br/>
                  about the appearance of your future device.
                </p>
              </div>
            </div>
          </div>
        </div>
        <span id="prev">&#10094</span>
        <span id="next">&#10095</span>
        <div class="dots-container">
          <span class="dot active"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </section>
      <section id="about">
        <header id="about-header"></header>
      </section>
      <section id="contact">
        <header id="contact-header"></header>
      </section>
    </main>
    <footer>
      <h2>Contact us</h2>
      <div class="contact-container">
        <div class="phone-number">
          <h3 class="info-label">Our phone number</h3>
          <h3 class="info-text">8(800)333-42-09,   8(800)323-45-97</h3>
        </div>
        <div class="address">
          <h3 class="info-label">Our adress</h3>
          <h3 class="info-text">Bratislava, Stare Mesto, Obchodna 15</h3>
        </div>
        <div class="email">
          <h3 class="info-label">Our email</h3>
          <h3 class="info-text">computatrum.build.pc@gmail.com</h3>
        </div>
      </div>
      <div class="social-media">
        <a href="https://www.facebook.com/"><img class="footer-icon" src="../Icons/facebook-ico.png" alt="facebook"></a>
        <a href="https://www.instagram.com/"><img class="footer-icon" src="../Icons/instagram-ico.png" alt="instagram"></a>
        <a href="https://twitter.com/"><img class="footer-icon" src="../Icons/twitter-ico.png" alt="twitter"></a>
        <a href="https://www.youtube.com/"><img class="footer-icon" src="../Icons/youtube-ico.png" alt="youtube"></a>
      </div>
      <h1>&copy 2021 <a class="logo" href="index.html">Computatrum </a>, all rights reserved.</h1>
    </footer>
    <script src="../JS/slider.js"></script>
    <script>
    let btn = document.getElementById ("construct")
    btn.onclick=() => {
      window.location.href = "construct.php"
     }
    </script>
  </body>
</html>
