//Styles
import styles from "../modules/Informacion.module.css"

const intereses = [
  { icon: "🏋🏻‍♂️", text: "Apasionado del entrenamiento" },
  { icon: "👟", text: "Corredor" },
  { icon: "📚", text: "Lector activo" },
  { icon: "🐱", text: "Fan de los animales" },
  { icon: "🏆", text: "Argentino, Buenos Aires" },
  { icon: "🧉", text: "Matero de nacimiento" },
]

function Informacion() {

  return (
    <section id="sobre-mi" className={styles.informacionContainer}>
      <div className={styles.head}>
        <span className={styles.eyebrow}>Sobre mí</span>
        <h2 className={styles.title}>Carta de presentación</h2>
      </div>

      <div className={styles.info}>
        <article className={styles.infosobre}>
          <p>
            Estimado equipo de contratación,
          </p>
          <p>
            Soy Maximiliano Dos Santos, un apasionado desarrollador Front-End con más de dos años
            de experiencia, aunque se siente como toda una vida cuando has trabajado principalmente
            con Angular... (sí, lo sé, pero no me juzguen, ¡todos tenemos una historia difícil!).
          </p>
          <p>
            Durante este tiempo, he tenido el privilegio de liderar equipos, ayudando a mis compañeros
            a crecer, aprender y, sobre todo, a sobrevivir a los bugs más inesperados. Me encanta la
            tecnología, pero lo que realmente me motiva es el trabajo en equipo: compartir conocimientos,
            aportar soluciones creativas y construir productos que hagan la diferencia.
          </p>
          <p>
            Busco un entorno en el que pueda aportar mi experiencia, creatividad y, claro, mi "alto
            nivel de uso de IA"... digo, digo, mis habilidades en programación. 😉
          </p>
          <p>
            Si están buscando a alguien con energía, ganas de innovar y una buena dosis de humor para
            aliviar los días de deploy, me encantaría tener la oportunidad de conversar con ustedes.
          </p>
          <p className={styles.firma}>
            ¡Hablemos pronto!<br />
            Saludos,<br />
            <strong>Maximiliano Dos Santos</strong>
          </p>
        </article>

        <aside className={styles.lista}>
          <p className={styles.listaTitle}>Actividades de interés personal</p>
          <ul>
            {intereses.map((item) => (
              <li key={item.text}>
                <span className={styles.emoji}>{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default Informacion
