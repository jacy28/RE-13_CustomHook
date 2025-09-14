import { useTitle } from "../hooks/useTitle";

const PageTitle = () => {
  useTitle("Home Page");

  return (
    <div className="p-4 m-4 bg-yellow-100 rounded-2xl shadow-lg text-center">
      <h2 className="text-xl font-bold">Check the browser tab title!</h2>
    </div>
  );
};

export default PageTitle;
