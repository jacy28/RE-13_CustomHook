import { useFetch } from "../hooks/useFetch";

const PostsList = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p className="p-4">Loading posts...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="p-4 m-4 bg-green-100 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-2">Posts List</h2>
      <ul>
        {data.slice(0, 10).map((post) => ( // only first 10 posts
          <li key={post.id} className="border-b py-1">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
