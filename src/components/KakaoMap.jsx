/*global kakao*/
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../features/categorySlice";
import { selectFocus, setFocusInfo } from "../features/focusSlice";
import { selectAddress, selectLat, selectLon } from "../features/locationSlice";
import { setSearchListInfo } from "../features/searchListSlice";
import "./KakaoMap.css";

export default function KakaoMap() {
  const [me, setMe] = useState();
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();

  const dispatch = useDispatch();
  const locationLat = useSelector(selectLat);
  const locationLon = useSelector(selectLon);
  const locationAddress = useSelector(selectAddress);
  const category = useSelector(selectCategory);
  const focus = useSelector(selectFocus);

  useEffect(() => {
    if (!map) return;

    const ps = new kakao.maps.services.Places();

    console.log(locationAddress);

    ps.keywordSearch(
      locationAddress + category,
      (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          const bounds = new kakao.maps.LatLngBounds();
          let markers = [];

          for (var i = 0; i < data.length; i++) {
            markers.push({
              position: {
                lat: data[i].y,
                lng: data[i].x,
              },
              id: data[i].id,
              name: data[i].place_name,
              address: data[i].address_name,
              road_address: data[i].road_address_name,
              phone: data[i].phone,
            });

            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }
          setMarkers(markers);
          dispatch(
            setSearchListInfo({
              list: markers,
            })
          );

          map.setBounds(bounds);
        }
      }
    );
  }, [locationAddress, category]);

  useEffect(() => {
    if (!focus) return;

    const clickedMarker = markers.find((marker) => marker.id === focus);
    setInfo(clickedMarker);
  }, [focus]);

  const handleMarkerClick = (marker) => {
    console.log("클릭");
    setInfo(marker);

    dispatch(
      setFocusInfo({
        focus: marker.id,
      })
    );
  };

  return (
    <Map
      className="kakao_map"
      center={{
        lat: locationLat,
        lng: locationLon,
      }}
      level={3}
      onCreate={setMap}
    >
      <MapMarker
        position={{
          lat: locationLat,
          lng: locationLon,
        }}
        image={{
          src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
          size: new kakao.maps.Size(24, 35),
          alt: "내 위치",
        }}
        onMouseOver={() => setMe({ name: "현재 위치" })}
        onMouseOut={() => setMe(null)}
      >
        {me && (
          <div className="kakao_map_info">
            <p>{me.name}</p>
          </div>
        )}
      </MapMarker>
      {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.name}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => handleMarkerClick(marker)}
        >
          {info && info.id === marker.id && (
            <div className="kakao_map_info">
              <p>{marker.name}</p>
            </div>
          )}
        </MapMarker>
      ))}
    </Map>
  );
}
