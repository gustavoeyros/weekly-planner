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
import { useContext } from "react";
import { UserContext } from "../../store/user-context";

const Header = () => {
  const userCtx = useContext(UserContext);
  const logoutHandler = () => {
    userCtx.onLogout();
  };
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
          <button onClick={logoutHandler}>Logout</button>
        </LogoutContainer>
      </HeaderLogout>
    </HeaderStyle>
  );
};

export default Header;
