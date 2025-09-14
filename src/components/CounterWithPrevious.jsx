import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

const CounterWithPrevious = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div className="p-4 m-4 bg-blue-100 shadow-lg rounded-2xl text-center">
      <h2 className="text-xl font-bold mb-2">Counter</h2>
      <p>Current: {count}</p>
      <p>Previous: {prevCount ?? "-"}</p>
      <div className="space-x-2 mt-2">
        <button onClick={() => setCount(count + 1)} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Increment</button>
        <button onClick={() => setCount(count - 1)} className="px-4 py-2 bg-red-500 text-white rounded-lg">Decrement</button>
      </div>
    </div>
  );
};

export default CounterWithPrevious;
