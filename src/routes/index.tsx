import { Route, Routes, Navigate } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { useContext } from "react";
import { UserContext } from "../store/user-context";
const RoutesManager = () => {
  type loggedContext = {
    isLogged: boolean;
    changeStateHandler: () => void;
    registerResponse: boolean | null;
    errorMessage: string;
  };

  const { isLogged, changeStateHandler, registerResponse, errorMessage } =
    useContext(UserContext) as loggedContext;

  return (
    <Routes>
      <Route
        path="/register"
        element={
          <Register
            errorMessage={errorMessage}
            changeStateHandler={changeStateHandler}
            registerResponse={registerResponse}
          />
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={!isLogged ? <Navigate to="/register" /> : <Dashboard />}
      />
      <Route path="/" element={<Navigate to="/register" />} />
    </Routes>
  );
};

export default RoutesManager;
