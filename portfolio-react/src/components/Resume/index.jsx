import React from "react"
import "./Resume.css"

export default function Resume() {
  return (
    <section id="resume">
    <div className="box-resume">
      <div className="half-section resume-education">
        <h3><i className="fa-solid fa-graduation-cap stroke" style={{fontSize: "40px"}}></i>Educação</h3>
        <div className="resume-widget">
          <div className="time">2023 - 2024</div>
          <h4 className="resume-title">Front-End Developer</h4>
          <div className="institute">IADE - Creative University, Lisboa</div>
        </div>
        <div className="resume-widget">
          <div className="time">2017 - 2018</div>
          <h4 className="resume-title">
            ENGENHARIA DE SOFTWARE 
            <span style={{fontWeight: 300, fontSize: "14px", position: "absolute", marginTop: 0}}>*</span>
          </h4>
          <div className="institute">Centro Universitário Salesiano, Vitória-ES</div>
        </div>
        <div className="resume-widget">
          <div className="time">2016 - 2017</div>
          <h4 className="resume-title">Digital Marketing Course</h4>
          <div className="institute">Wis Educação, Vitória-ES</div>
        </div>
        <div className="resume-widget">
          <div className="time">2010 - 2012</div>
          <h4 className="resume-title">TEC. MECÂNICA INDUSTRIAL</h4>
          <div className="institute">Arnulpho Mattos, Vitória-ES</div>
        </div>
      </div>

      <div className="half-section resume-experience">
        <h3><i className="fa-solid fa-briefcase stroke" style={{fontSize: "38px"}}></i>Experiências</h3>
        <div className="resume-widget">
          <div className="time">2022 - Presente</div>
          <h4 className="resume-title">Digital Marketing Strategist</h4>
          <div className="institute">Aronick Sports, Lisboa</div>
        </div>
        <div className="resume-widget">
          <div className="time">2017 - 2022</div>
          <h4 className="resume-title">Head of Digital Marketing</h4>
          <div className="institute">Icone Sports, Vila Velha-ES</div>
        </div>
        <div className="resume-widget">
          <div className="time">2020 - 2020</div>
          <h4 className="resume-title">Sócio Administrador</h4>
          <div className="institute">Geek vs Nerd Store, Cariacica-ES</div>
        </div>
        <div className="resume-widget">
          <div className="time">2013 - 2017</div>
          <h4 className="resume-title">Analista de Marketing</h4>
          <div className="institute">Icone Sports, Vila Velha-ES</div>
        </div>
      </div>
    </div>
  </section>
  )
}
