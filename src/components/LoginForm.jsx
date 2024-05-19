import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";
import { useContext } from "react";
import Alert from "./Alert.jsx";
import constructionImg from "../assets/construction-img.jpg";
import proPlannerLogo from "../assets/proplanner_logo.png";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [isPassVisible, setPassVisible] = useState(false);
  const [showFailedLoginError, setShowFailedLoginError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPassError, setShowPassError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPassVisible(!isPassVisible);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const isValidEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email);
    setShowEmailError(!isValid);
    return isValid;
  };

  const isValidPassword = () => {
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
    const isValid = password.length >= 6 && passwordPattern.test(password);
    setShowPassError(!isValid);
    return isValid;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setShowFailedLoginError(false);
    let emailValidated = isValidEmail();
    let passValidated = isValidPassword();
    if (emailValidated && passValidated) {
      try {
        await login({ email, password });
      } catch (error) {
        setShowFailedLoginError(true);
      }
    }
  };

  return (
    <div className="bg-white shadow-md flex items-center justify-center rounded-md max-w-3xl">
      <div className="lg:w-1/2 p-12 flex flex-col justify-center items-center">
        <img className="w-14 my-2" src={proPlannerLogo} alt="ProPlanner Logo" />
        <h1 className="text-4xl font-bold text-gray-700">ProLogin</h1>
        <p className="text-sm text-gray-500 mb-6 mt-2">
          Please enter your account details.
        </p>
        <form className="flex flex-col gap-3 w-full">
          {showFailedLoginError && (
            <Alert
              header={"Login failed :("}
              message={
                "Wrong credentials or missing access rights to application"
              }
            />
          )}
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              className="p-3 rounded-md border w-full pr-10"
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleEmailChange}
              required
            />
            {showEmailError && (
              <div className="text-red-600 text-sm block font-light">
                Please provide a valid email address
              </div>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                className="p-3 rounded-md border w-full pr-10"
                type={isPassVisible ? "text" : "password"}
                name="password"
                placeholder="••••••••••••••"
                onChange={handlePasswordChange}
                required
              />
              <button
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                aria-label="Toggle password visibility"
                type="button"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={isPassVisible ? faEyeSlash : faEye} />
              </button>
            </div>
            {showPassError && (
              <div className="text-red-600 text-sm block font-light">
                The password must include both letters and numbers, and be at
                least 6 characters long
              </div>
            )}
          </div>
          <button
            aria-label="Login"
            className="p-2 mt-5 rounded-md bg-[#1d1e22] text-white"
            onClick={handleFormSubmit}
          >
            Login
          </button>
        </form>
      </div>
      <div className="w-1/2 lg:block hidden">
        <img
          className="rounded-tr-md rounded-br-md"
          src={constructionImg}
          alt="Image depicting construction workers"
        />
      </div>
    </div>
  );
};

export default LoginForm;
