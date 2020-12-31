import { useState, useEffect } from "react";

const capitalized = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function useFetch(url) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setError(false);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          setData(data);
        }
        if (data.cod !== 200) {
          setError(true);
          setErrorMsg(capitalized(data.message));
          console.error("Error:", data.message);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMsg("Something went wrong");
        setError(true);
        setLoading(false);
      });
  }, [url]);

  return [data, loading, error, errorMsg];
}

export default useFetch;
