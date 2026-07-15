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
          {/*Trabajos Items*/}
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
           <h1 className={styles.tituloEffectCod}>OLIMPÍADA NACIONAL DE ETP 2023</h1>
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
                Nuestro objetivo es desarrollar una solución digital para el protocolo médico "Código Azul", que se basa en activar dos alarmas para requerir la presencia de personal médico. La solución debe incluir un sistema de autenticación con usuario y contraseña, y ofrecer las siguientes funcionalidades clave:
              </p>
              <ul className={styles.featureList}>
                <li><strong>🔹 Crear Áreas Médicas:</strong> Configura espacios específicos para el manejo de situaciones críticas en el entorno médico.</li>
                <li><strong>🔹 Asignar Personal:</strong> Gestiona la distribución del personal médico a las áreas correspondientes, asegurando una adecuada asignación de recursos humanos.</li>
                <li><strong>🔹 Asignar Pacientes:</strong> Facilita la asignación de pacientes a las áreas médicas, garantizando una atención eficiente y oportuna.</li>
                <li><strong>🔹 Activar Alarmas:</strong> Permite activar alarmas en cada área médica para alertar sobre situaciones críticas, utilizando una interfaz intuitiva y efectiva.</li>
              </ul>
              <p>
                Este proyecto tiene un plazo de ejecución de una semana, por lo que es fundamental seleccionar cuidadosamente las tecnologías y estrategias de desarrollo para cumplir con los requisitos y expectativas del protocolo "Código Azul".
              </p>
              <p className={styles.techTitle}>🔧 Tecnologías Utilizadas:</p>
              <ul className={styles.featureList}>
                <li><strong>Front-end:</strong> React con CSS a mano.</li>
                <li><strong>Back-end:</strong> Node.js con Express.</li>
                <li><strong>Base de Datos:</strong> MongoDB.</li>
                <li><strong>Actualización en Tiempo Real:</strong> Web Sockets.</li>
              </ul>
            </div> 
            <footer className={styles.footerProyects}>
              Septiembre 2023  - Septiembre 2023 
            </footer>
          </section>
        </article>
         {/*Trabajos Items*/}
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
             <h1 className={styles.tituloEffectPet}>Petzify App</h1>
          </section>
          <section className={styles.infoProyects}>
            <div className={styles.tecnologiasPryects}>
              <span>React Native</span>
              <span>FireBase</span>
              <span>Mongoose</span>
              <span>Aws</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>
            <div className={styles.descripcionProyects}>
            <p>
              Petzify es una red social especializada en animales domésticos que proporciona a los dueños de mascotas un entorno dedicado a compartir sus experiencias con sus compañeros peludos. Además, permitiremos a los usuarios publicar sobre animales disponibles para adopción y solicitar donaciones para facturas médicas de sus mascotas.<br></br> <br></br> 
              Nuestro objetivo principal es contribuir a reducir la cantidad de animales perdidos en Argentina. Para lograrlo, ofrecemos metodologías de reporte para mascotas extraviadas, permitiendo a los usuarios indicar la última ubicación conocida y adjuntar los datos correspondientes.<br></br> <br></br> 
              Estos informes serán visibles en un mapa para que todos los usuarios puedan ayudar a localizar a las mascotas reportadas. Para identificar a las mascotas, utilizamos inteligencia artificial que reconoce el rostro de cada animal.<br></br> <br></br> 
              Esta tecnología emplea la cámara de dispositivos móviles y busca coincidencias en una base de datos diseñada específicamente para este propósito. La detección se basa en patrones faciales, con especial atención en las características de la nariz. Nuestro sistema utiliza una red neuronal compleja y estimulada, programada en Python y vinculada a la aplicación mediante la biblioteca Tensor Flow. Además, Petzify cuenta con una sección de petshop, donde empresas y negocios pueden mostrar sus productos a los usuarios a través de un sistema de comercio electrónico.<br></br><br></br> 
              Nos esforzamos por brindar a los dueños de mascotas una plataforma integral que fomente la interacción, la ayuda mutua y el bienestar de los animales domésticos.<br></br> 
            </p>
            </div> 
            <footer className={styles.footerProyects}>
              mayo 2023 - Diciembre 2023
            </footer>
          </section>
        </article>
        {/*Trabajos Items*/}
        <article className={styles.trabajoItem}>
          <section className={styles.bannerTrabajo}>
           <img src={imagenProyect1} alt="Imagen Proyecto" />
           <img src={imagenProyect6} alt="Imagen Proyecto" />
           <img src={imagenProyect2} alt="Imagen Proyecto" />
           <img src={imagenProyect3} alt="Imagen Proyecto" />
           <img src={imagenProyect4} alt="Imagen Proyecto" />
           <img src={imagenProyect5} alt="Imagen Proyecto" />
          </section>
          <section className={styles.tituloProyects}>
             <h1 className={styles.tituloEffectPañol}>Pañol</h1>
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
     </section>
    </> 
  ) 
}

export default Proyectos
