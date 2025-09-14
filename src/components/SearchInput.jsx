import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // You could use debouncedSearchTerm to fetch API
  const handleChange = (e) => setSearchTerm(e.target.value);

  return (
    <div className="p-4 m-4 bg-indigo-100 shadow-lg rounded-2xl text-center">
      <h2 className="text-xl font-bold mb-2">Debounced Search</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Type to search..."
        className="px-3 py-2 border rounded-lg w-64"
      />
      <p className="mt-2">Debounced Value: {debouncedSearchTerm}</p>
    </div>
  );
};

export default SearchInput;
