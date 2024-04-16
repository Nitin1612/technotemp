/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const GoogleMapsWidget = ({
  className,
  zoomControlsClassName,
  sateliteClassName,
  buttonClassName,
  pinClassName,
  pin = "https://c.animaapp.com/Og8BJBl1/img/pin.svg",
}) => {
  return (
    <div className={`google-maps-widget ${className}`}>
      <div className={`zoom-controls ${zoomControlsClassName}`}>
        <img
          className="p-lus"
          alt="P lus"
          src="https://c.animaapp.com/Og8BJBl1/img/plus-1.svg"
        />
        <img
          className="minus"
          alt="Minus"
          src="https://c.animaapp.com/Og8BJBl1/img/minus-1.svg"
        />
        <div className="separator" />
      </div>
      <div className={`satelite ${sateliteClassName}`} />
      <button className={`button ${buttonClassName}`}>
        <div className="text-wrapper">View larger map</div>
      </button>
      <img className={`pin ${pinClassName}`} alt="Pin" src={pin} />
    </div>
  );
};

GoogleMapsWidget.propTypes = {
  pin: PropTypes.string,
};
