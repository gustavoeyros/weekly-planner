import React, { useEffect } from "react";
import { PropsWithChildren } from "react";
import { useState } from "react";

export const UserContext = React.createContext({});

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
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

  const logoutHandler = () => {
    localStorage.removeItem("logged");
    setIsLogged(false);
  };

  const loginHandler = () => {
    localStorage.setItem("logged", "true");
    setIsLogged(true);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
