import React from "react"
import { BrowserRouter, Routes, Route } from "react-router"
import Layout from "./components/Layout"
import HomePage from "./pages"
import "./assets/reset.css"
import "./assets/style.css"
import "./assets/responsive.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
