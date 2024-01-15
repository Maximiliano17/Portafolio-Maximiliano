//Styles
import styles from "../modules/informacion.module.css"

function Informacion() {
 
  return (
    <> 
     <div className={styles.informacionContainer}>
      <section className={styles.info}>
        <div className={styles.infosobre}>
         <h2>¿Quien </h2>
         <p>
         ¡Hola! Soy un apasionado desarrollador web Junior con 3 años de experiencia en el sector, principalmente trabajando como freelancer. Me gradué como Técnico en Informática Personal y Profesional en la Escuela Secundaria Técnica Número 5 de Merlo, Libertad.<br></br>   <br></br>
        Actualmente, estoy ampliando mis conocimientos al cursar la carrera de Ingeniería Informática, lo que me ha permitido explorar nuevas áreas y enriquecer mis habilidades. Recientemente, he incursionado en el desarrollo Android utilizando Kotlin, marcando así mi compromiso constante con la mejora y la actualización en el mundo de la programación.
        <br></br>
        <br></br>
        A lo largo de mi carrera, he participado en diversos proyectos, desempeñándome tanto en el front-end como en el back-end, y también aportando mis habilidades como diseñador. Mi enfoque versátil me ha permitido adquirir una comprensión integral del desarrollo web.
        <br></br>
        <br></br>
        Estoy en búsqueda de nuevos desafíos y emocionado por formar parte de un equipo de desarrollo. Mi objetivo es contribuir significativamente, aprender de mis colegas y crecer continuamente como desarrollador. Estoy ansioso por asumir nuevos proyectos y enfrentar desafíos que impulsen mi desarrollo profesional.
        <br></br>
        <br></br>
        ¡Gracias por visitar mi portafolio! Si estás interesado en mi trabajo, no dudes en ponerte en contacto conmigo. Estoy emocionado por las oportunidades que el futuro pueda traer.
            
         </p> 
        </div>
        <div className={styles.lista}>
         <p>Actividades de interes personal</p>
         <ul>
            <li> 🏋🏻‍♂️  Apacionado del entrenamiento</li>
            <li> 👟 Corredor</li>
            <li> 📚  Lector activo</li>
            <li> 🐱 Fan de los animales</li>
            <li> 🏆 Argentino, Buenos Aires</li>
            <li> 🧉  Matero de nacimiento</li>
         </ul>
        </div>
      </section>
     </div>
    </>
  )
}

export default Informacion
