import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          setData(data);
        }
        if (data.cod === 401) {
          setError(true);
          console.error("Error:", data.message);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(true);
        setLoading(false);
      });
  }, [url]);

  return [data, loading, error];
}

export default useFetch;
