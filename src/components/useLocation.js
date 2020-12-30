import { useState, useEffect } from "react";

function useLocation() {
  const [coords, setCoords] = useState([]);
  const [success, setSuccess] = useState(false);

  const succcess = (position) => {
    setCoords([position.coords.latitude, position.coords.longitude]);
    setSuccess(true);
  }

  const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(succcess,error);
  }, [coords]);

  return [success, coords];
}

export default useLocation;
