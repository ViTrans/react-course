import { useState } from "react";

export default function useHandleChange(initialvalues) {
  const [values, setValues] = useState({ initialvalues });
  const handleInputChange = (e) => {
    const type = e.target.type;
    setValues({
      ...values,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return { values, handleInputChange };
}
