import { AuthContext } from "../contexts/AuthContext.jsx";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";

const PublicRoute = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? <Navigate to="/dashboard" replace={true} /> : <Outlet />;
};

export default PublicRoute;
