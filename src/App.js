import "./App.css";
import Header from "./components/Header/Header.js";
import Menu from "./components/Menu/Menu.js";
import Games from "./components/Games/Games.js";
import Logo from "./components/Logo/Logo.js";

function App() {
  return (
    <div className="App">
      <Logo />
      <Header />
      <Menu />
      <Games />
    </div>
  );
}

export default App;
