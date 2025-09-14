import { useOnlineStatus } from "../hooks/useOnlineStatus";

const OnlineStatus = () => {
  const isOnline = useOnlineStatus();

  return (
    <div className={`p-4 m-4 rounded-2xl shadow-lg text-center ${isOnline ? "bg-green-200" : "bg-gray-300"}`}>
      <h2 className="text-xl font-bold">{isOnline ? "🟢 Online" : "🔴 Offline"}</h2>
    </div>
  );
};

export default OnlineStatus;
