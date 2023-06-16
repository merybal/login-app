import styles from "components/Common/Input.module.scss";

import { ReactComponent as EyeOpen } from "assets/EyeOpen.svg";
import { ReactComponent as EyeClosed } from "assets/EyeClosed.svg";
import { useState } from "react";

const Input = (props) => {
  const [inputType, setInputType] = useState(props.type);
  const [inputValue, setInputValue] = useState("");

  // const [eyeIconVisible, setEyeIconVisible] = useState(true);

  // const [passwordType, setPasswordType] = useState("password");
  // const [passwordInput, setPasswordInput] = useState("");

  let eyeIconVisible = false;

  if (props.type === "password") {
    eyeIconVisible = true;
  }

  const togglePassword = () => {
    if (inputType === "password") {
      setInputType("text");
      return;
    }
    setInputType("password");
  };

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
          className={styles.input}
          type={inputType}
          placeholder={props.placeholder}
          //   value={enteredName}
          //   onChange={nameChangeHandler}
        />

        {eyeIconVisible && (
          <EyeOpen
            className={styles.eye}
            alt="eye open to reveal password"
            onClick={togglePassword}
          />
        )}
        {/* <EyeClosed className={styles.eye} alt="eye closed to hide password" /> */}
      </div>

      {/* AGREGAR OJITO
      https://medium.com/@miguelznunez/html-css-javascript-how-to-show-hide-password-using-the-eye-icon-27f033bf84ad
      https://codingstatus.com/show-and-hide-password-using-react-js/*/}
    </div>
  );
};

export default Input;
