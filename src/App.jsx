import { useState } from "react";
import "./App.css";
import Modal from "./components/modal/Modal";

function App() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
      >
        Show modal
      </button>
      <div className="relative z-10">
        <Modal open={open} handleClose={handleClose}></Modal>
      </div>
      <div className="relative ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        asperiores obcaecati tempore! Quibusdam corrupti numquam odio expedita
        quo aut dicta quas odit reprehenderit dolores? Fugit iure deleniti nihil
        dicta cumque!
      </div>
    </div>
  );
}

export default App;
