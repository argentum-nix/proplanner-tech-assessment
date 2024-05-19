import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const alertTypes = {
  error: {
    color: "bg-red-100",
    text: "text-red-600",
    icon: faCircleXmark,
  },
  warning: {
    color: "bg-orange-100",
    text: "text-orange-600",
    icon: faExclamationTriangle,
  },
};

const Alert = ({ type, header, message }) => {
  const alertType = alertTypes[type] || alertTypes.error;
  return (
    <div
      role="alert"
      className={`p-2 rounded-md ${alertType.color} ${alertType.text}`}
    >
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <FontAwesomeIcon
            icon={alertType.icon}
            className={`text-xl ${alertType.text}`}
          />
        </div>
        <div className="ml-3 flex-grow text-sm">
          <div className="my-0.5">{header}</div>
          <span className={`${alertType.text} font-light`}>{message}</span>
        </div>
      </div>
    </div>
  );
};

export default Alert;
