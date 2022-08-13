import React from "react";
import "./Weather.css";
export default function Weather() {
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
             src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
             alt="Mostly Cloudy"
           ></img>
           <span className="temp">6</span> <span className="unit">°C</span>
           <ul>
             <li>Precipitation: 1%</li>
             <li>Humidity: 51%</li>
             <li>Wind: 8 km/h</li>
           </ul>
         </div>

         <div className="col-6">
           <h1>New York</h1>
           <ul className="right">
             <li>Friday: 4:00</li>
             <li>Mostly cloudy</li>
           </ul>
         </div>
       </div>
     </div>
   );
}