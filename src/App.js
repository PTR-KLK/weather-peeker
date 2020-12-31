import React, { useState } from "react";
import Main from "./components/main";
import Header from "./components/header";
import useFetch from "./components/useFetch";
import useLocation from "./components/useLocation";

function App() {
  const [formValue, setFormValue] = useState("");
  const [city, setCity] = useState("Warsaw");
  const [tracking, setTracking] = useState(false);
  const [latitude, longitude] = useLocation();
  const location = tracking ? `lat=${latitude}&lon=${longitude}` : `q=${city}`;

  const APP_ID = process.env.REACT_APP_ID;
  const URL = `https://api.openweathermap.org/data/2.5/weather?${location}&units=metric&appid=${APP_ID}`;

  const fetchData = useFetch(URL);

  const onSubmitCity = (event) => {
    setTracking(false);
    setCity(formValue);
    event.preventDefault();
  };

  const onChangeFormValue = (e) => {
    setFormValue(e.target.value);
  };

  const toggleTracking = () => {
    setTracking(!tracking);
  };

  return (
    <div className="App">
      <Header
        formValue={formValue}
        onChangeFormValue={onChangeFormValue}
        onSubmitCity={onSubmitCity}
        toggleTracking={toggleTracking}
        tracking={tracking}
      />
      <Main fetchData={fetchData} />
    </div>
  );
}

export default App;
