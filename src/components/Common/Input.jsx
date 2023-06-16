import { useState } from "react";

import styles from "components/Common/Input.module.scss";

import { ReactComponent as EyeOpen } from "assets/EyeOpen.svg";
import { ReactComponent as EyeClosed } from "assets/EyeClosed.svg";
import { ReactComponent as Warning } from "assets/Warning.svg";

const Input = (props) => {
  const [inputType, setInputType] = useState(props.type);
  // const [inputValue, setInputValue] = useState("");

  let eyeIcon = "";

  const togglePassword = () => {
    if (inputType === "password") {
      setInputType("text");
      return;
    }
    setInputType("password");
  };

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
      <label
        htmlFor={props.id}
        //   className={`${!isNameValid && styles.invalid}`}
        className={styles.label}
      >
        {props.label} <span>*</span>
      </label>
      <div className={styles["field-container"]}>
        <input
          id={props.id}
          //   className={`${!isNameValid && styles.invalid}`}
          className={`${styles.input} ${styles["error-input"]}`}
          type={inputType}
          placeholder={props.placeholder}
          //   value={enteredName}
          //   onChange={nameChangeHandler}
        />
        {props.type === "password" && eyeIcon}
      </div>
      <div className={styles["error-message"]}>
        <Warning alt="warning sign icon" />
        <strong>Este campo no debe estar vacío</strong>
      </div>
    </div>
  );
};

export default Input;
