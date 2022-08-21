import React from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
let [load, setLoad] = useState(false);
let [forecast, setForecast] = useState();

 useEffect(() => {
  setLoad(false);
 }, [props.coordinates]);

function handleResponse(resp) {
  setForecast(resp.data.daily);
  setLoad(true); 

}
console.log(forecast);
if(load) {
   return (
     <div className="WeatherForecast">
       <div className="row">
        {forecast.map(function(dailyForecast, index){
          if(index < 5) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          }
        })}
       </div>
     </div>
   );

} else {
   let apiKey = "9eac88714aa707593c33f048a9d7da34";
   let long = props.coordinates.lon;
   let lati = props.coordinates.lat;
   let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${long}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);

   return null;
}
}
