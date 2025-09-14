import { useState } from "react";

export const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  // onChange handler for input elements
  const onChange = (e) => {
    setValue(e.target.value);
  };

  // reset function
  const reset = () => setValue(initialValue);

  return { value, onChange, reset };
};
