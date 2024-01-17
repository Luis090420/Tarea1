  import { TaskList } from "./TaskList";
  export const ColorChanger = ({ color }) => {
      return (
        <div className="cuadrado" style={{ backgroundColor: color }}>
          <div className="texto"><TaskList/></div>
        </div>
      );
    };
    
    export default ColorChanger; 