import React, { useState } from "react";
import axios from "axios";
import currentDate from "../helpers/currentDate";
import show from "../helpers/show";
import "../styles/Weather.scss";

const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  if (process.env.REACT_APP_API_BASE_URL) {
    axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
  }

  const search = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(`/api/weather/${query}`)
        .then((response) => response.data)
        .then((result) => {
          setQuery("");
          setWeather(result);
        });
    }
  };

  return (
    <>
      <main>
        <div className="header-search">
          <h1>Thinkific</h1>
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
      </main>
    </>
  );
};

export default Weather;
