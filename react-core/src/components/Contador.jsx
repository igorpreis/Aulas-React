import { useState } from "react"

export default function Contador() {


  const buttonStyles = {
    padding: "1rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: ".5rem",
    backgroundColor: "#58CEFF",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  }

  const [valor, setValor] = useState(0)
  return (
    
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <h2>Contador</h2>
      <button
        style={buttonStyles}
        onClick={() => {
          setValor(valor - 1)
        }}
      >
        -
      </button>
      <span>{valor}</span>
      <button
        style={buttonStyles}
        onClick={() => {
          setValor(valor + 1)
        }}
      >
        +
      </button>
    </div>
  )
}
