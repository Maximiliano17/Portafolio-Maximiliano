//Styles
import styles from "../modules/QuienSoy.module.css"
//Imagenes
import html from "../assets/iconos/html.png"
import css from "../assets/iconos/css.png"
import js from "../assets/iconos/js.png"
import react from "../assets/iconos/react.png"
import node from "../assets/iconos/node.png"
import mysql from "../assets/iconos/mysql.png"
import php from "../assets/iconos/php.png"
import kotlin from "../assets/iconos/kotlin.png"
import git from "../assets/iconos/git.png"
import typeScript from "../assets/iconos/type.png"
import mongodb from "../assets/iconos/mongodb.png"

function QuienSoy() {
 
  return (
    <> 
     <div className={styles.container}>
       <section className={styles.quiensoy}>
        {/* <img src={skils} alt="Skils Icon" /> */}
        <h2 className={styles.text1}> Skils</h2>
        <p>
        He trabajado con tecnologías tanto del lado del frontend como del backend, tanto en páginas web como en sistemas web y aplicaciones móviles, entre otros. Mi dominio de estas tecnologías me ha permitido crear proyectos ganadores de premios y colaborar con diversas instituciones.        </p>
       </section>
       <section className={styles.skils}>
        <article className={styles.tecnologia}>
          <img src={html} alt="Html" />
      
        </article>
        <article className={styles.tecnologia}>
        <img src={css} alt="Css" />
   
        </article>
        <article className={styles.tecnologia}>
        <img className={styles.js} src={js} alt="JavaScript" />
          
        </article>
        <article className={styles.tecnologia}>
        <img src={react} alt="React" />
     
        </article>
        <article className={styles.tecnologia}>
        <img src={node} alt="Node" />
 
        </article>
        <article className={styles.tecnologia}>
        <img src={mysql} alt="Mysql" />

        </article>
        <article className={styles.tecnologia}>
        <img src={php} alt="PHP" />
          
        </article>
        <article className={styles.tecnologia}>
        <img src={kotlin} alt="Kotlin" />
          
        </article>
        <article className={styles.tecnologia}>
        <img src={git} alt="Git" />
          
        </article>
        <article className={styles.tecnologia}>
        <img src={typeScript} alt="TypeScript" />
          
        </article>
        <article className={styles.tecnologia}>
        <img src={mongodb} alt="MongoDB" />
          
        </article>
       </section>
     </div>
    </>
  )
}

export default QuienSoy
