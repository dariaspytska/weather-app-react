import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(resp) {
    console.log(resp.data);
    setWeather({
      ready: true,
      coords : resp.data.coord,
      tempetature: resp.data.main.temp,
      humidity: resp.data.main.humidity,
      description: resp.data.weather[0].description,
      icon: resp.data.weather[0].icon,
      wind: Math.round(resp.data.wind.speed),
      date: new Date(resp.data.dt * 1000),
      city: resp.data.name,
    });
  }

function search() {
  const apiKey = "9eac88714aa707593c33f048a9d7da34";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  
  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control form"
              placeholder="Enter a city..."
              aria-label="City"
              aria-describedby="basic-addon2"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </form>
        <WeatherInfo data={weather} />
        <WeatherForecast cordinates={weather.coords}/>
      </div>
    );
  } else {
  search();
  return "Loading...";
  }
}
