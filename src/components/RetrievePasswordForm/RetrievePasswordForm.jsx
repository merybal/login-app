import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SelectInput from "components/Common/Select";
import Input from "components/Common/Input";
import Button from "components/Common/Button";

import styles from "components/RetrievePasswordForm/RetrievePasswordForm.module.scss";

const personalIdOptions = [
  { value: "dni", label: "DNI" },
  { value: "ci", label: "C.I." },
  { value: "passport", label: "Pasaporte" },
];

const RetrievePasswordForm = () => {
  const [enteredPersonalId, setEnteredPersonalId] = useState("");
  const [enteredPersonalIdType, setEnteredPersonalIdType] = useState(
    personalIdOptions[0]
  );
  const [personalIdIsValid, setPersonalIdIsValid] = useState(true);
  const [formIsValid, setFormIsValid] = useState(true);

  useEffect(() => {
    document.title = "Página de recuperación de contraseña";
  }, []);

  /*when form has an error, button gets disabled
  useEffect enables button after input is corrected*/
  useEffect(() => {
    setFormIsValid(personalIdIsValid);
  }, [personalIdIsValid]);

  const enteredPersonalIdHandler = (inputValue) => {
    setEnteredPersonalId(inputValue);
    setPersonalIdIsValid(inputValue);
  };

  const selectedOptionHandler = (value) => {
    setEnteredPersonalIdType(value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setPersonalIdIsValid(enteredPersonalId);

    if (!enteredPersonalId) {
      setFormIsValid(false);
      return;
    }

    //insert POST method
    console.log("SUBMIT FORM", enteredPersonalIdType.label, enteredPersonalId);
  };

  return (
    <div className={styles["form-container"]}>
      <form className={styles["retrieve-password-container"]}>
        <h1>Olvidé mi contraseña</h1>
        <div className={styles["form"]}>
          <SelectInput
            id="personalIdType"
            label="Tipo de documento"
            defaultValue={[enteredPersonalIdType]}
            options={personalIdOptions}
            onSelectChange={selectedOptionHandler}
            ariaLabel="seleccionar tipo de documento"
          />
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
          <Link to=".." aria-label="volver a la página de inicio de sesión">
            Volver
          </Link>
          <Button
            text="Continuar"
            disabled={!formIsValid}
            onButtonClicked={formSubmissionHandler}
            ariaLabel="confirmar envío de formulario"
          />
        </div>
      </form>
    </div>
  );
};

export default RetrievePasswordForm;
