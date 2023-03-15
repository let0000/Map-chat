import React, { useState } from "react";
import {
  BackspaceTwoTone,
  DiningOutlined,
  DirectionsBusOutlined,
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

export default function Location() {
  const [openCategory, setOpenCategory] = useState(false);

  const handleMouseEnter = () => {
    setOpenCategory(true);
  };

  const handleMouseLeave = () => {
    setOpenCategory(false);
  };

  return (
    <div className="location">
      <div className="location_header">
        <div className="location_address">
          <p>인천 서구 가좌동 402</p>
        </div>
        <div className="location_icons">
          <RefreshOutlined />
          {!openCategory ? (
            <PlaceOutlined
              onMouseEnter={handleMouseEnter}
              style={{ color: "red" }}
            />
          ) : (
            <div onMouseLeave={handleMouseLeave} className="location_category">
              <div className="location_category_background">
                <div className="location_category_row">
                  <div className="location_category_option">
                    <DiningOutlined />
                    <p>음식점</p>
                  </div>

                  <div className="location_category_option">
                    <LocalCafeOutlined />
                    <p>카페</p>
                  </div>
                </div>

                <div className="location_category_row">
                  <div className="location_category_option">
                    <LocalHospitalOutlined />
                    <p>병원</p>
                  </div>

                  <div className="location_category_option">
                    <MedicationOutlined />
                    <p>약국</p>
                  </div>
                </div>

                <div className="location_category_row">
                  <div className="location_category_option">
                    <ShoppingCartOutlined />
                    <p>마트</p>
                  </div>

                  <div className="location_category_option">
                    <LocalConvenienceStoreOutlined />
                    <p>편의점</p>
                  </div>
                </div>

                <div className="location_category_row">
                  <div className="location_category_option">
                    <ParkOutlined />
                    <p>공원</p>
                  </div>

                  <div className="location_category_option">
                    <MovieOutlined />
                    <p>영화관</p>
                  </div>
                </div>

                <div className="location_category_row">
                  <div className="location_category_option">
                    <HotelOutlined />
                    <p>숙박</p>
                  </div>

                  <div className="location_category_option">
                    <LocalParkingOutlined />
                    <p>주차장</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="location_list">
        <div className="location_list_header">
          <h4> 주변 맛집 검색 결과</h4>
          <BackspaceTwoTone />
        </div>
      </div>
    </div>
  );
}
