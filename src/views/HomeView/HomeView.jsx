import { Outlet } from "react-router-dom";

import styles from "views/HomeView/HomeView.module.scss";

import LogoA from "assets/Logo.png";
import { ReactComponent as LogoB } from "assets/TekBNK.svg";
import AppDevelopment from "assets/AppDevelopment.png";

const HomeView = () => {
  return (
    <div className={styles["home-view"]}>
      <div className={styles.header}>header</div>
      <div className={styles.main}>
        main
        <div className={styles.image}>image</div>
        <div className={styles.form}>form</div>
      </div>
      {/* <header>
        <img src={LogoA} alt="logo" />
        <LogoB alt="TekBNK" />
      </header>
      <main className={styles["main"]}>
        main
        <div className={styles["img-container"]}>
          image container
          <img
            src={AppDevelopment}
            className={styles["development-img"]}
            alt="ilustration of app development process"
          />
        </div>
        <div className={styles.form}>
          <Outlet className={styles.form} />
        </div>
      </main> */}
    </div>
  );
};

export default HomeView;
