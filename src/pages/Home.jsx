import React, { useEffect, useState } from "react";
import KakaoMap from "../components/KakaoMap";
import "./Home.css";

export default function Home() {
  const [locationError, setLocationError] = useState(false);
  const [location, setLocation] = useState({
    lat: null,
    lon: null,
  });

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // 위치 정보 가져오기에 성공한 경우
        console.log(position);
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setLocationError(false);
      },
      (error) => {
        // 위치 정보 가져오기에 실패한 경우
        console.log(error);
        setLocationError(true);
      }
    );
  }, [locationError]);

  return (
    <div>
      {locationError ? (
        <p>
          위치 정보가 활성화되어 있지 않습니다. 위치정보를 활성화 한 후
          새로고침해주세요
        </p>
      ) : (
        <div>
          <p>Lat: {location.lat}</p>
          <p>Lat: {location.lon}</p>
        </div>
      )}

      <KakaoMap />
    </div>
  );
}
