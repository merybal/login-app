import { Link } from "react-router-dom";

import Input from "components/Common/Input";
import Button from "components/Common/Button";

import styles from "components/Login/Form.module.scss";

const Form = () => {
  return (
    <div className={styles["form-container"]}>
      <form className={styles["login-container"]}>
        <h1>Iniciá sesión</h1>
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

export default Form;
