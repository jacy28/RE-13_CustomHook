import { useInput } from "../hooks/useInput";

const NameForm = () => {
  const { value: name, onChange, reset } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}!`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 m-4 bg-yellow-100 shadow-lg rounded-2xl text-center">
      <input
        type="text"
        value={name}
        onChange={onChange}
        placeholder="Enter your name"
        className="px-3 py-2 border rounded-lg mb-2"
      />
      <br />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Submit
      </button>
    </form>
  );
};

export default NameForm;
