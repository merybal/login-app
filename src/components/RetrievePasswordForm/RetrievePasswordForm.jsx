import { Link } from "react-router-dom";

import Input from "components/Common/Input";
import Button from "components/Common/Button";

import styles from "components/RetrievePasswordForm/RetrievePasswordForm.module.scss";

const RetrievePasswordForm = () => {
  //TODO ver si le cambio el nombre a RetrievePasswordForm, asi no es solo un alias. a este y a la otra form.
  return (
    <div className={styles["form-container"]}>
      <form className={styles["login-container"]}>
        <h1>Olvidé mi contraseña</h1>
        <div className={styles["form"]}>
          <Input
            //   TODO cambiar a select
            id="username"
            label="Tipo de documento"
            type="text"
            placeholder="Ingresá tu usuario"
          />
          <Input
            id="personalid"
            label="Número de documento"
            type="number"
            placeholder="Ingresá tu número de documento"
          />
        </div>
        <div className={styles["button-container"]}>
          <Link to="..">Volver</Link>
          <Button text="Continuar" state="" />
        </div>
      </form>
    </div>
  );
};

export default RetrievePasswordForm;
