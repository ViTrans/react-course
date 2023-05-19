import { useRef, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);
  const handleStart = () => {
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  return (
    <div>
      <h1>Timer : {time}</h1>
      <div className="flex gap-x-3">
        <button
          onClick={handleStart}
          className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
