import './App.css';
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
     <Weather defaultCity="Tokyo"/>
     <p> Created by Daria Spytska and is {" "}
     <a href="https://github.com/dariaspytska/weather-app-react" target="_blank" rel="noreferrer">open-sourced on GitHub</a>
     </p>
     </div>
    </div>
  );
}

