import { useFetch } from "../hooks/useFetch";

const UsersList = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p className="p-4">Loading users...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="p-4 m-4 bg-yellow-100 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-2">Users List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id} className="border-b py-1">{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
