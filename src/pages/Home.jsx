import React from "react";
import KakaoMap from "../components/KakaoMap";
import "./Home.css";
import Location from "../components/Location";
import Weather from "../components/Weather";
import Chat from "../components/Chat";

export default function Home() {
  return (
    <div>
      <KakaoMap />
      <Location />
      <Weather />
      <Chat />
    </div>
  );
}
