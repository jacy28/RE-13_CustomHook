import { useInput } from "../hooks/useInput";

const EmailForm = () => {
  const { value: email, onChange, reset } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your email: ${email}`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 m-4 bg-green-100 shadow-lg rounded-2xl text-center">
      <input
        type="email"
        value={email}
        onChange={onChange}
        placeholder="Enter your email"
        className="px-3 py-2 border rounded-lg mb-2"
      />
      <br />
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg">
        Submit
      </button>
    </form>
  );
};

export default EmailForm;
