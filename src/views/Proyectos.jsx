// Styles
import styles from "../modules/Proyectos.module.css";
//Imagenes
import pañol from "../assets/fotos/stocksystem.png"
import centro from "../assets/fotos/centro.png"
import mdm from "../assets/fotos/mdm.png"

function Proyectos() {
 
  return (  
    <>
     <div className={styles.proyectosContainer}>
       <nav className={styles.nav}>
        <h2>Trabajos</h2>
       </nav>
       <div className={styles.trabajos}>
        <article className={styles.card}>
          <h2>Systen Of Stock</h2>
          <p>
           Pañol es un proyecto que ofrece una solución completa para la gestión de herramientas en talleres, permitiendo hacer pedidos de forma rápida y eficiente, y controlando el stock de manera efectiva. Es una herramienta muy útil para mejorar la productividad en talleres y reducir el tiempo que se dedica a la gestión de herramientas.
           <br></br>
           <br></br>
           El sistema fue diseñado para las instituciones educativas Técnicas número 5 y 1.
          </p>
          <div className={styles.imagen}>
           <img src={pañol} alt="Img Pañol" />
          </div>
          <div className={styles.ver}>
           <a className={styles.linkedin} href="#" target="_blanck">
            Linkedin
           </a>
           <a className={styles.github} href="https://github.com/Maximiliano17/taller" target="_blanck">
            GitHub
           </a>
          </div>
        </article>
        <article className={styles.card}>
          <h2>Centro Estudiantil</h2>
          <p>
          Este proyecto fue un trabajo encargado para el secundario técnico N°5, para su página oficial, el crear una sección completamente orientada al centro estudiantil. Contando con información del mismo, noticias semanales y un formulario de problematicas e ideas anónimas.
           <br></br>
           <br></br>
           La pagina fue aprobada para su uso, la institucion paso a ser responsable de su mantenimiento por su pedido.
          </p>
          <div className={styles.imagen}>
           <img src={centro} alt="Img Pañol" />
          </div>
          <div className={styles.ver}>
           <a className={styles.linkedin} href="#" target="_blanck">
            Linkedin
           </a>
           <a className={styles.github} href="https://github.com/Maximiliano17/Centro_De_Estudiantes" target="_blanck">
            GitHub
           </a>
          </div>
        </article>
        <article className={styles.card}>
          <h2>MDM Electro</h2>
          <p>
          Cree junto a un colega una página web estilo landing page para MDM Electro, una empresa de electricidad y mantenimiento técnico. Incluimos secciones que mostraban el interior de la empresa, características de sus servicios y un formulario de contacto por correo electrónico. Además, agregamos enlaces a sus redes sociales.
          <br></br>
           <br></br>
          la empresa paso a ser responsable de su mantenimiento por su pedido.
          </p>
          <div className={styles.imagen}>
           <img src={mdm} alt="Img Pañol" />
          </div>
          <div className={styles.ver}>
           <a className={styles.linkedin} href="#" target="_blanck">
            Linkedin
           </a>
           <a className={styles.github} href="https://github.com/Maximiliano17/MDM_Electro" target="_blanck">
            GitHub
           </a>
          </div>
        </article>
       </div>
     </div>
    </> 
  ) 
}

export default Proyectos
