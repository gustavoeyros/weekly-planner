import { Label } from "./styled";

interface TextProps {
  text: string;
}

const TextLabel = ({ text }: TextProps) => {
  return <Label>{text}</Label>;
};

export default TextLabel;
