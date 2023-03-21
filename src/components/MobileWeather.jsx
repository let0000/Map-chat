import "./MobileWeather.css";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectIcon,
  selectTemp,
  selectWeather,
} from "../features/weatherSlice";

export default function MobileWeather() {
  const temp = useSelector(selectTemp);
  const icon = useSelector(selectIcon);
  const weather = useSelector(selectWeather);

  return (
    <div className="mobileweather">
      {temp ? (
        <div className="mobileweather_header">
          <div className="mobileweather_icon">
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="날씨 이미지"
            />
          </div>
          <div className="mobileweather_temp">
            <p>
              {Math.round(((temp - 273.15) * 10) / 10)} °
              <small>{weather}</small>
            </p>
          </div>
          <div className="mobileweather_weather"></div>
        </div>
      ) : null}
    </div>
  );
}
