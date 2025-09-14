import { useHover } from "../hooks/useHover";

const HoverBox = () => {
  const [isHovered, ref] = useHover();

  return (
    <div
      ref={ref}
      className={`p-6 m-4 rounded-xl shadow-lg text-center cursor-pointer ${
        isHovered ? "bg-blue-500 text-white" : "bg-blue-100 text-black"
      }`}
    >
      {isHovered ? "Hovered ✅" : "Hover me!"}
    </div>
  );
};

export default HoverBox;
