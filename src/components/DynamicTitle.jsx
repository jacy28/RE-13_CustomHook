import { useState } from "react";
import { useTitle } from "../hooks/useTitle";

const DynamicTitle = () => {
  const [page, setPage] = useState("Dashboard");
  useTitle(page);

  return (
    <div className="p-4 m-4 bg-purple-100 rounded-2xl shadow-lg text-center">
      <h2 className="text-xl font-bold mb-2">Current Page: {page}</h2>
      <button onClick={() => setPage("Dashboard")} className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">Dashboard</button>
      <button onClick={() => setPage("Profile")} className="px-4 py-2 bg-green-500 text-white rounded-lg">Profile</button>
    </div>
  );
};

export default DynamicTitle;
