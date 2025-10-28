//Styles
import styles from "../modules/Informacion.module.css"

function Informacion() {

  return (
    <>
      <div className={styles.informacionContainer}>
        <section className={styles.info}>
          <div className={styles.infosobre}>
            <h2>Carta de </h2>
            <p>
              Estimado equipo de contratación,
<br></br>
              Soy Maximiliano Dos Santos, un apasionado desarrollador Front-End con + dos años de experiencia, aunque se siente como toda una vida cuando has trabajado principalmente con Angular... (sí, lo sé, pero no me juzguen, ¡todos tenemos una historia difícil!).
<br></br>
              Durante este tiempo, he tenido el privilegio de liderar equipos, ayudando a mis compañeros a crecer, aprender y, sobre todo, a sobrevivir a los bugs más inesperados. Me encanta la tecnología, pero lo que realmente me motiva es el trabajo en equipo: compartir conocimientos, aportar soluciones creativas y construir productos que hagan la diferencia.
<br></br>
              Busco un entorno en el que pueda aportar mi experiencia, creatividad y, claro, mi "alto nivel de uso de IA"... digo, digo, mis habilidades en programación. 😉
<br></br>
              Si están buscando a alguien con energía, ganas de innovar y una buena dosis de humor para aliviar los días de deploy, me encantaría tener la oportunidad de conversar con ustedes.
<br></br>
              ¡Hablemos pronto!
<br></br>
              Saludos,<br></br>
              Maximiliano Dos Santos
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