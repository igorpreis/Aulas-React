import { useState } from "react"

import { useNavigate} from "react-router";

export default function LoginForm(setUser) {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  })

  const handleInput = (e, name) => {
    setFormValues({
      ...formValues,
      [name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)

    if (formValues.email === "igorxreis@gmail.com" && formValues.password === "12345") {
      setUser({
        id: 1,
        email: formValues.email,
        nome: "Igor"
      })
      navigate("/dashboard")
    } else {
      alert("Usuário ou senha inválidos")
    }
  }

  return (
    <form className="flex flex-col gap-2 mt-2" onSubmit={handleSubmit}>
      <input className="border border-slate-600 px-2 py-1 rounded-xs mt-2" type="text" name="email" placeholder="Email" value={formValues.email} onChange={(e) => handleInput(e, "email")} />
      <input className="border border-slate-600 px-2 py-1 rounded-xs" type="password" name="password" placeholder="Senha" value={formValues.password} onChange={(e) => handleInput(e, "password")} />
      <button className="bg-red-500 rounded-xl text-white py-1 text-sm uppercase cursor-pointer hover:bg-red-600 mt-2">Iniciar Sessão</button>
    </form>
  )
}
