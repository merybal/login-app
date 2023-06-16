import { Outlet } from "react-router-dom";

import styles from "views/HomeView/HomeView.module.scss";

import LogoA from "assets/Logo.png";
import { ReactComponent as LogoB } from "assets/TekBNK.svg";
import AppDevelopment from "assets/AppDevelopment.png";

const HomeView = () => {
  return (
    <div className={styles["home-view"]}>
      <header className={styles.header}>
        <img src={LogoA} alt="logo" />
        <LogoB alt="TekBNK" />
      </header>
      <div className={styles.main}>
        <div className={styles["image-container"]}>
          <div className={styles.image}></div>
        </div>
        <Outlet className={styles.form} />
      </div>
      <div className={styles.background}></div>
    </div>
  );
};

export default HomeView;
