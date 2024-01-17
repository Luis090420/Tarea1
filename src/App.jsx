import { ColorChanger } from "./components/ColorChanger";

export const App = () => {
  return (
    <div className="app-container">
      <h1>Tarea 1</h1>
      <div className="color-changer-container">
        <ColorChanger color="blue" />
        <ColorChanger color="red" />
        <ColorChanger color="yellow" />
      </div>
    </div>
  );
};

export default App;


