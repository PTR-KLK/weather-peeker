import { useState, useEffect } from "react";

function useLocation() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const succcess = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }

  const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(succcess,error);
  }, []);

  return [latitude, longitude];
}

export default useLocation;
