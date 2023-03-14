/*global kakao*/
import React from "react";
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function KakaoMap() {
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();

  useEffect(() => {
    if (!map) return;

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch("가좌동 맛집", (data, status, _pagination) => {
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
    });
  }, [map]);

  return (
    <Map
      className="kakao-map"
      center={{
        lat: 37.566826,
        lng: 126.9786567,
      }}
      style={{
        width: "100%",
        height: "100vh",
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
