import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ModalHeader = ({ onClose }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <h2 className="text-xl font-semibold">Details</h2>
        <button
          onClick={onClose}
          aria-label="Close"
          className="text-slate-400 hover:bg-gray-200 hover:cursor-pointer hover:text-[#1d1e22] hover:rounded-md p-2 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <hr></hr>
    </div>
  );
};

const ModalDataRow = ({ name, value }) => {
  return (
    <div className="px-4 py-2 flex border-b-2">
      <div className="w-1/2">
        <p className="text-gray-500 font-light">{name}</p>
      </div>
      <div className="w-1/2">
        <p>{value}</p>
      </div>
    </div>
  );
};

const DataRowModal = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-80 flex justify-center items-center rounded-md">
      <div role="dialog" className="bg-white p-5 rounded-md shadow-lg max-w-xl">
        <ModalHeader onClose={onClose} />
        <p className="font-semibold my-2">Fields:</p>
        <ModalDataRow name={"ID"} value={data.id} />
        <ModalDataRow name={"Name"} value={data.name} />
        <ModalDataRow name={"Email"} value={data.email} />
        <p className="font-semibold my-2">Body:</p>
        <div className="rounded-md bg-slate-100 px-4 py-4">
          <p className="mb-2">{data.body}</p>
        </div>
      </div>
    </div>
  );
};

export default DataRowModal;
