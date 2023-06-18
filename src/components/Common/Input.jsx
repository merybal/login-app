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

  const togglePassword = () => {
    if (inputType === "password") {
      setInputType("text");
      return;
    }
    setInputType("password");
  };

  //TODO mejorar
  if (inputType === "password") {
    eyeIcon = (
      <EyeOpen
        className={styles.eye}
        alt="eye open to reveal password"
        onClick={togglePassword}
      />
    );
  } else {
    eyeIcon = (
      <EyeClosed
        className={styles.eye}
        alt="eye closed to hide password"
        onClick={togglePassword}
      />
    );
  }

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
        />
        {props.type === "password" && eyeIcon}
      </div>
      {props.showError && (
        <div className={styles["error-message"]}>
          <Warning alt="warning sign icon" />
          <strong>Este campo no debe estar vacío</strong>
        </div>
      )}
    </div>
  );
};

export default Input;
