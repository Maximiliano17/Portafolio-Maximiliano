//Styles
import styles from "../modules/Contacto.module.css";
import Moebius from "../assets/fotos/moebius.jpg";
import Legalrun from "../assets/fotos/legalrun_logo.jpg";

function Contacto() {
  const experiencias = [
    {
      logo: Moebius,
      empresa: "Moebius",
      pais: "Argentina",
      bandera: "https://flagcdn.com/ar.svg",
      tiempo: "Jun 2024 - Sept 2025 • 1 año 4 meses",
      modalidad: "Remoto",
      rol: "Frontend Developer",
      descripcion: "",
      resumen:
        "Trabajo como desarrollador frontend en Moebius, una empresa enfocada en la gestión de servicios turísticos. Me encargo de crear y optimizar secciones clave del sistema, como Traslados, asegurando que sean intuitivas, eficientes y fáciles de usar para los clientes. Además, colaboro con otros equipos para mejorar validaciones y la arquitectura del frontend, garantizando que el código sea escalable y reutilizable.",
      stack_tecnologico: [
        "Angular",
        "TypeScript",
        "Sass",
        "CSS",
        "PHP",
        "MySQL",
        "Docker",
      ],
      herramientas_gestion: ["Microsoft Azure", "Skype"],
      logros: [
        "Definí estándares de desarrollo junto a líderes frontend para crear secciones más escalables y reutilizables.",
        "Optimicé las validaciones de formularios, resolviendo errores críticos como la carga infinita de imágenes pesadas.",
        "Colaboré con el equipo de diseño para mejorar vistas y diseños, logrando interfaces claras y coherentes.",
        "Integré el frontend con servicios backend en PHP y MySQL, garantizando una comunicación eficiente.",
        "Documenté todas las implementaciones y mejoras, facilitando la colaboración y continuidad del proyecto.",
      ],
    },
    {
      logo: Legalrun,
      empresa: "LegalRun",
      pais: "Argentina",
      bandera: "https://flagcdn.com/ar.svg",
      tiempo: "Ago 2024 - Oct 2025 • 3 meses",
      modalidad: "Remoto",
      rol: "Full Stack Developer",
      resumen:
        "Trabajé como desarrollador full stack freelance en LegalRun, una plataforma utilizada por firmas legales para la gestión de sus casos. Mi trabajo abarcó tanto el frontend como el backend, mejorando funcionalidades existentes y desarrollando nuevas características.",
      stack_tecnologico: [
        "Angular",
        "TypeScript",
        "Next.js",
        "MySQL",
        "APIs REST",
        "Sass",
        "CSS",
      ],
      herramientas_gestion: ["Microsoft Azure"],
      logros: [
        "Desarrollé una modal interactiva para visualizar archivos adjuntos en casos abiertos, facilitando el acceso a documentos legales.",
      ],
    },

  ];

  return (
    <div className={styles.proyectosContainer}>
      <nav className={styles.nav}>
        <h2>Experiencia</h2>
      </nav>

      <div className={styles.trabajos}>
        {experiencias.map((exp, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.header}>
              <img src={exp.logo} alt="logo" className={styles.logo} />
              <h3>{exp.empresa}</h3>
              <div className={styles.flagContainer}>
                <img src={exp.bandera} alt={exp.pais} className={styles.flag} />
                <span className={styles.tooltip}>{exp.pais}</span>
              </div>
            </div>

            <div className={styles.info}>
              <p>
                <strong>Rol:</strong> {exp.rol}
              </p>
              <p>
                <strong>Modalidad:</strong> {exp.modalidad}
              </p>
              <p>
                <strong>Tiempo:</strong> {exp.tiempo}
              </p>
            </div>

            {/* Descripción corta */}
            {exp.descripcion && (
              <p className={styles.descripcion}>{exp.descripcion}</p>
            )}

            {/* Resumen extendido */}
            {exp.resumen && (
              <p className={styles.resumen}>
                <strong>Resumen:</strong> {exp.resumen}
              </p>
            )}

            {/* Stack tecnológico */}
            {exp.stack_tecnologico && (
              <div className={styles.stack}>
                <strong>Tecnologías:</strong>
                <ul>
                  {exp.stack_tecnologico.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Herramientas de gestión */}
            {exp.herramientas_gestion && (
              <div className={styles.stack}>
                <strong>Herramientas de gestión:</strong>
                <ul>
                  {exp.herramientas_gestion.map((tool, i) => (
                    <li key={i}>{tool}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Logros */}
            {exp.logros && (
              <div className={styles.logros}>
                <strong>Logros:</strong>
                <ul>
                  {exp.logros.map((logro, i) => (
                    <li key={i}>{logro}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contacto;