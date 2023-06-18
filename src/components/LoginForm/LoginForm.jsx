import { useState } from "react";
import { Link } from "react-router-dom";

import Input from "components/Common/Input";
import Button from "components/Common/Button";

import styles from "components/LoginForm/LoginForm.module.scss";

import { ReactComponent as Warning } from "assets/Warning.svg";

const LoginForm = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    console.log("submit");
  };

  const enteredUsernameHandler = (inputValue) => {
    if (inputValue === "") {
      setUsernameError(true);
      return;
    }
    setEnteredUsername(inputValue);
    setUsernameError(false);
  };

  const enteredPasswordHandler = (inputValue) => {
    if (inputValue === "") {
      setPasswordError(true);
      return;
    }
    setEnteredPassword(inputValue);
    setPasswordError(false);
  };

  return (
    <div className={styles["form-container"]}>
      <form
        className={styles["login-container"]}
        onSubmit={formSubmissionHandler}
      >
        <h1>Iniciá sesión</h1>
        {/* <div className={styles.warning}>
          <Warning alt="warning sign icon" />
          <p>El nombre de usuario o la contraseña son incorrectos</p>
        </div> */}
        <div className={styles["form"]}>
          <Input
            id="username"
            label="Usuario"
            type="text"
            placeholder="Ingresá tu usuario"
            error={usernameError}
            onInputChange={enteredUsernameHandler}
          />
          <Input
            id="password"
            label="Contraseña"
            type="password"
            placeholder="Ingresá tu contraseña"
            error={passwordError}
            // onInputChange={(event) => validationHandler(event, "password")}
            onInputChange={enteredPasswordHandler}
          />
        </div>
        <Button text="Ingresar" state="" />
      </form>
      <Link to="/retrieve-password">Olvidé mi contraseña</Link>
    </div>
  );
};

export default LoginForm;
