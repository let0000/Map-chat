import React from "react";
import KakaoMap from "../components/KakaoMap";
import MobileChat from "../components/MobileChat";
import MobileLocation from "../components/MobileLocation";
import MobileWeather from "../components/MobileWeather";
import "./Mobile.css";

export default function Mobile() {
  return (
    <div>
      <KakaoMap />
      <MobileLocation />
      <MobileWeather />
      <MobileChat />
    </div>
  );
}
