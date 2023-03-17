import React, { useEffect, useState } from "react";
import {
  BackspaceTwoTone,
  DiningOutlined,
  Forward,
  ForwardOutlined,
  HotelOutlined,
  LocalCafeOutlined,
  LocalConvenienceStoreOutlined,
  LocalHospitalOutlined,
  LocalParkingOutlined,
  MedicationOutlined,
  MovieOutlined,
  ParkOutlined,
  PlaceOutlined,
  RefreshOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import "./Location.css";
import { useDispatch, useSelector } from "react-redux";
import { selectAddress, setLocationInfo } from "../features/locationSlice";
import { setWeatherInfo } from "../features/weatherSlice";
import axios from "axios";

const KAKAO_API_KEY = "349ef8676ac1390f954d64434cb8b94c";
const WEATHER_API_KEY = "3d9dc8ab0aeba4bb77554214de6d1ecb";

export default function Location() {
  const [openCategory, setOpenCategory] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [category, setCategory] = useState("");
  const [openList, setOpenList] = useState(false);
  const [hideList, setHideList] = useState(false);
  const [location, setLocation] = useState({
    lat: null,
    lon: null,
  });

  const dispatch = useDispatch();
  const address = useSelector(selectAddress);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // 위치 정보 가져오기에 성공한 경우
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });

        axios
          .get(
            `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${position.coords.longitude}&y=${position.coords.latitude}&input_coord=WGS84`,
            {
              headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` },
            }
          )
          .then((res) => {
            console.log(res.data);
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
          });

        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${WEATHER_API_KEY}&lang=kr`
          )
          .then((res) => {
            console.log(res.data);
            dispatch(
              setWeatherInfo({
                temp: res.data.main.temp,
                name: res.data.name,
                weather: res.data.weather[0].description,
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
        alert("위치정보를 허용 한 후 새로고침하세요");
      }
    );
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  const handleMouseEnter = () => {
    setOpenCategory(true);
  };

  const handleMouseLeave = () => {
    setOpenCategory(false);
  };

  const handleCategory = (e) => {
    setCategory(e.currentTarget.children[1].innerText);
    setOpenList(true);
    setHideList(true);
  };

  const handleCloseList = () => {
    setHideList(false);
  };

  return (
    <div className="location">
      <div className="location_header">
        <div className="location_address">
          <p>{address ? address : "위치정보를 허용해주세요"}</p>
        </div>
        <div className="location_icons">
          <RefreshOutlined onClick={handleRefresh} />
          {!openCategory ? (
            <PlaceOutlined
              onMouseEnter={handleMouseEnter}
              style={{ color: "red" }}
            />
          ) : (
            <div onMouseLeave={handleMouseLeave} className="location_category">
              <div className="location_category_background">
                <div className="location_category_row">
                  <div
                    onClick={handleCategory}
                    className="location_category_option"
                  >
                    <DiningOutlined />
                    <p>음식점</p>
                  </div>

                  <div
                    onClick={handleCategory}
                    className="location_category_option"
                  >
                    <LocalCafeOutlined />
                    <p>카페</p>
                  </div>
                </div>

                <div className="location_category_row">
                  <div
                    onClick={handleCategory}
                    className="location_category_option"
                  >
                    <LocalHospitalOutlined />
                    <p>병원</p>
                  </div>

                  <div
                    onClick={handleCategory}
                    className="location_category_option"
                  >
                    <MedicationOutlined />
                    <p>약국</p>
                  </div>
                </div>

                <div className="location_category_row">
                  <div
                    onClick={handleCategory}
                    className="location_category_option"
                  >
                    <ShoppingCartOutlined />
                    <p>마트</p>
                  </div>

                  <div
                    onClick={handleCategory}
                    className="location_category_option"
                  >
                    <LocalConvenienceStoreOutlined />
                    <p>편의점</p>
                  </div>
                </div>

                <div className="location_category_row">
                  <div
                    onClick={handleCategory}
                    className="location_category_option"
                  >
                    <ParkOutlined />
                    <p>공원</p>
                  </div>

                  <div
                    onClick={handleCategory}
                    className="location_category_option"
                  >
                    <MovieOutlined />
                    <p>영화관</p>
                  </div>
                </div>

                <div className="location_category_row">
                  <div
                    onClick={handleCategory}
                    className="location_category_option"
                  >
                    <HotelOutlined />
                    <p>숙박</p>
                  </div>

                  <div
                    onClick={handleCategory}
                    className="location_category_option"
                  >
                    <LocalParkingOutlined />
                    <p>주차장</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {hideList ? (
        <div
          className="location_list"
          style={{ display: openList ? "block" : "none" }}
        >
          <div className="location_list_header">
            <h4> 주변 {category} 검색 결과</h4>
            <BackspaceTwoTone onClick={handleCloseList} />
          </div>
        </div>
      ) : (
        <div
          style={{ display: openList ? "block" : "none" }}
          onClick={() => setHideList(true)}
          className="location_list_simple"
        >
          <ForwardOutlined />
        </div>
      )}
    </div>
  );
}
