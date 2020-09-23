import React from "react";
import "./loading-bar.css";

const LoadingBar = ({ area }) => (
  <div className="orange-bar" style={{ "--bar": `${area}%` }}>
    <div className="bar"></div>
  </div>
);

export default LoadingBar;
