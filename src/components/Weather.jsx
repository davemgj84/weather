import React from "react";
import "../styles/Weather.scss";

const Weather = () => {
  return (
    <>
      <main>
        <h1>Thinkific</h1>
        <div className="search">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for a city..."
          />
        </div>
        <h2>Weather</h2>
      </main>
    </>
  );
};

export default Weather;
