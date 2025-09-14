import { useOnlineStatus } from "../hooks/useOnlineStatus";

const StatusBanner = () => {
  const isOnline = useOnlineStatus();

  return (
    <div className={`p-4 m-4 rounded-lg shadow-md text-center ${isOnline ? "bg-blue-200" : "bg-gray-400"}`}>
      <p>{isOnline ? "You are connected!" : "You are offline!"}</p>
    </div>
  );
};

export default StatusBanner;
