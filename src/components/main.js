import React from "react";
import useFetch from "./useFetch";
import Info from "./info";

function Main() {
  const APP_ID = process.env.REACT_APP_ID;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=Gdansk&units=metric&appid=${APP_ID}`;

  const [data, loading, error] = useFetch(URL);

  return (
    <main>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Something went wrong</p>
      ) : (
        <Info data={data} />
      )}
    </main>
  );
}

export default Main;
