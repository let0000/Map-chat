import React, { useEffect, useState } from "react";
import KakaoMap from "../components/KakaoMap";
import "./Home.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLocationInfo } from "../features/locationSlice";
import { setWeatherInfo } from "../features/weatherSlice";

const KAKAO_API_KEY = "349ef8676ac1390f954d64434cb8b94c";
const WEATHER_API_KEY = "3d9dc8ab0aeba4bb77554214de6d1ecb";

export default function Home() {
  const [locationError, setLocationError] = useState(false);
  const [location, setLocation] = useState({
    lat: null,
    lon: null,
  });
  const [address, setAddress] = useState("");
  const [weather, setWeather] = useState({
    temp: null,
    weather: null,
    icon: null,
  });

  const dispatch = useDispatch();

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
              headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` },
            }
          )
          .then((res) => {
            console.log(res.data);
            setAddress(res.data.documents[0].address.address_name);
            dispatch(
              setLocationInfo({
                lat: position.coords.latitude,
                lon: position.coords.longitude,
                address: res.data.documents[0].address.address_name,
              })
            );
          })
          .catch((err) => {
            console.log(err);
            setAddress("");
          });

        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${WEATHER_API_KEY}`
          )
          .then((res) => {
            console.log(res.data);
            setWeather({
              temp: res.data.main.temp,
              weather: res.data.weather[0].main,
              icon: res.data.weather[0].icon,
            });
            dispatch(
              setWeatherInfo({
                temp: res.data.main.temp,
                weather: res.data.weather[0].main,
                icon: res.data.weather[0].icon,
              })
            );
          })
          .catch((err) => {
            console.log(err);
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
          <p>Lon: {location.lon}</p>
          <p>주소 : {address}</p>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt="날씨 이미지"
            />
            <p>{weather.weather}</p>
            <p>{Math.round(((weather.temp - 273.15) * 10) / 10)} ℃</p>
          </div>
        </div>
      )}

      <KakaoMap />
    </div>
  );
}

// openWeatherMap API 를이용해서 현재 기온 받아오기
