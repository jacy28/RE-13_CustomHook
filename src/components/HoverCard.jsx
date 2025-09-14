import { useHover } from "../hooks/useHover";

const HoverCard = () => {
  const [isHovered, ref] = useHover();

  return (
    <div
      ref={ref}
      className={`p-4 m-4 border rounded-lg shadow-md text-center ${
        isHovered ? "bg-green-500 text-white" : "bg-green-100 text-black"
      }`}
    >
      {isHovered ? "Mouse is over me!" : "Move your mouse here"}
    </div>
  );
};

export default HoverCard;
