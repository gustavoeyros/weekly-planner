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
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../store/user-context";

const Header = () => {
  let hours = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const [time, setTime] = useState(hours);

  useEffect(() => {
    setInterval(() => {
      let hours = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      setTime(hours);
    }, 1000);
  }, []);

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
        <span>{time}</span>
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
