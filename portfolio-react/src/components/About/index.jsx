import React from "react"
import "./About.css"

export default function About() {
  return (
<section id="about">
  <div className="full-section">
    <div className="header-section">
      <h2>Sobre mim</h2>
      <p>
        Profissional de marketing digital altamente motivado e criativo, recentemente formado pelo IADE
        em Desenvolvimento Web Front-End em busca da primeira experiência como programador.
      </p>
    </div>
    <div className="video-section">
      <iframe
        width="100%"
        height="100%"
        src="//www.youtube.com/embed/r-iETptU7JY?si=fmUF3rnjhcB-F-A9?autoplay=0&showinfo=0&"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>
  )
}
