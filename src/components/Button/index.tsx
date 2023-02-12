import { ButtonStyle } from "./styled";

type TButton = {
  text: string;
};

const Button = ({ text }: TButton) => {
  return <ButtonStyle text={text}>{text}</ButtonStyle>;
};

export default Button;
