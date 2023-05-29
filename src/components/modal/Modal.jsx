import ReactDOM from "react-dom";
import PropTypes from "prop-types";
const Modal = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-5 ${
        open ? "" : "hidden"
      }`}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={handleClose}
      ></div>
      <div className="relative bg-white rounded-lg w-[500px]  p-3">
        <span
          className="absolute top-0 right-0 cursor-pointer"
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="email" className="text-sm cursor-pointer">
            Email address
          </label>
          <input
            type="text"
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
          />
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="password" className="text-sm cursor-pointer">
            Password
          </label>
          <input
            type="password"
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
          />
        </div>
        <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px] w-full">
          Login
        </button>
      </div>
    </div>,
    document.querySelector("body")
  );
};
Modal.PropTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default Modal;
