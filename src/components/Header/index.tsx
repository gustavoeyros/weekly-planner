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

interface actionsContext {
  onLogout: () => void;
}

const Header = () => {
  //realtime clock
  let hours = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const [time, setTime] = useState(hours);

  useEffect(() => {
    setInterval(() => {
      hours = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      setTime(hours);
    }, 1000);
  }, []);

  const userCtx = useContext(UserContext) as actionsContext;
  const logoutHandler = () => {
    userCtx.onLogout();
  };

  interface weatherResponse {
    current: {
      temp_c: number;
    };
  }

  //weather api
  const [temperature, setTemperature] = useState<weatherResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const userStorage = JSON.parse(localStorage.getItem("logged") || "");
  const countryStorage = userStorage?.country;
  const cityStorage = userStorage?.city;
  console.log(userStorage);

  const FindTemperatureHandler = () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=ce9027b7cc944be2a99163432231901&q=${cityStorage}&lang=pt`
    )
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        setTemperature(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    FindTemperatureHandler();
  }, []);

  const currentDate = new Date().toLocaleDateString(["en-US"], {
    dateStyle: "long",
  });
  const monthDay = currentDate.split(",")[0].concat("th, ");
  const year = currentDate.split(",")[1];
  const currentDateStyle = monthDay + year;

  return (
    <HeaderStyle>
      <HeaderTitle>
        <h1>Weekly Planner</h1>
        <p>Use this planner to organize your daily issues.</p>
      </HeaderTitle>

      <HeaderDate>
        <span>{time}</span>
        <span>{currentDateStyle}</span>
      </HeaderDate>

      <HeaderTemperature>
        <span>
          {cityStorage} - {countryStorage}
        </span>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <TemperatureContainer>
            {temperature && (
              <>
                <img src={iconCloud} />
                <span>{temperature.current.temp_c}°</span>
              </>
            )}
            {!temperature && "Location not found."}
          </TemperatureContainer>
        )}
      </HeaderTemperature>

      <HeaderLogout>
        <a href="https://compass.uol/en/home/" target="_blank">
          <img src={logoutLogo} />
        </a>
        <LogoutContainer>
          <img src={arrowLogo} />
          <button onClick={logoutHandler}>Logout</button>
        </LogoutContainer>
      </HeaderLogout>
    </HeaderStyle>
  );
};

export default Header;
