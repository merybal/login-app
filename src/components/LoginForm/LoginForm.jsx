import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Input from "components/Common/Input";
import Button from "components/Common/Button";

import styles from "components/LoginForm/LoginForm.module.scss";

import { ReactComponent as Warning } from "assets/Warning.svg";

const LoginForm = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [usernameIsValid, setUsernameIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(true);
  const [showWarning, setShowWarning] = useState(false);

  //To only display warning the first time the form is submitted
  let showWarningCounter = 0;

  useEffect(() => {
    if (usernameIsValid && passwordIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [usernameIsValid, passwordIsValid]);

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    showWarningCounter++;

    if (enteredUsername.trim() === "") {
      setUsernameIsValid(false);
    }
    if (enteredPassword.trim() === "") {
      setPasswordIsValid(false);
    }

    if (enteredUsername.trim() === "" || enteredPassword.trim() === "") {
      setFormIsValid(false);
      return;
    }

    // if (showWarningCounter === 1) {setShowWarning(true)};

    console.log("submit", enteredUsername, enteredPassword);
  };

  const enteredUsernameHandler = (inputValue) => {
    setEnteredUsername(inputValue);
    if (inputValue.trim() === "") {
      setUsernameIsValid(false);
      return;
    }
    setUsernameIsValid(true);
  };

  const enteredPasswordHandler = (inputValue) => {
    setEnteredPassword(inputValue);
    setPasswordTouched(true);
    if (inputValue.trim() === "") {
      setPasswordIsValid(false);
      return;
    }
    setPasswordIsValid(true);
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
            // onInputChange={(event) => validationHandler(event, "password")}
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
