import { useMediaQuery } from "../hooks/useMediaQuery";

const ResponsiveBox = () => {
  const isSmall = useMediaQuery("(max-width: 500px)");

  return (
    <div className={`p-6 m-4 rounded-xl shadow-lg text-center ${isSmall ? "bg-red-200" : "bg-red-500 text-white"}`}>
      {isSmall ? "Small screen" : "Large screen"}
    </div>
  );
};

export default ResponsiveBox;
