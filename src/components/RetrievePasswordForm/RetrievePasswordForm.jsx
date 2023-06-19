import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import Input from "components/Common/Input";
import Button from "components/Common/Button";

import styles from "components/RetrievePasswordForm/RetrievePasswordForm.module.scss";

const RetrievePasswordForm = () => {
  const [enteredPersonalId, setEnteredPersonalId] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [personalIdIsValid, setPersonalIdIsValid] = useState(true);
  // const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [formIsValid, setFormIsValid] = useState(true);

  const options = [
    { value: "dni", label: "DNI" },
    { value: "ci", label: "C.I." },
    { value: "passport", label: "Pasaporte" },
  ];

  const enteredPersonalIdHandler = (inputValue) => {
    setEnteredPersonalId(inputValue);
    if (inputValue.trim() === "") {
      setPersonalIdIsValid(false);
      return;
    }
    setPersonalIdIsValid(true);
  };

  return (
    <div className={styles["form-container"]}>
      <form className={styles["login-container"]}>
        <h1>Olvidé mi contraseña</h1>
        <div className={styles["form"]}>
          <Select options={options} />
          {/* <Input
            //   TODO cambiar a select
            id="personalIdType"
            label="Tipo de documento"
            type="text"
            placeholder="Ingresá tu usuario"
          /> */}
          <Input
            id="personalId"
            label="Número de documento"
            type="number"
            placeholder="Ingresá tu número de documento"
            showError={!personalIdIsValid}
            onInputChange={enteredPersonalIdHandler}
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
