import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather(props) {
  const [weather, setWeather] = useState({ready : false});
  function handleResponse(resp) {
    console.log(resp.data);
    setWeather({
      ready : true,
      tempetature: resp.data.main.temp,
      humidity: resp.data.main.humidity,
      description: resp.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      wind: Math.round(resp.data.wind.speed),
      date: "Saturday 07:00",
      city: resp.data.name,
    });
    
  }

  if(weather.ready) {
    return (
      <div className="Weather">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control form"
            placeholder="Enter a city..."
            aria-label="City"
            aria-describedby="basic-addon2"
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
        <div className="row">
          <div className="col-6">
            <img
              src={weather.iconUrl}
              alt={weather.description}
            ></img>
            <span className="temp">{Math.round(weather.tempetature)}</span>{" "}
            <span className="unit">°C</span>
            <ul>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind} km/h</li>
            </ul>
          </div>

          <div className="col-6">
            <h1>{weather.city}</h1>
            <ul className="right">
              <li>{weather.date}</li>
              <li className="text-capitalize">{weather.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );

  } else {
      const apiKey = "9eac88714aa707593c33f048a9d7da34";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
      return "Loading...";
  }

   
}