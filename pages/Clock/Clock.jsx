import { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [greetingsTime, setGreetingsTime] = useState("");
  const [dayName, setDayName] = useState("");
  const [dayNumber, setDayNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [currHours, setCurrHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [second, setSecond] = useState("");
  const [amPm, setAmPm] = useState("");

  const [txtColor, setTxtColor] = useState("#212121");
  const [borderColor, setBorderColor] = useState("#212121");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    setCurrHours(hours < 10 ? `0${hours}` : `${hours}`);
    setMinutes(minutes < 10 ? `0${minutes}` : `${minutes}`);
    setSecond(seconds < 10 ? `0${seconds}` : `${seconds}`);
    setAmPm(hours >= 12 ? "PM" : "AM");
    setGreetingsTime(
      hours >= 0 && hours < 12
        ? "Good morning"
        : hours >= 12 && hours < 17
        ? "Good afternoon"
        : hours >= 17 && hours < 24
        ? "Good evening"
        : "Good night"
    );
    setDayName(time.toLocaleString("default", { weekday: "long" }));
    setDayNumber(time.getDate());
    setMonth(time.toLocaleString("default", { month: "long" }));
    setYear(time.getFullYear());
  }, [time]);

  useEffect(() => {
    const txtColorParam = new URLSearchParams(window.location.search).get(
      "txtColor"
    );
    const borderColorParam = new URLSearchParams(window.location.search).get(
      "borderColor"
    );

    if (txtColorParam || borderColorParam) {
      setTxtColor(txtColorParam);
      setBorderColor(borderColorParam);
    }
  }, []);

  return (
    <div
      className="container"
      style={{
        color: txtColor,
        borderColor: borderColor,
        boxShadow: `6px 6px ${borderColor}`,
        borderRadius: "8px",
      }}
    >
      <div className="inner_text">
        <h1>{greetingsTime}</h1>
        <h2>
          {dayName}, {dayNumber} {month} {year}
        </h2>
        <h3>
          {currHours} : {minutes} : {second} {amPm}
        </h3>
      </div>
    </div>
  );
};

export default Clock;
