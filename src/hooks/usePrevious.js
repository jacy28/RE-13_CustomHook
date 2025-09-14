import { useRef, useEffect } from "react";

export const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value; // store current value after render
  }, [value]);

  return ref.current; // previous value
};
