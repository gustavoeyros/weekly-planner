import logoutLogo from "../../assets/logoutLogo.svg";
import arrowLogo from "../../assets/arrowLogout.svg";
import iconCloud from "../../assets/icon-cloud.svg";
import {
  HeaderStyle,
  HeaderTitle,
  HeaderDate,
  HeaderTemperature,
  TemperatureContainer,
  HeaderLogout,
  LogoutContainer,
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
        <TemperatureContainer>
          <img src={iconCloud} />
          <span>22°</span>
        </TemperatureContainer>
      </HeaderTemperature>

      <HeaderLogout>
        <img src={logoutLogo} />
        <LogoutContainer>
          <img src={arrowLogo} />
          <span>Logout</span>
        </LogoutContainer>
      </HeaderLogout>
    </HeaderStyle>
  );
};

export default Header;
