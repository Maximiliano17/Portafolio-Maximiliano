// Styles
import styles from "../modules/Certificados.module.css";
//JSON
import certificadosData from "../json/certificados.json";
 
function Certificados() {
  return (
    <>
      <div className={styles.gridContainer}>
        {certificadosData.map((certificado, index) => (
          <article className={styles.certificado} key={index}>
            <h3>{certificado.nombre}</h3>
            <img src={certificado.img} alt={certificado.nombre} />
          </article>
        ))}
      </div>
    </>
  );
} 

export default Certificados;
