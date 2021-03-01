import React, { useState } from "react";
import axios from "axios";
import currentDate from "../helpers/currentDate";
import show from "../helpers/show";
import "../styles/Weather.scss";

const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${process.env.REACT_APP_API}`
        )
        .then((response) => {
          const city = response.data.name;
          const country = response.data.sys.country;
          const conditions = response.data.weather[0].main;
          const temperature = Math.round(response.data.main.temp);
          const low = Math.round(response.data.main.temp_min);
          const high = Math.round(response.data.main.temp_max);
          const feelsLike = Math.round(response.data.main.feels_like);
          const results = {
            city,
            country,
            conditions,
            temperature,
            feelsLike,
            low,
            high,
          };
          setQuery("");
          setWeather(results);
        })
        .catch((err) => {
          console.log("Could not find current weather data", err);
        });
    }
  };

  return (
    <>
      <section>
        <div className="header-search">
          <h1>Current</h1>
          <h2>Weather</h2>
          <div className="search">
            <input
              type="text"
              className="search-bar"
              placeholder="Search for a city..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
        </div>
        {show(weather.city)}
        <div id="info-container">
          <div className="location-box">
            <div className="location">
              {weather.city}, {weather.country}
            </div>
            <div className="date">{currentDate(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">{weather.temperature}°c</div>
            <div className="weather">{weather.conditions}</div>
            <div className="feels-like">Feels Like {weather.feelsLike}°c</div>
            <div className="high-low">
              {weather.high}°c / {weather.low}°c
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Weather;
