import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";
import proPlannerLogo from "../assets/proplanner_logo.png";
const Navbar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center h-14 px-3 bg-white shadow-md">
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src={proPlannerLogo}
          className="h-8"
          alt="ProPlanner"
        />
        <span className="text-2xl font-light">ProPlanner</span>
      </div>
      <button
        onClick={logout}
        className="px-4 py-2 rounded-md bg-[#1d1e22] text-white text-sm hover:bg-gray-600 transition-colors"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
