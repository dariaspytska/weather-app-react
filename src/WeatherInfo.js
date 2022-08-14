import React from "react";
import FormatedDate from "./FormatedDate";

export default function WeatherInfo(props) {
   return (
      <div className="WeatherInfo">
         <div className="row">
          <div className="col-6">
            <img src={props.data.iconUrl} alt={props.data.description}></img>
            <span className="temp">{Math.round(props.data.tempetature)}</span>{" "}
            <span className="unit">°C</span>
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>

          <div className="col-6">
            <h1>{props.data.city}</h1>
            <ul className="right">
              <li>
                <FormatedDate date={props.data.date} />
              </li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
}