import { useState } from "react";
import { useClipboard } from "../hooks/useClipboard";

const CopyInput = () => {
  const [text, setText] = useState("");
  const { copied, copy } = useClipboard();

  return (
    <div className="p-4 m-4 bg-purple-100 rounded-2xl shadow-lg text-center">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type something" className="px-3 py-2 border rounded-lg mb-2"/>
      <br />
      <button onClick={() => copy(text)} className="px-4 py-2 bg-purple-500 text-white rounded-lg">Copy</button>
      {copied && <p className="mt-2 text-green-500">Copied!</p>}
    </div>
  );
};

export default CopyInput;
