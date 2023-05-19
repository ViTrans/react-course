import { useState } from "react";

function Form() {
  //   const [fullname, setFullname] = useState("");
  //   const [email, setEmail] = useState("");
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    compled: false,
  });

  const handleInputChange = (e) => {
    console.log(e.target.type);
    // setValues({
    //   ...values,
    //   [e.target.name]: e.target.value,
    // });
    if (e.target.type === "checkbox") {
      setValues({
        ...values,
        [e.target.name]: e.target.checked,
      });
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div>
      <div className="flex ga-x-3">
        <input
          onChange={handleInputChange}
          name="fullname"
          type="text"
          placeholder="Enter your fullname"
          className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent"
        />
        <input
          onChange={handleInputChange}
          name="email"
          type="email"
          placeholder="Enter your email"
          className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent"
        />
        <input type="checkbox" name="compled" onChange={handleInputChange} />
      </div>
    </div>
  );
}

export default Form;
