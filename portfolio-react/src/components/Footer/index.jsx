import React from "react"
import "./Footer.css"

export default function Footer() {
  return (
    <footer>
      <section className="box-footer">
        <div className="half-section footer-infos">
          <div className="box-footer-logo">
            <a href="https://igorpreis.github.io/portfolio/">
              <span>&lt;</span>Igor Reis<span>/&gt;</span>
            </a>
          </div>
          
          <p className="footer-text">
            Profissional de marketing digital altamente motivado e criativo, recentemente formado pelo IADE
            em Desenvolvimento Web Front-End em busca da primeira experiência como programador.
          </p>

          <div className="box-buttons">
            <a href="assets/CV-IGOR-REIS.pdf" download="CV - IGOR REIS">
              <button type="button" className="btn-primary btn-big">
                Download Cv <i className="fa-solid fa-arrow-down"></i>
              </button>
            </a>

            <a href="https://www.linkedin.com/in/igorpreis/" target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn-primary btn-social">
                <i className="fa-brands fa-linkedin-in"></i>
              </button>
            </a>

            <a href="https://www.behance.net/igorpreis" target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn-primary btn-social">
                <i className="fa-brands fa-behance"></i>
              </button>
            </a>

            <a href="https://github.com/igorpreis" target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn-primary btn-social">
                <i className="fa-brands fa-github"></i>
              </button>
            </a>
          </div>                
        </div>

        <div id="contact" className="half-section">
          <div className="container-contact">
            <div className="header-contact">
              <h2>Entre em Contacto</h2>
              <p>Preencha o formulário abaixo e envie sua mensagem.</p>
            </div>
            <form action="https://formsubmit.co/192dbeb7d260795dad35bd9430a7ebfa" method="POST">
              <input type="text" name="name" placeholder="Nome" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="tel" name="phone" placeholder="Telefone" />
              <textarea name="message" placeholder="Escreva a sua mensagem." style={{height: "150px"}}></textarea>
              <input type="submit" value="Enviar mensagem" />
              <input type="hidden" name="_next" value="https://igorpreis.github.io/portfolio/thanks.html" />
            </form>
          </div>
        </div>
      </section>
    </footer>
  );
}