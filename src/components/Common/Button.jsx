import styles from "components/Common/Button.module.scss";

const Button = (props) => {
  const buttonHandler = (event) => {
    props.onButtonClicked(event);
  };

  return (
    <button
      disabled={props.disabled}
      onClick={buttonHandler}
      className={styles.button}
      aria-label={props.ariaLabel}
    >
      {props.text}
    </button>
  );
};

export default Button;
