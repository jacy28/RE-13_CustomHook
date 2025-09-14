import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";

const DebouncedUserSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Use the debounced version of the query
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      return;
    }

    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await res.json();
        // Filter users by name matching the debounced query
        const filtered = data.filter(user =>
          user.name.toLowerCase().includes(debouncedQuery.toLowerCase())
        );
        setResults(filtered);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [debouncedQuery]);

  return (
    <div className="p-4 m-4 bg-pink-100 shadow-lg rounded-2xl text-center w-96">
      <h2 className="text-xl font-bold mb-2">Debounced User Search</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users..."
        className="px-3 py-2 border rounded-lg w-full mb-2"
      />
      {loading && <p>Loading...</p>}
      <ul>
        {results.map(user => (
          <li key={user.id} className="border-b py-1">{user.name}</li>
        ))}
      </ul>
      {debouncedQuery && results.length === 0 && !loading && <p>No users found.</p>}
    </div>
  );
};

export default DebouncedUserSearch;
