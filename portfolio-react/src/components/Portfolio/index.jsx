import React, { useState } from "react";
import "./Portfolio.css";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterSelection = (category) => {
    setActiveFilter(category);
    // Filtro Works
filterSelection("all")
function filterSelection(c) {
  var x, i
  x = document.getElementsByClassName("portfolio-works")
  if (c == "all") c = ""
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show")
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show")
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2
  arr1 = element.className.split(" ")
  arr2 = name.split(" ")
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i]
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2
  arr1 = element.className.split(" ")
  arr2 = name.split(" ")
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1)
    }
  }
  element.className = arr1.join(" ")
}

// Add active class to the current button (highlight it)

var btnContainer = document.getElementById("portfolio-buttons")
var btns = btnContainer.getElementsByClassName("btn-filter")
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active")
    current[0].className = current[0].className.replace(" active", "")
    this.className += " active"
  })
}
  };

  return (
    <section id="portfolio">
      <div className="full-section">
        <div className="header-section">
          <h2>Projetos Recentes</h2>
          <p>Confira alguns projetos criativos em que trabalhei.</p>
        </div>

        <div id="portfolio-buttons">
          <button 
            className={`btn-filter ${activeFilter === "all" ? "active" : ""}`} 
            onClick={() => filterSelection("all")}
          >
            Todos
          </button>
          <button 
            className={`btn-filter ${activeFilter === "web-dev" ? "active" : ""}`} 
            onClick={() => filterSelection("web-dev")}
          >
            Web Developer
          </button>
          <button 
            className={`btn-filter ${activeFilter === "web-design" ? "active" : ""}`} 
            onClick={() => filterSelection("web-design")}
          >
            Web Designer
          </button>
          <button 
            className={`btn-filter ${activeFilter === "marketing" ? "active" : ""}`} 
            onClick={() => filterSelection("marketing")}
          >
            Marketing
          </button>
        </div>

        <div className="container-works">
          <div className="portfolio-works web-dev">
            <a href="https://sgoconst.com/" target="_blank" rel="noopener noreferrer" className="card-work">
              <div className="category-work">Wordpress</div>
              <div className="box-info-work">
                <p className="info-work">Website SGO</p>
              </div>
              <img src="/src/assets/img/website-sgo.jpg" className="img-work" alt="Website SGO" />
            </a>
          </div>

          <div className="portfolio-works web-dev web-design">
            <a href="https://simulador.aronick.pt/" target="_blank" rel="noopener noreferrer" className="card-work">
              <div className="category-work">Design</div>
              <div className="box-info-work">
                <p className="info-work">Simulador Aronick</p>
              </div>
              <img src="/src/assets/img/simulador-aronick.jpg" className="img-work" alt="Simulador Aronick" />
            </a>
          </div>

          <div className="portfolio-works web-design">
            <a href="https://www.behance.net/igorpreis" target="_blank" rel="noopener noreferrer" className="card-work">
              <div className="category-work">Logotipo</div>
              <div className="box-info-work">
                <p className="info-work">Branding Misare</p>
              </div>
              <img src="/src/assets/img/misare.jpg" className="img-work" alt="Branding Misare" />
            </a>
          </div>

          <div className="portfolio-works marketing">
            <a href="https://www.behance.net/gallery/124708007/Videos-Icone-Sports" target="_blank" rel="noopener noreferrer" className="card-work">
              <div className="category-work">Campanhas</div>
              <div className="box-info-work">
                <p className="info-work">Videos Icone Sports</p>
              </div>
              <img src="/src/assets/img/videos-icone.jpg" className="img-work" alt="Videos Icone Sports" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
