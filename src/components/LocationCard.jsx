import { useGeolocation } from "../hooks/useGeolocation";

const LocationCard = () => {
  const { latitude, longitude, error } = useGeolocation();

  return (
    <div className="p-4 m-4 bg-blue-100 rounded-xl shadow-lg text-center">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <h2 className="text-lg font-bold">Coordinates:</h2>
          <p>{latitude ? `${latitude}, ${longitude}` : "Fetching..."}</p>
        </>
      )}
    </div>
  );
};

export default LocationCard;
