import useToggle from "../hooks/useToggle";

const ToggleTwo = () => {
  const [isVisible, toggle] = useToggle(true);

  return (
    <div className="p-4 m-4 bg-pink-100 shadow-lg rounded-2xl text-center">
      <h2 className="text-xl font-bold mb-2">Toggle Two</h2>
      <button 
        onClick={toggle} 
        className="px-4 py-2 bg-pink-500 text-white rounded-lg mb-2"
      >
        Show / Hide
      </button>

      {isVisible && (
        <p className="mt-2 text-gray-700">🎉 This text is visible!</p>
      )}
    </div>
  );
};

export default ToggleTwo;
