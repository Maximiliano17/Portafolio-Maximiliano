//Styles
import styles from "../modules/Home.module.css"
//Imagenes
import fotoPerfil from "../assets/fotos/fotoPerfil2.png"
//Componetes
import SobreMi from "./SobreMi"

function Home() {
 
    return (
      <>
       <div className={styles.homeContainer}>
         <section className={styles.home}>
         <section className={styles.fotografia}>
           <img src={fotoPerfil} alt="Foto Perfil" />
         </section>
         <div className={styles.sobremi}>
            <p className={styles.titulo}>Dos Santos Burgos Maximiliano</p>
            <p className={styles.descripcion}>Como desarrollador web full stack y programador de aplicaciones móviles, siempre he buscado mejorar mi capacidad tanto en programación como en entornos laborales. Apasionado de las nuevas oportunidades, disfruto trabajando tanto de forma independiente como en equipo, adaptándome a las necesidades de cada situación.</p>
           <div className={styles.redes}>
            <a className={styles.linkedin} href="https://www.linkedin.com/in/maximilianodossantos/" target="_blanck">Linkedin</a>
            <a className={styles.github} href="https://github.com/Maximiliano17" target="_blanck">GitHub</a>

           {/* Res */}
            <a className={styles.linkedinRes} href="https://www.linkedin.com/in/maximilianodossantos/" target="_blanck">In</a>
            <a className={styles.githubRes} href="https://github.com/Maximiliano17" target="_blanck">git</a>
           </div>
         </div>
         </section>
         <SobreMi />
       </div>
      </>
    )
  }
  
  export default Home
  