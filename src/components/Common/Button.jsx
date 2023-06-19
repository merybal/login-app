import styles from "components/Common/Button.module.scss";

const Button = (props) => {
  /* TODO: 
    - logica loading (tiene que estar disabled tambien?)
*/
  const buttonHandler = (event) => {
    props.onButtonClicked(event);
  };

  return (
    <button disabled={props.disabled} onClick={buttonHandler}>
      {props.text}
    </button>
  );
};

export default Button;
