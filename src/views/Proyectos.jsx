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
//Cod Blue
import CB1 from "../assets/banners/loginCB.jpeg"
import CB2 from "../assets/banners/homeCB.jpeg"
import CB3 from "../assets/banners/opCB.jpeg"
import CB4 from "../assets/banners/ingresarCB.jpeg"
import CB5 from "../assets/banners/formCB.jpeg"
import CB6 from "../assets/banners/salasCB.jpeg"
import CB7 from "../assets/banners/salasintroCB.jpeg"
import CB8 from "../assets/banners/ingresarSalasCB.jpeg"

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
          <section className={styles.bannerTrabajo}>
           <img src={CB1} alt="Imagen Proyecto" />
           <img src={CB2} alt="Imagen Proyecto" />
           <img src={CB3} alt="Imagen Proyecto" />
           <img src={CB4} alt="Imagen Proyecto" />
           <img src={CB5} alt="Imagen Proyecto" />
           <img src={CB6} alt="Imagen Proyecto" />
           <img src={CB7} alt="Imagen Proyecto" />
           <img src={CB8} alt="Imagen Proyecto" />
          </section>
          <section className={styles.tituloProyects}>
             <h1>OLIMPÍADA NACIONAL DE ETP 2023 INFORMÁTICA - PROGRAMACIÓN</h1>
          </section>
          <section className={styles.infoProyects}>
            <div className={styles.tecnologiasPryects}>
              <span>CSS Modules</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>Web Sockets</span>
            </div>
            <div className={styles.descripcionProyects}>
            <p>
              Nuestra tarea consiste en crear una solución digital para el protocolo médico conocido como "Código Azul", que se caracteriza por activar dos alarmas que requieren la presencia de personal médico. Esta solución debe permitir el acceso mediante un sistema de autenticación basado en usuario y contraseña, ofreciendo una serie de funcionalidades clave:
              <ol className={styles.listProyects}><br></br>
              <li><strong>Crear áreas médicas:</strong> La aplicación debe permitir la creación de áreas médicas, lo que implica configurar espacios específicos para el manejo de situaciones médicas críticas.</li>
              <li><strong>Asignar personal:</strong> Debe ser posible asignar y gestionar el personal médico a las áreas correspondientes, asegurando una adecuada distribución de recursos humanos.</li>
              <li><strong>Asignar pacientes:</strong> La solución debe facilitar la asignación de pacientes a las áreas médicas, garantizando una atención eficiente y oportuna.</li>
              <li><strong>Prender alarmas:</strong> En cada área médica, se debe tener la capacidad de activar alarmas para alertar sobre situaciones médicas críticas en curso, lo que requerirá una interfaz intuitiva y efectiva.</li>
              </ol>
              <br></br>
              Este proyecto se ha planteado con un plazo de ejecución de una semana, lo que exige una selección cuidadosa de tecnologías y estrategias de desarrollo para cumplir con los requisitos y expectativas del protocolo "Código Azul". A continuación, se detallarán los criterios técnicos y las consideraciones que hemos tenido en cuenta para llevar a cabo esta implementación.
              </p>
            </div> 
            <footer className={styles.footerProyects}>
              Septiembre 2023  - Septiembre 2023 
            </footer>
          </section>
        </article>
        {/*Trabajos Items*/}
        <article className={styles.trabajoItem}>
          <section className={styles.bannerTrabajo}>
           <img src={imagenProyect1} alt="Imagen Proyecto" />
           <img src={imagenProyect2} alt="Imagen Proyecto" />
           <img src={imagenProyect3} alt="Imagen Proyecto" />
           <img src={imagenProyect4} alt="Imagen Proyecto" />
           <img src={imagenProyect5} alt="Imagen Proyecto" />
          </section>
          <section className={styles.tituloProyects}>
             <h1>Pañol (System of Stock) 📊🖥️</h1>
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
              TallerApp es una aplicación diseñada para la gestión eficiente de herramientas en talleres. Proporciona una solución integral que simplifica la realización de pedidos y el control de stock, mejorando así la productividad y reduciendo el tiempo dedicado a la gestión de herramientas. Sus funciones incluyen:
              <ol className={styles.listProyects}><br></br>
                <li><strong>Login Exclusivo para Administradores:</strong> Garantiza que solo los usuarios autorizados tengan acceso, evitando la entrada de usuarios no deseados.</li>
                <li><strong>Visualización del Stock Disponible:</strong> Facilita la observación clara y rápida de las herramientas disponibles.</li>
                <li><strong>Interfaz de Usuario Amigable:</strong> La página principal ofrece un formulario intuitivo donde se presentan todas las herramientas disponibles y se solicitan los datos necesarios para realizar un pedido.</li>
                <li><strong>Seguimiento de Facturas Pendientes:</strong> Permite un seguimiento eficiente de las facturas aún no procesadas.</li>
                <li><strong>Formulario para la Incorporación de Nuevas Herramientas:</strong> Simplifica el proceso de incorporación de nuevas herramientas al sistema.</li>
              </ol> <br></br>
             Este sistema fue implementado inicialmente en la Institución Técnica Número 5 de Libertad. Sin embargo, debido a su eficacia, también se ha solicitado su implementación en las Instituciones Técnicas 3 y 1 de Merlo, con adaptaciones y mejoras específicas que actualmente se están diseñando y desarrollando.
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