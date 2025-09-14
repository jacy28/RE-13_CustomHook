import { useGeolocation } from "../hooks/useGeolocation";

const ShowLocation = () => {
  const { latitude, longitude, error } = useGeolocation();

  return (
    <div className="p-4 m-4 bg-yellow-100 rounded-2xl shadow-lg text-center">
      <h2 className="text-xl font-bold mb-2">Your Location</h2>
      {error && <p className="text-red-500">{error}</p>}
      <p>Latitude: {latitude ?? "..."}</p>
      <p>Longitude: {longitude ?? "..."}</p>
    </div>
  );
};

export default ShowLocation;
