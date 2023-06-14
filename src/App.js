import LogoA from "assets/Logo.png";
import { ReactComponent as LogoB } from "assets/TekBNK.svg";

import "./App.scss";

import LoginView from "views/LoginView/LoginView";

function App() {
  return (
    <div className="app">
      <header>
        <img src={LogoA} className="App-logo" alt="logo" />
        <LogoB />
      </header>
      <LoginView />
    </div>
  );
}

export default App;
