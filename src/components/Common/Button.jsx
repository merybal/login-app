import styles from "components/Common/Button.module.scss";

const Button = (props) => {
  /* TODO: 
    - logica disabled para que se cambie la clase pero ademas se inhabilite
    - logica loading (tiene que estar disabled tambien?)
*/
  return <button className="">{props.text}</button>;
};

export default Button;
