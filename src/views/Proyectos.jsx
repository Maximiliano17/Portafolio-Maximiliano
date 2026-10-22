//Styles
import styles from "../modules/Proyectos.module.css";
//Video
import ReactPlayer from "react-player/youtube";
//Imagenes - Pañol
import imagenProyect1 from "../assets/banners/pañolLogo.jpeg"
import imagenProyect2 from "../assets/banners/pañolLogo2.jpeg"
import imagenProyect3 from "../assets/banners/pañolLogo3.jpeg"
import imagenProyect4 from "../assets/banners/pañolLogo4.jpeg"
import imagenProyect5 from "../assets/banners/pañolLogo5.jpeg"
import imagenProyect6 from "../assets/banners/pañolLogo6.png"

function Proyectos() {  
  return (  
    <>  
     <section id="proyectos" className={styles.proyectosContainer}>
       <div className={styles.head}>
        <span className={styles.eyebrow}>Portfolio</span>
        <h2 className={styles.title}>Proyectos destacados</h2>
       </div>
       <div className={styles.trabajos}>
          
          {/* Item 1: Olimpíada */}
          <article className={styles.trabajoItem}>
          <div className={styles.videoWrap}>
            <ReactPlayer
              className={styles.player}
              url="https://www.youtube.com/watch?v=nyaAW60Vbw8"
              width="100%"
              height="100%"
              controls
            />
          </div>
          <section className={styles.tituloProyects}>
           <h3 className={styles.tituloEffectCod}>OLIMPÍADA NACIONAL DE ETP 2023</h3>
          </section>
          <section className={styles.infoProyects}>
            <div className={styles.tecnologiasPryects}>
              <span>CSS</span>
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>Web Sockets</span>
            </div>
            <div className={styles.descripcionProyects}>
              <p>
                Solución digital para el protocolo médico "Código Azul" (activación de alarmas críticas). Autenticación segura y gestión en tiempo real.
              </p>
              <ul className={styles.featureList}>
                <li><strong>🔹 Áreas Médicas:</strong> Configuración de espacios críticos.</li>
                <li><strong>🔹 Personal:</strong> Distribución eficiente de recursos humanos.</li>
                <li><strong>🔹 Pacientes:</strong> Asignación rápida a áreas.</li>
                <li><strong>🔹 Alarmas:</strong> Interfaz intuitiva en vivo.</li>
              </ul>
              <p className={styles.techTitle}>🔧 Tech Stack:</p>
              <ul className={styles.featureList}>
                <li><strong>Front:</strong> React + CSS Modules</li>
                <li><strong>Back:</strong> Node.js / Express / Mongo</li>
                <li><strong>Realtime:</strong> Web Sockets</li>
              </ul>
            </div> 
            <footer className={styles.footerProyects}>
              Septiembre 2023
            </footer>
          </section>
        </article>

          {/* Item 2: Petzify */}
          <article className={styles.trabajoItem}>
          <div className={styles.videoWrap}>
            <ReactPlayer
              className={styles.player}
              url="https://youtu.be/sd4FjQaW0-4"
              width="100%"
              height="100%"
              controls
            />
          </div>
          <section className={styles.tituloProyects}>
             <h3 className={styles.tituloEffectPet}>Petzify App</h3>
          </section>
          <section className={styles.infoProyects}>
            <div className={styles.tecnologiasPryects}>
              <span>React Native</span>
              <span>Firebase</span>
              <span>Mongoose</span>
              <span>AWS</span>
              <span>Node.js</span>
              <span>Python</span>
            </div>
            <div className={styles.descripcionProyects}>
            <p>
              Red social para mascotas diseñada para reportar animales perdidos mediante geolocalización y reconocimiento facial por inteligencia artificial (TensorFlow).
            </p>
            <ul className={styles.featureList}>
              <li><strong>🔹 IA Facial:</strong> Reconocimiento basado en patrones de la nariz.</li>
              <li><strong>🔹 Adopciones:</strong> Publicaciones y recolección de fondos médicos.</li>
              <li><strong>🔹 Petshop:</strong> Módulo de e-commerce integrado.</li>
            </ul>
            </div> 
            <footer className={styles.footerProyects}>
              Mayo 2023 - Dic 2023
            </footer>
          </section>
        </article>

        {/* Item 3: Pañol */}
        <article className={styles.trabajoItem}>
          <section className={styles.bannerTrabajo}>
           <img src={imagenProyect1} alt="Proyecto Pañol" />
           <img src={imagenProyect6} alt="Proyecto Pañol" />
           <img src={imagenProyect2} alt="Proyecto Pañol" />
           <img src={imagenProyect3} alt="Proyecto Pañol" />
           <img src={imagenProyect4} alt="Proyecto Pañol" />
           <img src={imagenProyect5} alt="Proyecto Pañol" />
          </section>
          <section className={styles.tituloProyects}>
             <h3 className={styles.tituloEffectPañol}>Pañol TallerApp</h3>
          </section>
          <section className={styles.infoProyects}>
            <div className={styles.tecnologiasPryects}>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JS</span>
              <span>PHP</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
            <div className={styles.descripcionProyects}>
            <p>
              Sistema web de gestión de herramientas y control de stock para talleres técnicos.
            </p>
            <ol className={styles.listProyects}>
              <li><strong>Admin Login:</strong> Acceso exclusivo y seguro.</li>
              <li><strong>Stock:</strong> Visualización en tiempo real.</li>
              <li><strong>Pedidos:</strong> Formularios intuitivos de solicitud.</li>
            </ol>
            <p style={{ marginTop: '4px' }}>
              Implementado en la Escuela Técnica N°5 de Libertad y solicitado por las Técnicas N°3 y N°1 de Merlo.
            </p>
            </div> 
            <footer className={styles.footerProyects}>
              Agosto 2022 - Dic 2022
            </footer>
          </section>
        </article>

       </div>
      </section>
    </> 
  ) 
}

export default Proyectos