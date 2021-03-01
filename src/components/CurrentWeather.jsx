import React from "react";
import currentDate from "../helpers/currentDate";
import "../styles/CurrentWeather.scss";
import "../styles/responsive/CurrentWeather-resp.scss";

const CurrentWeather = (props) => {
  if (props.show) {
    return (
      <div id="info-container">
        <div className="location-box">
          <div className="location">
            {props.city}, {props.country}
          </div>
          <div className="date">{currentDate(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">{props.temperature}°c</div>
          <div className="weather">{props.conditions}</div>
          <div className="feels-like">Feels Like {props.feelsLike}°c</div>
          <div className="high-low">
            {props.high}°c / {props.low}°c
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="placeholder"></div>;
  }
};

export default CurrentWeather;
