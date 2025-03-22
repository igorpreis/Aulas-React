import React from "react"


import Intro from "../components/Intro"
import About from "../components/About"
import Resume from "../components/Resume"
import Skills from "../components/Skills"
import Portfolio from "../components/Portfolio"

export default function HomePage() {
  return (
    <>
      <main>
        <Intro />
        <About />
        <Resume />
        <Skills/>
        <Portfolio/>
      </main>
    </>
  )
}
