import React, { useEffect, useState } from "react";
import KakaoMap from "../components/KakaoMap";
import "./Home.css";
import axios from "axios";

const API_KEY = "349ef8676ac1390f954d64434cb8b94c";

export default function Home() {
  const [locationError, setLocationError] = useState(false);
  const [location, setLocation] = useState({
    lat: null,
    lon: null,
  });
  const [address, setAddress] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // 위치 정보 가져오기에 성공한 경우
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setLocationError(false);

        axios
          .get(
            `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${position.coords.longitude}&y=${position.coords.latitude}&input_coord=WGS84`,
            {
              headers: { Authorization: `KakaoAK ${API_KEY}` },
            }
          )
          .then((res) => {
            console.log(res.data);
            setAddress(res.data.documents[0].address.address_name);
          })
          .catch((err) => {
            console.log(err);
            setAddress("");
          });
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
          <p>주소 : {address}</p>
        </div>
      )}

      <KakaoMap />
    </div>
  );
}
