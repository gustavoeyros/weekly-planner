import React from "react";
import { useState } from "react";

export const UserContext = React.createContext({});

export const UserProvider = ({ children }) => {
  const [userInput, setUserInput] = useState({
    fullName: "",
    birth: "",
    country: "",
    city: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isLogged, setIsLogged] = useState(false);

  return (
    <UserContext.Provider
      value={{ userInput, setUserInput, isLogged, setIsLogged }}
    >
      {children}
    </UserContext.Provider>
  );
};
