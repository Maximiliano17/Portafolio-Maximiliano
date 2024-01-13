//Styles
import styles from "../modules/SobreMi.module.css"
//Imagenes
import fotoFondo from "../assets/fotos/fondo.png"
import fotoExtra from "../assets/fotos/addfondofinal.png"

function SobreMi() {
 
  return (
    <>
     <div className={styles.sobreMiContainer}>
       <section className={styles.fotografia}> 
        <article className={styles.articulo}>
            <img src={fotoFondo} alt="foto Fondo" />
            <img src={fotoExtra} alt="foto Extra" />
        </article>
       </section>
       <section className={styles.sobreInfo}> 
         <h2 className={styles.sombreado}>Soy </h2>
         <p>A lo largo de 2022 y 2023, participé en diversas exposiciones y discursos, presentando mis proyectos más significativos. Esta experiencia me ha enseñado la habilidad de vender mis ideas y mejorar mi interacción con personas de diversos perfiles. Desde explicar los beneficios administrativos de un proyecto a una institución hasta transmitir el impacto social de un proyecto a un público más general, he desarrollado una capacidad integral de comunicación.</p>
       </section> 
     </div>
    </>
  )
}

export default SobreMi
