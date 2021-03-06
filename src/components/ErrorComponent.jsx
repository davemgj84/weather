import React from "react";
import "../styles/ErrorComponent.scss";
import "../styles/responsive/ErrorComponent-resp.scss";

const ErrorComponent = () => {
  return (
    <div className="error-message">
      <p>Please Enter "City" or "City, Country"</p>
    </div>
  );
};

export default ErrorComponent;
