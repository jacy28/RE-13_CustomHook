import useToggle from "../hooks/useToggle";

const ToggleOne = () => {
  const [isOn, toggle] = useToggle(false);

  return (
    <div className="p-4 m-4 bg-purple-100 shadow-lg rounded-2xl text-center">
      <h2 className="text-xl font-bold mb-2">Toggle One: {isOn ? "✅ ON" : "❌ OFF"}</h2>
      <button 
        onClick={toggle} 
        className="px-4 py-2 bg-purple-500 text-white rounded-lg"
      >
        Toggle
      </button>
    </div>
  );
};

export default ToggleOne;
