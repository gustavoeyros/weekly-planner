import { ButtonStyle } from "./styled";
const Button = ({ text }) => {
  return <ButtonStyle text={text}>{text}</ButtonStyle>;
};

export default Button;
