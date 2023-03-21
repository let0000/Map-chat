import React from "react";
import { useSelector } from "react-redux";
import {
  selectIcon,
  selectTemp,
  selectWeather,
} from "../features/weatherSlice";
import "./Weather.css";

export default function Weather() {
  const temp = useSelector(selectTemp);
  const icon = useSelector(selectIcon);
  const weather = useSelector(selectWeather);

  return (
    <div className="weather">
      <div className="weather_header">
        {temp ? (
          <div className="weather_temp">
            <p>
              <img
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="날씨 이미지"
              />
              {Math.round(((temp - 273.15) * 10) / 10)} °
              <small>{weather}</small>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
