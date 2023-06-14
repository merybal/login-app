import styles from "components/Common/Input.module.scss";

const Input = (props) => {
  return (
    <div className={styles["input-container"]}>
      <label
        htmlFor={props.id}
        //   className={`${!isNameValid && styles.invalid}`}
        className={styles.label}
      >
        {props.label} <span>*</span>
      </label>
      <input
        id={props.id}
        //   className={`${!isNameValid && styles.invalid}`}
        className={styles.input}
        type={props.type}
        placeholder={props.placeholder}
        //   value={enteredName}
        //   onChange={nameChangeHandler}
      />
      {/* AGREGAR OJITO
      https://medium.com/@miguelznunez/html-css-javascript-how-to-show-hide-password-using-the-eye-icon-27f033bf84ad
      https://codingstatus.com/show-and-hide-password-using-react-js/*/}
    </div>
  );
};

export default Input;
