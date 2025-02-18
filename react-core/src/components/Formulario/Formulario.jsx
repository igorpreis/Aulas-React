import { useState } from "react"
import "./formulario.css"

export default function Formulario() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const validate = (nameValue, emailValue) => {
    if (nameValue.length < 3 || emailValue.lenght) {
      return false
    }
    return true
  }

  return (
    <div className="formularioWrapper">
      <form
        onSubmit={(evt) => {
          evt.preventDefault()
          const isValid = validate(name, email)
          if (!isValid) {
            alert("Dados inválidos")
            return
          }
        }}
      >
        <div className="formularioFiltro">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>
        <div className="formularioFiltro">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <button className="formularioSubmit">Enviar</button>
      </form>
    </div>
  )
}
