import "./App.css";
import Kivalaszto from "./view_componens/Kivalasto";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Angol nyelvtan varázsló</h1>
      </header>
      <article>
        <Kivalaszto />
      </article>
    </div>
  );
}

export default App;
