export const Mostrar = (props) => {
  return (
    <div>
      <div>{props.id}</div>
      <p>{props.text}</p>
      <p>{props.completed}</p>
      
    </div>
  )
}