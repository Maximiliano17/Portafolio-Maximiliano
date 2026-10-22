import React from "react";
import styles from "../modules/ServiciosExtra.module.css";

// 1. Importación de videos desde assets
import videoEstudio from "../assets/videoPagina1.mp4";
import videoAlterEgo from "../assets/videoPagina3.mp4"; 
import videoHelpdev from "../assets/videoPagina2.mp4";
import videoZapatillas from "../assets/videoPagina4.mp4"; 
import videoSass from "../assets/Sass.mp4"; 
import videoResponsive from "../assets/videoPagina1Mobil.mp4"
import videoResponsive2 from "../assets/videoPagina1Mobi2.mp4"
import videoResponsive3 from "../assets/videoPagina1Mobi3.mp4"
import videoResponsive4 from "../assets/videoPagina1Mobisass.mp4"

// Si tenés los videos en formato vertical/reel para mobile los importás así:
// import videoSassReel from "../assets/SassReel.mp4";
// import videoEstudioReel from "../assets/videoPagina1Reel.mp4";

function ServiciosExtra() {
  const saasProduct = {
    titulo: "CRM Gestión de Stock y Ventas Kiosco",
    categoria: "SaaS / Suscripción",
    videoUrl: videoSass,
    videoMobileUrl: videoResponsive4, // Reemplazar por el video vertical para mobile (ej: videoSassReel)
    descripcion: "Sistema de gestión comercial y seguimiento de clientes desarrollado para kioscos y comercios. Incluye panel de control multiusuario, métricas en tiempo real y flujo de ventas automatizado.",
    demoUrl: "https://www.linkedin.com/in/maximilianodossantos/",
    tecnologias: {
      frontend: "HTML5, CSS3, JavaScript",
      backend: "Node.js / Express",
      api: "WhatsApp API",
      database: "Supabase DB"
    }
  };

  const webProjects = [
    {
      titulo: "Club Social Mitre",
      categoria: "Landing Page",
      videoSrc: videoEstudio,
      videoMobileSrc: videoResponsive, // Reemplazar por video vertical Reel
      descripcion: "Sitio web informativo del Club Social Mitre, con diseño responsive e integración con WhatsApp Business.",
      liveUrl: "https://google.com"
    },
    {
      titulo: "Alter Ego E-Commerce",
      categoria: "Tienda Online",
      videoSrc: videoAlterEgo,
      videoMobileSrc: videoResponsive3, // Reemplazar por video vertical Reel
      descripcion: "Plataforma para simular estampas y realizar presupuestos online. Diseñada para un emprendimiento de venta de ropa estampada.",
      liveUrl: "https://google.com"
    },
    {
      titulo: "HelpDev Landing",
      categoria: "Landing Page",
      videoSrc: videoHelpdev,
      videoMobileSrc: videoResponsive2, // Reemplazar por video vertical Reel
      descripcion: "Sitio web informativo para emprendimiento propio HelpDev.",
      liveUrl: "https://google.com"
    },
    {
      titulo: "E-Commerce ropa local",
      categoria: "Landing Page",
      videoSrc: videoZapatillas,
      videoMobileSrc: videoZapatillas, // Reemplazar por video vertical Reel
      descripcion: "Sitio web para tienda local de venta de ropa.",
      liveUrl: "https://google.com"
    }
  ];

  return (
    <section className={styles.ecosistemaContainer}>
      <div className={styles.ecoHead}>
        <span className={styles.ecoEyebrow}>// Ecosistema & Soluciones</span>
        <h2 className={styles.ecoTitle}>Apps, SaaS & Web Freelance</h2>
      </div>

      {/* SUBSECCIÓN 02: SAAS POR SUSCRIPCIÓN */}
      <div className={styles.subCategoria}>
        <h3 className={styles.subCategoriaTitle}>02. Software SaaS por Suscripción</h3>
        
        <div className={styles.saasWrapper}>
          <article className={styles.saasCardFeatured}>
            {/* Video para Escritorio */}
            <video
              className={`${styles.bgVideo} ${styles.bgVideoDesktop}`}
              src={saasProduct.videoUrl}
              autoPlay
              loop
              muted
              playsInline
            />

            {/* Video para Mobile (Reel) */}
            <video
              className={`${styles.bgVideo} ${styles.bgVideoMobile}`}
              src={saasProduct.videoMobileUrl}
              autoPlay
              loop
              muted
              playsInline
            />

            <div className={styles.webCardOverlayHeader}>
              <h4 className={styles.cardTitle}>{saasProduct.titulo}</h4>
              <span className={styles.badge}>{saasProduct.categoria}</span>
            </div>

            <div className={styles.hoverInfoPanel}>
              <p className={styles.cardDesc}>{saasProduct.descripcion}</p>
              <a
                href={saasProduct.demoUrl}
                className={styles.actionBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Demo en Vivo ➔
              </a>
            </div>
          </article>

          <aside className={styles.saasTechPanel}>
            <h5 className={styles.techPanelTitle}>// Stack Tecnológico</h5>
            <div className={styles.techRow}>
              <span className={styles.techLabel}>Frontend</span>
              <span className={styles.techValue}>🌐 {saasProduct.tecnologias.frontend}</span>
            </div>
            <div className={styles.techRow}>
              <span className={styles.techLabel}>Backend</span>
              <span className={styles.techValue}>⚙️ {saasProduct.tecnologias.backend}</span>
            </div>
            <div className={styles.techRow}>
              <span className={styles.techLabel}>API</span>
              <span className={styles.techValue}>💬 {saasProduct.tecnologias.api}</span>
            </div>
            <div className={styles.techRow}>
              <span className={styles.techLabel}>Database</span>
              <span className={styles.techValue}>🗄️ {saasProduct.tecnologias.database}</span>
            </div>
          </aside>
        </div>
      </div>

      {/* SUBSECCIÓN 03: PÁGINAS WEB FREELANCE */}
      <div className={styles.subCategoria}>
        <h3 className={styles.subCategoriaTitle}>03. Desarrollo Web Freelance</h3>
        <div className={styles.webGrid}>
          {webProjects.map((web, index) => (
            <article key={index} className={styles.webCardVideo}>
              {/* Video para Escritorio */}
              <video
                className={`${styles.bgVideo} ${styles.bgVideoDesktop}`}
                src={web.videoSrc}
                autoPlay
                loop
                muted
                playsInline
              />

              {/* Video para Mobile (Reel) */}
              <video
                className={`${styles.bgVideo} ${styles.bgVideoMobile}`}
                src={web.videoMobileSrc}
                autoPlay
                loop
                muted
                playsInline
              />

              <div className={styles.webCardOverlayHeader}>
                <h4 className={styles.cardTitle}>{web.titulo}</h4>
                <span className={styles.badge}>{web.categoria}</span>
              </div>

              <div className={styles.hoverInfoPanel}>
                <p className={styles.cardDesc}>{web.descripcion}</p>
                <a
                  href={web.liveUrl}
                  className={styles.actionBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Página ➔
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiciosExtra;