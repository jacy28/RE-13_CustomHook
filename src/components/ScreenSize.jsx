import { useMediaQuery } from "../hooks/useMediaQuery";

const ScreenSize = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="p-4 m-4 bg-green-100 rounded-2xl shadow-lg text-center">
      <h2 className="text-xl font-bold">Screen Type:</h2>
      <p>{isMobile ? "Mobile 📱" : "Desktop 💻"}</p>
    </div>
  );
};

export default ScreenSize;
