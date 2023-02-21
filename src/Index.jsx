import { useState } from "react";
import Clock from "../pages/Clock/Clock";
import "./index.css";

function Index() {
  const [time, setTime] = useState(0);
  const [rounded, setRounded] = useState(0);

  return (
    <div className="Index">
      <header>
        <div className="line"></div>
        <img src="./logo.svg" alt="logo" className="logo" />
        <div className="line"></div>
      </header>
      <div className="container">
        <h3 style={{ fontWeight: 600 }}> Digital Clock </h3>
      </div>
      <Clock rounded={rounded} />
      <div className="custom__menu">
        <div className="custom__color custom__items">
          <img src="./text.svg" alt="text color" className="input__color" />
          <input
            type="text"
            name="color_value"
            id="color_value"
            placeholder="#212121"
          />
        </div>
        <div className="custom__rounded custom__items">
          <img src="./rounded.svg" alt="rounded logo" />
          <input
            type="range"
            name="input__rounded"
            id="input__rounded"
            min="0"
            max="30"
            onChange={() =>
              setRounded(document.getElementById("input__rounded").value)
            }
            className="range__border"
          />
        </div>
        <div className="custom__border custom__items">
          <img src="./border.svg" alt="border logo" className="border__color" />
          <input
            type="text"
            name="border__range"
            id="border__range"
            placeholder="#212121"
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
