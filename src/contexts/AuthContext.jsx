import { useState, useEffect, createContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../services/AuthService";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const navigate = useNavigate();

  const login = async (data) => {
    try {
      await authenticateUser(data);
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", true);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const logout = async () => {
    setIsLoggedIn(false);
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      isLoggedIn,
      login,
      logout,
    }),
    [isLoggedIn]
  );

  useEffect(() => {
    if (!isLoggedIn) {
      localStorage.removeItem("isLoggedIn");
    }
  }, [isLoggedIn]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
