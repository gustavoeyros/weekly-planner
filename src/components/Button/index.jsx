import { ButtonStyle } from "./styled";
const Button = ({ text }) => {
  console.log(text);
  return <ButtonStyle>{text}</ButtonStyle>;
};

export default Button;
