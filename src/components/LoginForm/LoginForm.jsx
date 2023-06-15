import { Link } from "react-router-dom";

import Input from "components/Common/Input";
import Button from "components/Common/Button";

import styles from "components/LoginForm/LoginForm.module.scss";

import { ReactComponent as Warning } from "assets/Warning.svg";

const LoginForm = () => {
  return (
    <div className={styles["form-container"]}>
      <form className={styles["login-container"]}>
        <h1>Iniciá sesión</h1>
        <div className={styles.warning}>
          <Warning className={styles["warning-icon"]} alt="warning sign icon" />
          <p>El nombre de usuario o la contraseña son incorrectos</p>
        </div>
        <div className={styles["form"]}>
          <Input
            id="username"
            label="Usuario"
            type="text"
            placeholder="Ingresá tu usuario"
          />
          <Input
            id="password"
            label="Contraseña"
            type="password"
            placeholder="Ingresá tu contraseña"
          />
        </div>
        <Button text="Ingresar" state="" />
      </form>
      <Link to="/retrieve-password">Olvidé mi contraseña</Link>
    </div>
  );
};

export default LoginForm;