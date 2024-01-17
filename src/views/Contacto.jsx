import React from 'react';
import clipboardCopy from 'clipboard-copy';
import styles from "../modules/Contacto.module.css";
import img from "../assets/fotos/emailfoto.png";

function Contacto() {
  const copiarTextoAlPortapapeles = () => {
    const correoElectronico = 'maxidossantosburgos@gmail.com';
    
    clipboardCopy(correoElectronico)
      .then(() => alert('Correo copiado al portapapeles'))
      .catch((err) => console.error('Error al copiar al portapapeles:', err));
  };

  return (
    <>
      <div className={styles.contactoContainer}>
        <section className={styles.imagen}>
          <img src={img} alt="Imagen Mail" />
        </section>
        <section className={styles.contacto}>
          <p>📱 Enviame un Mail</p>
          <section className={styles.mail}>
            maxidossantosburgos@gmail.com  
            <div className={styles.copiar} onClick={copiarTextoAlPortapapeles}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
              </svg>
            </div>
          </section>
          <div className={styles.copiarRes} onClick={copiarTextoAlPortapapeles}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
            </svg>
          </div>
        </section> 
      </div>
    </>
  )
}

export default Contacto;
