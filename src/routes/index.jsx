import { Route, Routes, Navigate } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { useContext } from "react";
import { UserContext } from "../store/user-context";
const RoutesManager = () => {
  const { isLogged } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={!isLogged ? <Navigate to="/register" /> : <Dashboard />}
      />
    </Routes>
  );
};

export default RoutesManager;
