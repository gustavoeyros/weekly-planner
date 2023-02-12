import { TitleStyle } from "./styled";

interface ITextProps {
  title?: string;
  subtitle?: string;
}

const Title = ({ title, subtitle }: ITextProps) => {
  return (
    <TitleStyle>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </TitleStyle>
  );
};

export default Title;
