import React, { useEffect } from "react";
import { PropsWithChildren } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext({});

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    fullName: "",
    birth: "",
    country: "",
    city: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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

  const logoutHandler = () => {
    localStorage.removeItem("logged");
    setIsLogged(false);
  };

  const loginHandler = (token: string) => {
    localStorage.setItem("logged", token);
    setIsLogged(true);
  };

  const signUpHandler = (data: {}) => {
    fetch(`${import.meta.env.VITE_APIBaseURL}/users/sign-up`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => {
        if (res.ok) {
          setRegisterResponse(res.ok);
          //  navigate("/login");
        } else {
          setRegisterResponse(res.ok);
        }
        console.log(registerResponse);
        return res.json();
      })
      .then((data) => {
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
  }

  const signInHandler = (data: {}) => {
    fetch(`${import.meta.env.VITE_APIBaseURL}/users/sign-in`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => {
        if (res.ok) {
          setIsResponseOk(true);
          navigate("/dashboard");
        }

        console.log(responseOk);
        return res.json();
      })
      .then((data) => {
        const userData: IUserData = {
          token: data.token,
          city: data.user.city,
          country: data.user.country,
        };

        localStorage.setItem("logged", JSON.stringify(userData));
        setIsLogged(true);
      })

      .catch((error) => {
        setIsResponseOk(false);
        console.log(error);
      });
  };

  const changeStateHandler = () => {
    setRegisterResponse(null);
    console.log("Oi");
    console.log(registerResponse);
  };

  useEffect(() => {
    if (isLogged) {
      setIsLogged(true);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        userInput,
        setUserInput,
        isLogged,
        setIsLogged,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        onSignUp: signUpHandler,
        onSignIn: signInHandler,
        responseOk: responseOk,
        registerResponse: registerResponse,
        changeStateHandler,
        errorMessage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
