import { useState } from "react";
import { useTimeout } from "../hooks/useTimeout";

const MessageTimeout = () => {
  const [message, setMessage] = useState("Waiting...");

  useTimeout(() => setMessage("Timeout finished!"), 2000);

  return (
    <div className="p-4 m-4 bg-green-100 rounded-2xl shadow-lg text-center">
      <h2 className="text-xl font-bold">{message}</h2>
    </div>
  );
};

export default MessageTimeout;
