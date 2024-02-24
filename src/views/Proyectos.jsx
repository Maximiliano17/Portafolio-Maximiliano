//Styles
import styles from "../modules/Proyectos.module.css";
//Imagenes
import imagenProyect1 from "../assets/banners/pañolLogo.jpeg"
import imagenProyect2 from "../assets/banners/pañolLogo2.jpeg"
import imagenProyect3 from "../assets/banners/pañolLogo3.jpeg"
import imagenProyect4 from "../assets/banners/pañolLogo4.jpeg"
import imagenProyect5 from "../assets/banners/pañolLogo5.jpeg"

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
             <h1></h1>
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
       </div>
     </div>
    </> 
  ) 
}

export default Proyectos