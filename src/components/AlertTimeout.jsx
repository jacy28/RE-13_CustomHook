import { useTimeout } from "../hooks/useTimeout";

const AlertTimeout = () => {
  useTimeout(() => alert("Hello after 3 seconds!"), 3000);

  return (
    <div className="p-4 m-4 bg-pink-100 rounded-2xl shadow-lg text-center">
      <h2 className="text-xl font-bold">Alert will show in 3 seconds</h2>
    </div>
  );
};

export default AlertTimeout;
