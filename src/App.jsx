import LoginView from "views/LoginView/LoginView";

import "./App.scss";

import LogoA from "assets/Logo.png";
import { ReactComponent as LogoB } from "assets/TekBNK.svg";
import AppDevelopment2 from "assets/AppDevelopment2.png";

function App() {
  return (
    <div className="app">
      <header>
        <img src={LogoA} alt="logo" />
        <LogoB alt="TekBNK" />
      </header>
      <LoginView />
    </div>
  );
}

export default App;
