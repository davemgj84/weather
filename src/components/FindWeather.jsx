import React, { useState } from "react";
import axios from "axios";
import "../styles/FindWeather.scss";
import "../styles/responsive/FindWeather-resp.scss";
import CurrentWeather from "./CurrentWeather";
import ErrorComponent from "./ErrorComponent";

const FindWeather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);

  const handleRequest = (evt) => {
    evt.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${process.env.REACT_APP_API}`
      )
      .then((response) => {
        console.log(response.statusText);
        if (!response.statusCheck === "OK") {
          throw Error("Sorry, we could not fetch that data");
        }
        const data = {
          city: response.data.name,
          country: response.data.sys.country,
          conditions: response.data.weather[0].main,
          temperature: Math.round(response.data.main.temp),
          feelsLike: Math.round(response.data.main.feels_like),
          low: Math.round(response.data.main.temp_min),
          high: Math.round(response.data.main.feels_like),
        };
        setQuery("");
        setWeather(data);
        setError(null);
        setShow(true);
      })
      .catch((err) => {
        setError(err.message);
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
          {error && <ErrorComponent />}
        </div>
        {weather && <CurrentWeather show={show} weather={weather} />}
        {!show && <div className="placeholder"></div>}
      </section>
    </>
  );
};

export default FindWeather;
