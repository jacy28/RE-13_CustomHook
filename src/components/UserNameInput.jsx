import { useLocalStorage } from "../hooks/useLocalStorage";

const UsernameInput = () => {
  const [username, setUsername] = useLocalStorage("username", "");

  return (
    <div className="p-4 m-4 bg-green-100 shadow-lg rounded-2xl text-center">
      <h2 className="text-xl font-bold mb-2">Welcome {username || "Guest"} 👋</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your name"
        className="px-3 py-2 border rounded-lg"
      />
    </div>
  );
};

export default UsernameInput;
