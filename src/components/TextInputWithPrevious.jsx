import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

const TextInputWithPrevious = () => {
  const [text, setText] = useState("");
  const prevText = usePrevious(text);

  return (
    <div className="p-4 m-4 bg-purple-100 shadow-lg rounded-2xl text-center">
      <h2 className="text-xl font-bold mb-2">Text Input</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        className="px-3 py-2 border rounded-lg mb-2"
      />
      <p>Current: {text}</p>
      <p>Previous: {prevText ?? "-"}</p>
    </div>
  );
};

export default TextInputWithPrevious;
