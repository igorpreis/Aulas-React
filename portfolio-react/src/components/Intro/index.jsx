import React from "react"
import "./Intro.css"

export default function Intro() {
  return (
<section id="intro">
      <div className="half-section intro-section-left">
        <h1>Olá, eu sou Igor Reis,</h1>
        <h2>Front-End Developer.</h2>
        <p className="intro-description">
          Residente de Lisboa apaixonado por criar interfaces web atraentes e
          interativas que encantam os usuários.
        </p>

        <div className="box-buttons">
          <a href="/src/assets/img/CV-IGOR-REIS.pdf" download="CV - IGOR REIS">
            <button type="button" className="btn-primary btn-big">
              Download Cv <i className="fa-solid fa-arrow-down" style={{fontSize: "14px"}}></i>
            </button>
          </a>

          <a href="https://www.linkedin.com/in/igorpreis/" target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn-primary btn-social">
              <i className="fa-brands fa-linkedin-in" style={{fontSize: "14px"}}></i>
            </button>
          </a>

          <a href="https://www.behance.net/igorpreis" target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn-primary btn-social">
              <i className="fa-brands fa-behance" style={{fontSize: "14px"}}></i>
            </button>
          </a>

          <a href="https://github.com/igorpreis" target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn-primary btn-social">
              <i className="fa-brands fa-github" style={{fontSize: "14px"}}></i>
            </button>
          </a>
        </div>
      </div>
      <div className="half-section intro-section-right">
        <img src="../public/img/foto.jpg" alt="Foto Perfil Igor Reis" />
      </div>
    </section>
  )
}
