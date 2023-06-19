import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Input from "components/Common/Input";
import Button from "components/Common/Button";

import styles from "components/LoginForm/LoginForm.module.scss";

import { ReactComponent as Warning } from "assets/Warning.svg";

//To only display warning the first time the form is submitted
let firstLoginAttemptFlag = true;

const LoginForm = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [usernameIsValid, setUsernameIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [formIsValid, setFormIsValid] = useState(true);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    setFormIsValid(usernameIsValid && passwordIsValid);
  }, [usernameIsValid, passwordIsValid]);

  const validateInput = (inputValue) => {
    return inputValue.trim() !== "";
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    const usernameValidation = validateInput(enteredUsername);
    const passwordValidation = validateInput(enteredPassword);

    setUsernameIsValid(usernameValidation);
    setPasswordIsValid(passwordValidation);

    if (!usernameValidation || !passwordValidation) {
      setFormIsValid(false);
      return;
    }

    if (
      !showWarning &&
      usernameValidation &&
      passwordValidation &&
      firstLoginAttemptFlag
    ) {
      setShowWarning(true);
      firstLoginAttemptFlag = false;
      return;
    }

    if (showWarning) {
      setShowWarning(false);
    }

    //insert POST method
    console.log("SUBMIT FORM", enteredUsername, enteredPassword);
  };

  const enteredUsernameHandler = (inputValue) => {
    setEnteredUsername(inputValue);
    setUsernameIsValid(validateInput(inputValue));
  };

  const enteredPasswordHandler = (inputValue) => {
    setEnteredPassword(inputValue);
    setPasswordIsValid(validateInput(inputValue));
  };

  return (
    <div className={styles["form-container"]}>
      <form
        className={styles["login-container"]}
        onSubmit={formSubmissionHandler}
      >
        <h1>Iniciá sesión</h1>
        {showWarning && (
          <div className={styles.warning}>
            <Warning alt="warning sign icon" />
            <p>El nombre de usuario o la contraseña son incorrectos</p>
          </div>
        )}
        <div className={styles["form"]}>
          <Input
            id="username"
            label="Usuario"
            type="text"
            placeholder="Ingresá tu usuario"
            showError={!usernameIsValid}
            onInputChange={enteredUsernameHandler}
          />
          <Input
            id="password"
            label="Contraseña"
            type="password"
            placeholder="Ingresá tu contraseña"
            showError={!passwordIsValid}
            onInputChange={enteredPasswordHandler}
          />
        </div>
        <Button text="Ingresar" disabled={!formIsValid} />
      </form>
      <Link to="/retrieve-password">Olvidé mi contraseña</Link>
    </div>
  );
};

export default LoginForm;
