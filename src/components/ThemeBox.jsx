import { useTheme } from "../hooks/useTheme";

const ThemeBox = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`p-6 m-4 rounded-xl shadow-lg text-center ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <p>This box follows the current theme</p>
      <button onClick={toggleTheme} className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg">Toggle Theme</button>
    </div>
  );
};

export default ThemeBox;
