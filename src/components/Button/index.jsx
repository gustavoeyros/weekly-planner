import { ButtonStyle } from "./styled";
const Button = ({ text }) => {
  console.log(text);
  return <ButtonStyle text={text}>{text}</ButtonStyle>;
};

export default Button;
