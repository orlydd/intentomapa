import Navbar from "../Elements/Navbar";
import "../App.css"; 
import Footer from "../Elements/footer";

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
                <h2>Acerca de</h2>
                <h3>Nosotros</h3>
                <div><i class="fas fa-asterisk"></i></div>
                <p>SIG-UNIMET es un proyecto que nace de la necesidad de actualizar el inventario cartográfico de la Universidad Metropolitana; para ello se generó un prototipo de sistema de información geográfica mejor conocido como SIG mediante un sistema gestor de base de datos que permite gestionar y planear proyectos en el ámbito geográfico del campus universitario. El producto obtenido fue desarrollado utilizando principalmente las herramientas proporcionadas por el software ArcGIS®. </p>
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
          <h2>Proceso de</h2>
          <h3>Desarrollo</h3>
          <div><i class="fas fa-asterisk"></i></div>
          <p>El mapa presentado fue posible de generar gracias a los datos obtenidos mediante el vuelo de un sistema aéreo tripulado por control remoto, el 
            levantamiento de las coordenadas de los puntos de control a través de equipos especializados de doble frecuencia
             y el posterior procesamiento de la información aerofotogramétrica. Así, se generó una herramienta asociada a la inteligencia de la 
            localización que permita facilitar procesos operativos y administrativos de toma de decisiones 
            dentro de la institución universitaria.  </p>
      </div>
      <div class="image-container">
          <div class="image image1">
              <img src="https://i.imgur.com/4DUOzdn.png" alt="University Photo"/>
          </div>
          <div class="image image2">
              <img src="https://i.imgur.com/qAKkiDJ.png" alt="University Photo"/>
          </div>
      </div>
  </div>
  <Footer/>
          </>
      );
  }
  
  
  export default HomePage;