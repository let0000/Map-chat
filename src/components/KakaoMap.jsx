/*global kakao*/
import React from "react";
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useSelector } from "react-redux";
import { selectAddress, selectLat, selectLon } from "../features/locationSlice";
import "./KakaoMap.css";

export default function KakaoMap() {
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();

  const locationLat = useSelector(selectLat);
  const locationLon = useSelector(selectLon);
  const locationAddress = useSelector(selectAddress);

  let category = "맛집";

  useEffect(() => {
    if (!map) return;

    const ps = new kakao.maps.services.Places();

    console.log(locationLat);
    console.log(locationLon);
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
              url: data[i].place_url,
            });

            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }
          setMarkers(markers);

          map.setBounds(bounds);
        }
      }
    );
  }, [category]);

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
      {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.name}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => setInfo(marker)}
        >
          {info && info.id === marker.id && (
            <div className="kakao-map-info">
              <p>{marker.name}</p>
            </div>
          )}
        </MapMarker>
      ))}
    </Map>
  );
}
