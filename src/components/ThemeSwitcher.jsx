import { useTheme } from "../hooks/useTheme";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`p-4 m-4 rounded-2xl shadow-lg text-center ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}>
      <h2 className="text-xl font-bold mb-2">Current Theme: {theme}</h2>
      <button onClick={toggleTheme} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
