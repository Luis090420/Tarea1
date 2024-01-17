import { tasks } from "../utils/Datos";
import { Mostrar } from "./Mostrar";


export const TaskList = () => {
  return (
    <div className="letras" >
    {tasks.map((tasks)=>(<Mostrar key={tasks.id} {...tasks}/>))}
    </div>
  )
}
