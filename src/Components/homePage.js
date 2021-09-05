import Navbar from "../Elements/Navbar";
import "../App.css"; 

const HomePage = () => {
  
      return (
          <>
          <Navbar/>

        <header>
            <div class="text">
                <h2>Universidad Metropolitana</h2>
                <h1>Proyecto SIG-UNIMET</h1>
                <div class="arrow">
                    <span class="left"></span>
                    <i class="fas fa-asterisk"></i>
                    <span class="right"></span>
                </div>
            </div>
        </header>

        <div class="about-us">
            <div class="text">
                <h2>Discover</h2>
                <h3>Our Story</h3>
                <div><i class="fas fa-asterisk"></i></div>
                <p>Rosa is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection.</p>
                <div><a class="a-CTA" href="">About Us</a></div>
            </div>
            <div class="image-container">
                <div class="image image1">
                    <img src="https://i.imgur.com/D4HsLb9.png" alt="University Photo"/>
                </div>
                <div class="image image2">
                    <img src="https://i.imgur.com/MTgYA3m.png" alt="University Photo"/>
                </div>
            </div>
        </div>

        <div class="space">
            <div class="image"></div>
        </div>

        <div class="information">
      <div class="text">
          <h2>Culinary</h2>
          <h3>Delight</h3>
          <div><i class="fas fa-asterisk"></i></div>
          <p>We promise an intimate and relaxed dining experience that offers something different to local and foreign patrons and ensures you enjoy a memorable food experience every time.</p>
          <div><a class="a-CTA" href="#">Make a Reservation</a></div>
      </div>
      <div class="image-container">
          <div class="image image1">
              <img src="https://i.imgur.com/4DUOzdn.png" alt="Food Photo"/>
          </div>
          <div class="image image2">
              <img src="https://i.imgur.com/qAKkiDJ.png" alt="Food Photo"/>
          </div>
      </div>
  </div>

  <div class="copyright">
      <i class="fas fa-angle-double-up arrow-up"></i>
      <ul class="info">
          <li>&copy; ROSA 2017</li>
          <li>13 Hanway Square, London</li>
          <li>Tel: 71494563</li>
          <li>Handcrafted with love by <a href="#">Pixelgrade</a> Team</li>
      </ul>
      <ul class="CTA">
          <li><a href="#">PERMISSIONS AND COPYRIGHT</a></li>
          <li><a href="#">CONTACT THE TEAM</a></li>
      </ul>
  </div>

          </>
      );
  }
  
  
  export default HomePage;