//Styles
import styles from "../modules/Proyectos.module.css";
//Imagenes
//Pañol
import imagenProyect1 from "../assets/banners/pañolLogo.jpeg"
import imagenProyect2 from "../assets/banners/pañolLogo2.jpeg"
import imagenProyect3 from "../assets/banners/pañolLogo3.jpeg"
import imagenProyect4 from "../assets/banners/pañolLogo4.jpeg"
import imagenProyect5 from "../assets/banners/pañolLogo5.jpeg"
//CentroEstudiantil
import centroEstudiantil1 from "../assets/banners/centro1.png"
import centroEstudiantil2 from "../assets/banners/centro2.png"
import centroEstudiantil3 from "../assets/banners/centro3.png"
import centroEstudiantil4 from "../assets/banners/centro4.png"
//MDM
import mdm1 from "../assets/banners/mdm1.png"
import mdm2 from "../assets/banners/mdm2.png" 
import mdm3 from "../assets/banners/mdm3.png"
import mdm4 from "../assets/banners/mdm4.png"


function Proyectos() { 
  
  return (  
    <>  
     <div className={styles.proyectosContainer}>
       <nav className={styles.nav}>
        <h2>Trabajos</h2>
       </nav>
       <div className={styles.trabajos}>
        {/*Trabajos Items*/}
        <article className={styles.trabajoItem}>
          <section className={styles.tituloProyects}>
             <h1>Pañol (System of Stock) 📊🖥️</h1>
          </section>
          <section className={styles.bannerTrabajo}>
           <img src={imagenProyect1} alt="Imagen Proyecto" />
           <img src={imagenProyect2} alt="Imagen Proyecto" />
           <img src={imagenProyect3} alt="Imagen Proyecto" />
           <img src={imagenProyect4} alt="Imagen Proyecto" />
           <img src={imagenProyect5} alt="Imagen Proyecto" />
          </section>
          <section className={styles.infoProyects}>
            <div className={styles.tecnologiasPryects}>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>PHP</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>
            <div className={styles.descripcionProyects}>
              <p>
               Pañol es un proyecto que ofrece una solución completa para la gestión de herramientas en talleres, permitiendo hacer pedidos de forma rápida y eficiente, y controlando el stock de manera efectiva. Es una herramienta muy útil para mejorar la productividad en talleres y reducir el tiempo que se dedica a la gestión de herramientas. <br></br>El sistema fue diseñado para las instituciones educativas Técnicas número 5 y 1.
              </p>
            </div> 
            <footer className={styles.footerProyects}>
              Agosto 2022 - Diciembre 2022
            </footer>
          </section>
        </article>
          {/*Trabajos Items*/}
          <article className={styles.trabajoItem}>
          <section className={styles.tituloProyects}>
             <h1>Centro Estudiantil (Página Institucional) 👥📒</h1>
          </section>
          <section className={styles.bannerTrabajo}>
           <img src={centroEstudiantil1} alt="Imagen Proyecto" />
           <img src={centroEstudiantil2} alt="Imagen Proyecto" />
           <img src={centroEstudiantil3} alt="Imagen Proyecto" />
           <img src={centroEstudiantil4} alt="Imagen Proyecto" />
          </section>
          <section className={styles.infoProyects}>
            <div className={styles.tecnologiasPryects}>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>PHP</span>
              <span>Grid Css</span>
            </div>
            <div className={styles.descripcionProyects}>
              <p>
              Este proyecto fue un trabajo encargado para el secundario técnico N°5, para su página oficial, el crear una sección completamente orientada al centro estudiantil. Contando con información del mismo, noticias semanales y un formulario de problematicas e ideas anónimas.              </p>
            </div>
            <footer className={styles.footerProyects}>
              Agosto 2022 - Diciembre 2022
            </footer>
          </section>
        </article>
          {/*Trabajos Items*/}
          <article className={styles.trabajoItem}>
          <section className={styles.tituloProyects}>
             <h1>MDM Electro 👥📒</h1>
          </section>
          <section className={styles.bannerTrabajo}>
           <img src={mdm1} alt="Imagen Proyecto" />
           <img src={mdm2} alt="Imagen Proyecto" />
           <img src={mdm3} alt="Imagen Proyecto" />
           <img src={mdm4} alt="Imagen Proyecto" />
          </section>
          <section className={styles.infoProyects}>
            <div className={styles.tecnologiasPryects}>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Grid Css</span>
              <span>JavaScript</span>
            </div>
            <div className={styles.descripcionProyects}>
              <p>
               Cree junto a un colega una página web estilo landing page para MDM Electro, una empresa de electricidad y mantenimiento técnico. Incluimos secciones que mostraban el interior de la empresa, características de sus servicios y un formulario de contacto por correo electrónico. Además, agregamos enlaces a sus redes sociales.
              </p>
            </div>
            <footer className={styles.footerProyects}>
              Agosto 2022 - Diciembre 2022
            </footer>
          </section>
        </article>
       </div>
     </div>
    </> 
  ) 
}

export default Proyectos