//Styles
import styles from "../modules/QuienSoy.module.css"
//Imagenes
import html from "../assets/iconos/html.png"
import css from "../assets/iconos/css.png"
import js from "../assets/iconos/js.png"
import react from "../assets/iconos/react.png"
import node from "../assets/iconos/node.jpg"
import mysql from "../assets/iconos/mysql.png"
import php from "../assets/iconos/php.png"
import kotlin from "../assets/iconos/kotlin.png"
import git from "../assets/iconos/git.png"
import typeScript from "../assets/iconos/type.png"
import mongodb from "../assets/iconos/mongo.png"
import npm from "../assets/iconos/npm.png"
import boos from "../assets/iconos/boostrap.png"

function QuienSoy() {
  
  return (
    <> 
     <div className={styles.container}>
       <section className={styles.quiensoy}>
        {/* <img src={skils} alt="Skils Icon" /> */}
        <h2 className={styles.text1}> Habilidades</h2>
        <p>
         He trabajado con tecnologías tanto del lado del frontend como del backend, tanto en páginas web como en sistemas web y aplicaciones móviles, entre otros. Mi dominio de estas tecnologías me ha permitido crear proyectos ganadores de premios y colaborar con diversas instituciones.        </p>
       
       </section>
       <section className={styles.skils}>
        <div className={styles.front}>
         <p>Front End</p>
         <div className={styles.tecnologias}>
          <article className={styles.skil}>
            <img src={html} alt="Html" />
          </article>
          <article className={styles.skil}>
            <img src={css} alt="css" />
          </article>
          <article className={styles.skil}>
            <img src={js} alt="js" />
          </article>
          <article className={styles.skil}>
            <img src={react} alt="react" />
          </article>
          <article className={styles.skil}>
            <img src={boos} alt="boostrap" />
          </article>
          <article className={styles.skil}>
            <img src={kotlin} alt="kotlin" /> 
          </article>
         </div> 
        </div>
        <div className={styles.front}>
         <p>Back End</p>
         <div className={styles.tecnologias}>
          <article className={styles.skil}>
            <img src={php} alt="php" />
          </article>
          <article className={styles.skil}>
            <img src={node} alt="node" />
          </article>
          <article className={styles.skil}>
            <img src={typeScript} alt="typeScript" />
          </article>
          <article className={styles.skil}>
            <img src={npm} alt="npm" />
          </article>
         </div> 
        </div>
        <div className={styles.front}>
         <p>Database</p>
         <div className={styles.tecnologias}>
          <article className={styles.skil}>
            <img src={mysql} alt="mysql" />
          </article>
          <article className={styles.skil}>
            <img src={mongodb} alt="mongodb" />
          </article>
          <article className={styles.skil}>
            <img src={git} alt="git" />
          </article>
         </div> 
        </div>
       </section>
     </div>
    </>
  )
}

export default QuienSoy
