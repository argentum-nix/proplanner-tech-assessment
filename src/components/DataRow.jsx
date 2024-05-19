import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import DataRowModal from "./DataRowModal";

const DataRow = ({ data, innerRef }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModalVisibility = () => {
    setShowModal(!showModal);
  };

  return (
    <div ref={innerRef}>
      <div className="white border-b-2 flex flex-col lg:flex-row items-center justify-between px-9 py-3">
        <div className="lg:w-1/10 mb-2 lg:mb-0 text-center lg:text-left">
          <p className="text-gray-500 font-light">{data.id}</p>
        </div>
        <div className="lg:w-2/5 mb-2 lg:mb-0 text-center lg:text-left">
          <p className="text-black">{data.name}</p>
        </div>
        <div className="lg:w-1/5 mb-2 lg:mb-0 text-center lg:text-left">
          <p className="text-black">{data.email}</p>
        </div>
        <div className="lg:w-1/6 flex justify-center lg:justify-end">
          <button
            aria-label="Show more"
            onClick={toggleModalVisibility}
            className="text-[#1ca5b8] hover:bg-gray-200 hover:cursor-pointer hover:text-[#1d1e22] hover:rounded-md p-2"
          >
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>
      </div>
      {showModal && (
        <DataRowModal data={data} onClose={toggleModalVisibility} />
      )}
    </div>
  );
};

export default DataRow;
