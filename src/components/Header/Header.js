import React from "react";
import "./header.css";

const Header = ({ amountNeeded }) => (
  <div className="header-container">
    <h3>{`$${amountNeeded} still needed for this project`}</h3>
  </div>
);

export default Header;
