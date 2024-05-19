import { AuthContext } from "../contexts/AuthContext.jsx";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";

const ProtectedRoute = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace={true} />;
};

export default ProtectedRoute;
