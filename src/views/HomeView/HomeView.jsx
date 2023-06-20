import { Outlet } from "react-router-dom";

import styles from "views/HomeView/HomeView.module.scss";

import LogoA from "assets/Logo.png";
import { ReactComponent as LogoB } from "assets/TekBNK.svg";

const HomeView = () => {
  return (
    <div className={styles["home-view"]}>
      <header className={styles.header}>
        <img src={LogoA} alt="logo" />
        <LogoB title="logo de TekBNK" />
      </header>
      <main className={styles.main}>
        <div className={styles["image-container"]}>
          <div className={styles.image}></div>
        </div>
        <Outlet className={styles.form} />
      </main>
      <div className={styles.background}></div>
    </div>
  );
};

export default HomeView;
