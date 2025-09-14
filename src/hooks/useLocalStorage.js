import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  // 1. Read from localStorage (only once during initialization)
  const storedValue = localStorage.getItem(key);

  const [value, setValue] = useState(
    storedValue ? JSON.parse(storedValue) : initialValue
  );

  // 2. Custom setter that updates both state and localStorage
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
};
