import { useState } from "react";
import Clock from "../pages/Clock/Clock";

function Index() {
  const [time, setTime] = useState(0);

  return (
    <div className="Index">
      <header>
        <div className="line"></div>
        <img src="./public/logo.svg" alt="logo" className="logo" />
        <div className="line"></div>
      </header>
      <div className="container">
        <h3 style={{ fontWeight: 600 }}> Digital Clock </h3>
      </div>
      <Clock />
    </div>
  );
}

export default Index;
