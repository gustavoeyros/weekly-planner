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

  return (
    <UserContext.Provider value={{ userInput, setUserInput }}>
      {children}
    </UserContext.Provider>
  );
};
