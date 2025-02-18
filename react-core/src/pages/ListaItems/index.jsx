import ListaItems from "../../components/ListaItems";
const lista = ["Pera", "Maça", "Uva"]

export default function ListaItemsPage() {
  return (
    <div>
      <h1>Componente ListaItems.jsx</h1>
      <ListaItems items={lista} />
    </div>
  )
}
