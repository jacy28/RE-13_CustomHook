import { useState, useEffect } from "react";

export const useGeolocation = () => {
  const [coords, setCoords] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    const watcher = navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({ latitude: position.coords.latitude, longitude: position.coords.longitude });
      },
      (err) => setError(err.message)
    );

    return () => watcher; // cleanup
  }, []);

  return { ...coords, error };
};
