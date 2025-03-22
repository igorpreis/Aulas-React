import React, { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["top", "about", "resume", "skills", "portfolio", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 50 && rect.bottom > 50;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav className="navbar">
        <div className="box-navbar-logo">
          <a href="https://igorpreis.github.io/portfolio/">
            <span>&lt;</span>Igor Reis<span>/&gt;</span>
          </a>
        </div>
        <div className="box-navbar-menu">
          <ul id="navbar-menu">
            {[
              { id: "top", text: "Início" },
              { id: "about", text: "Sobre" },
              { id: "resume", text: "Resumo" },
              { id: "skills", text: "Habilidades" },
              { id: "portfolio", text: "Portfólio" },
              { id: "contact", text: "Contacto" }
            ].map(({ id, text }) => (
              <li key={id} className={activeSection === id ? "current" : ""}>
                <a href={`#${id}`}>{text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="box-navbar-btn">
          <a href="https://api.whatsapp.com/send?phone=351913959487" target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn-primary btn-header">
              <i className="fa-brands fa-whatsapp"></i>Whatsapp
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
}
