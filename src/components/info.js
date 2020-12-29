import React from "react";

function Info({ data }) {
  return (
    <>
      <h2>
        {data.name}, {data.sys.country}
      </h2>
      <h3>{data.weather[0].main}</h3>
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
      />
      <h4>Temperature: {data.main.temp} °C</h4>
    </>
  );
}

export default Info;
