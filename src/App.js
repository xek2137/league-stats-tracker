import "./App.css";
import Header from "./components/Header/Header.js";
import Menu from "./components/Menu/Menu.js";
import Games from "./components/Games/Games";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Games />
    </div>
  );
}

export default App;
