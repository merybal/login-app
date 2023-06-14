import { Outlet } from "react-router-dom";

import styles from "views/HomeView/HomeView.module.scss";

import LogoA from "assets/Logo.png";
import { ReactComponent as LogoB } from "assets/TekBNK.svg";
import AppDevelopment2 from "assets/AppDevelopment2.png";

const HomeView = () => {
  return (
    <div>
      <header>
        <img src={LogoA} alt="logo" />
        <LogoB alt="TekBNK" />
      </header>
      <main className={styles["home-view"]}>
        <div className={styles.background}></div>
        <img
          src={AppDevelopment2}
          className={styles["development-img"]}
          alt="ilustration of app development process"
        />
        <div className={styles.form}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default HomeView;
