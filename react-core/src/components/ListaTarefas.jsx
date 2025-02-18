import { useState } from "react"

export default function ListaTarefas() {
  const [tarefa, setTarefa] = useState("")
  const [lista, setLista] = useState([])

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        placeholder="Nova tarefa"
        value={tarefa}
        onChange={(e) => {
          setTarefa(e.target.value)
        }}
      />
      <button
        onClick={() => {
          setLista([tarefa, ...lista])
        }}
      >
        Adicionar
      </button>

      <ul className="lista">
        {lista.map((item, key) => (
          <li key={`item-lista${key}`}>
            {item}{" "}

            <button
              onClick={() => {
                const listaFiltrada = lista.filter((_, taskKey) => key !== taskKey)
                setLista(listaFiltrada)
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
