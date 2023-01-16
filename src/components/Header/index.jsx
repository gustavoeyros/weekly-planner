import {
  HeaderStyle,
  HeaderTitle,
  HeaderDate,
  HeaderTemperature,
} from "./styled";
const Header = () => {
  return (
    <HeaderStyle>
      <HeaderTitle>
        <h1>Weekly Planner</h1>
        <p>Use this planner to organize your daily issues.</p>
      </HeaderTitle>

      <HeaderDate>
        <span>10:58</span>
        <span>November 22th, 2022</span>
      </HeaderDate>

      <HeaderTemperature>
        <span>Asunción - Paraguay</span>
        <span>22°</span>
      </HeaderTemperature>
    </HeaderStyle>
  );
};

export default Header;
