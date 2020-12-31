import React from "react";
import Info from "./info";

function Main({ fetchData }) {
  const [data, loading, error, errorMsg] = fetchData;

  return (
    <main className="main">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="capitalize">{errorMsg}</p>
      ) : (
        <Info data={data} />
      )}
    </main>
  );
}

export default Main;
