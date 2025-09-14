import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  // 1. Read from localStorage safely
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    if (!storedValue) return initialValue;

    try {
      return JSON.parse(storedValue); // parse if valid JSON
    } catch {
      return storedValue; // fallback to raw string
    }
  });

  // 2. Setter that updates both state and localStorage
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
};
