import { TitleStyle } from "./styled";

const Title = ({ title, subtitle }) => {
  return (
    <TitleStyle>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </TitleStyle>
  );
};

export default Title;
