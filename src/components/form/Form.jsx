import { useState } from "react";
import useHandleChange from "../hooks/useHandleChange";

function Form() {
  const { values, handleInputChange } = useHandleChange({
    fullname: "",
    email: "",
    compled: false,
  });
  const [nameError, setNameError] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (values.fullname === "" || values.email === "") {
      setNameError("vui long nhap day du thong tin");
    } else {
      setNameError("");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmitForm}
        className="flex gap-x-3"
        autoComplete="off"
      >
        <div className="flex flex-col gap-y-3">
          <input
            onChange={handleInputChange}
            name="fullname"
            type="text"
            placeholder="Enter your fullname"
            className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent"
          />
          {nameError && <p className="text-red-500">{nameError}</p>}
        </div>
        <div>
          <input
            onChange={handleInputChange}
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent"
          />
          {nameError && <p className="text-red-500">{nameError}</p>}
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
