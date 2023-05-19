import { useEffect, useRef, useState } from "react";

const Counter = () => {
  // const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleClick = () => {
    // setCount((count) => count + 1);
    countRef.current++;
    console.log(countRef.current);
  };
  console.log("render");
  useEffect(() => {
    handleClick();
  }, []);
  return (
    <div>
      <h1>{}</h1>
      <button
        onClick={handleClick}
        className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
      >
        Click me
      </button>
    </div>
  );
};

export default Counter;
