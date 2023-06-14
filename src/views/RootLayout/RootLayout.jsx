import { Outlet } from "react-router-dom";

import styles from "views/RootLayout/RootLayout.module.scss";

import LogoA from "assets/Logo.png";
import { ReactComponent as LogoB } from "assets/TekBNK.svg";

const RootLayout = () => {
  return (
    <div>
      <header>
        <img src={LogoA} alt="logo" />
        <LogoB alt="TekBNK" />
      </header>
      <Outlet />
    </div>
  );
};

export default RootLayout;
