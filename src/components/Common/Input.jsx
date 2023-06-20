import { useState } from "react";

import styles from "components/Common/Input.module.scss";

import { ReactComponent as EyeOpen } from "assets/EyeOpen.svg";
import { ReactComponent as EyeClosed } from "assets/EyeClosed.svg";
import { ReactComponent as Warning } from "assets/Warning.svg";

const Input = (props) => {
  const [inputType, setInputType] = useState(props.type);
  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
    props.onInputChange(event.target.value);
  };

  let eyeIcon = "";

  // changes visibility of eyes altogether
  const togglePassword = () => {
    if (inputType === "password") {
      setInputType("text");
      return;
    }
    setInputType("password");
  };

  // changes visibility of password as well as open eye for closed eye
  //TODO refactor
  if (inputType === "password") {
    eyeIcon = (
      <EyeOpen
        className={styles.eye}
        onClick={togglePassword}
        title="botón de ojo abierto para revelar contraseña" //works as alt for svg
      />
    );
  } else {
    eyeIcon = (
      <EyeClosed
        className={styles.eye}
        onClick={togglePassword}
        title="botón de ojo cerrado para ocultar contraseña"
      />
    );
  }

  //possible improvement: make 'required' optional via prop.

  return (
    <div className={styles["input-container"]}>
      <label htmlFor={props.id} className={styles.label}>
        {props.label} <span>*</span>
      </label>
      <div className={styles["field-container"]}>
        <input
          id={props.id}
          className={`${styles.input} ${
            props.showError && styles["error-input"]
          } `}
          type={inputType}
          placeholder={props.placeholder}
          onChange={inputChangeHandler}
          value={inputValue}
          aria-required="true"
          aria-invalid="true"
          aria-errormessage="error"
        />
        {props.type === "password" && eyeIcon}
      </div>
      {props.showError && (
        <div className={styles["error-message"]} id="error">
          <Warning title="icono de alerta" />
          <strong>Este campo no debe estar vacío</strong>
        </div>
      )}
    </div>
  );
};

export default Input;
