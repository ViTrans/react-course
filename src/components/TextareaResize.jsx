import React, { useLayoutEffect, useState } from "react";

function TextareaResize() {
  const [text, setText] = useState("abc");
  const textAreaRef = React.useRef(null);
  const [height, setHeight] = useState("auto");
  const handleChange = (e) => {
    setHeight("auto");
    setText(e.target.value);
  };
    useLayoutEffect(() => {
      setHeight(`${textAreaRef.current.scrollHeight}px`);
    }, [text]);
  return (
    <div className="p-5">
      <textarea
        ref={textAreaRef}
        id="content"
        className="w-full p-4 bg-transparent overflow-hidden border border-gray-200 max-w-[300px] rounded-lg outline-none resize-none "
        placeholder="Enter description"
        value={text}
        style={{
          height: height,
        }}
        onChange={handleChange}
      />
    </div>
  );
}

export default TextareaResize;
