import React, { useEffect } from "react";
import { PropsWithChildren } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext({});

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();

  //check loggedIn

  type loggedType = string | null | boolean;

  const [isLogged, setIsLogged] = useState<loggedType>(
    localStorage.getItem("logged")
  );

  const [responseOk, setIsResponseOk] = useState<boolean | null>(null);
  const [registerResponse, setRegisterResponse] = useState<boolean | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [visualLoading, setVisualLoading] = useState<boolean | null>(null);
  const [hasError, setHasError] = useState<boolean | null>(null);

  const logoutHandler = () => {
    localStorage.removeItem("logged");
    setIsLogged(false);
  };

  const visualLoadingHandler = () => {
    setVisualLoading(true);
  };

  const signUpHandler = (data: {}) => {
    fetch(`${import.meta.env.VITE_APIBaseURL}/users/sign-up`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => {
        setVisualLoading(false);
        if (res.ok) {
          setRegisterResponse(res.ok);
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          setRegisterResponse(res.ok);
        }
        return res.json();
      })
      .then((data) => {
        if (typeof data === "string") {
          setErrorMessage(data);
        }
        setErrorMessage(data.errors[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  interface IUserData {
    token: string;
    city: string;
    country: string;
    id: string;
  }

  const signInHandler = (data: {}) => {
    setIsLoading(true);

    fetch(`${import.meta.env.VITE_APIBaseURL}/users/sign-in`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => {
        setVisualLoading(false);
        setIsLoading(false);
        if (res.ok) {
          setIsResponseOk(res.ok);
        } else {
          setIsResponseOk(res.ok);
        }
        return res.json();
      })
      .then((data) => {
        if (typeof data === "string") {
          setErrorMessage(data);
          setHasError(true);
        }
        if (typeof data === "object") {
          if (data.errors) {
            setErrorMessage(data.errors[0]);
            setHasError(true);
          } else {
            setHasError(false);
            const userData: IUserData = {
              token: data.token,
              city: data.user.city,
              country: data.user.country,
              id: data.user._id,
            };
            setIsLogged(true);
            localStorage.setItem("logged", JSON.stringify(userData));
            navigate("/dashboard");
          }
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const changeStateHandler = () => {
    setRegisterResponse(null);
    setIsResponseOk(null);
  };

  useEffect(() => {
    if (isLogged) {
      setIsLogged(true);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        isLogged,
        setIsLogged,
        onLogout: logoutHandler,
        onSignUp: signUpHandler,
        onSignIn: signInHandler,
        responseOk: responseOk,
        registerResponse: registerResponse,
        changeStateHandler,
        errorMessage,
        isLoading,
        hasError,
        visualLoading,
        visualLoadingHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
