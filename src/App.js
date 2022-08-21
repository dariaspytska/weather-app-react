import './App.css';
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />
        <p> Open-sourced {" "}
        <a
          href="https://github.com/dariaspytska/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          on GitHub
        </a>
        </p>
      </div>
    </div>
  );
}

