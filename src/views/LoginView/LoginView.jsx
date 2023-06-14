import Form from "components/Login/Form";

import styles from "views/LoginView/LoginView.module.scss";

import AppDevelopment2 from "assets/AppDevelopment2.png";

const LoginView = () => {
  // TODO borrar componente
  return (
    <div className={styles["login-view"]}>
      <div className={styles.background}></div>
      <img
        src={AppDevelopment2}
        className={styles["development-img"]}
        alt="ilustration of app development process"
      />
      <div className={styles.form}>
        <Form />
      </div>
    </div>
  );
};

export default LoginView;
