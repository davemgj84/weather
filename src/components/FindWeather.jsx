import React, { useState } from "react";
import axios from "axios";
import "../styles/FindWeather.scss";
import "../styles/responsive/FindWeather-resp.scss";
import CurrentWeather from "./CurrentWeather";

const FindWeather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [show, setShow] = useState(false);

  const handleRequest = (evt) => {
    evt.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${process.env.REACT_APP_API}`
      )
      .then((response) => {
        const results = {
          city: response.data.name,
          country: response.data.sys.country,
          conditions: response.data.weather[0].main,
          temperature: Math.round(response.data.main.temp),
          feelsLike: Math.round(response.data.main.feels_like),
          low: Math.round(response.data.main.temp_min),
          high: Math.round(response.data.main.feels_like),
        };
        setQuery("");
        setWeather(results);
        setShow(true);
      })
      .catch((err) => {
        console.log(console.log("Could not find current weather data"), err);
      });
  };

  return (
    <>
      <section className="weather-app">
        <div className="header-search">
          <h1>Current</h1>
          <h2>Weather</h2>
          <form className="search">
            <input
              className="search-bar"
              type="text"
              placeholder="Search for a city..."
              value={query}
              onChange={(evt) => setQuery(evt.target.value)}
            />
            <button onClick={(evt) => handleRequest(evt)}>
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        <CurrentWeather
          show={show}
          setShow={setShow}
          city={weather.city}
          country={weather.country}
          temperature={weather.temperature}
          conditions={weather.conditions}
          feelsLike={weather.feelsLike}
          high={weather.high}
          low={weather.low}
        />
      </section>
    </>
  );
};

export default FindWeather;