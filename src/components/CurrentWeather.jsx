import React from "react";
import currentDate from "../helpers/currentDate";
import "../styles/CurrentWeather.scss";
import "../styles/responsive/CurrentWeather-resp.scss";

const CurrentWeather = (props) => {
  const {
    city,
    country,
    temperature,
    conditions,
    feelsLike,
    high,
    low,
  } = props.weather;

  return (
    <div id="info-container">
      <div className="location-box">
        <div className="location">
          {city}, {country}
        </div>
        <div className="date">{currentDate(new Date())}</div>
      </div>
      <div className="weather-box">
        <div className="temp">{temperature}°c</div>
        <div className="weather">{conditions}</div>
        <div className="feels-like">Feels Like {feelsLike}°c</div>
        <div className="high-low">
          {high}°c / {low}°c
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
