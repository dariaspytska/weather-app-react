import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
   return (
      <div className="WeatherInfo">
         <div className="row">
          <div className="col-sm">
            <WeatherIcon code={props.data.icon} size={52}/>
            <span className="temp">{Math.round(props.data.tempetature)}</span>{" "}
            <span className="unit">°C</span>
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>

          <div className="col-sm">
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