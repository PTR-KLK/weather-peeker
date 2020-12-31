import React from "react";

const getDate = (seconds) => new Date(seconds * 1000);
const convertDate = (string) => getDate(string).toDateString();
const convertTime = (string) => getDate(string).toTimeString().slice(0, 5);

function Info({ data }) {
  const {
    name,
    dt,
    sys,
    weather: [weather],
    main,
  } = data;

  return (
    <section className="info">
      <h2>
        {name}, {sys.country}
      </h2>
      <p>{convertDate(dt)}</p>
      <span>
        <p>Sunrise: {convertTime(sys.sunrise)}</p>
        <p>Sunset: {convertTime(sys.sunset)}</p>
      </span>
      <h3>{weather.main}</h3>
      <img
        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={weather.description}
      />
      <h3>{Math.round(main.temp)}°C</h3>
      <p>
        Min: {Math.round(main.temp_min)}°C | Max: {Math.round(main.temp_max)}°C
      </p>
      <p>Feels like: {main.feels_like}°C</p>
      <p>Pressure: {main.pressure} hPa</p>
      <p>Humidity: {main.humidity}%</p>
    </section>
  );
}

export default Info;
