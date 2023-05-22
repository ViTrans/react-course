import { useEffect, useRef } from "react";

const Input = () => {
  const inputRef = useRef(null);
  const boxRef = useRef(null);
  const handleChangeColor = () => {
    boxRef.current.style.backgroundColor = "red";
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your content"
        className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent focus:border-blue-500"
      />
      <div ref={boxRef} className="box w-[50px] h-[50px] bg-slate-500"></div>
      <button
        onClick={handleChangeColor}
        className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
      >
        change color
      </button>
    </div>
  );
};

export default Input;
