
export default function ListaItems(props){
  console.log(props)
    return <>
    <h3>Lista de Items</h3>
    {props.items.map((item, key) => (
      <li key={`fruta-item-${key}`}>{item}</li>
    ))}
  </>
  }