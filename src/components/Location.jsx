import React from "react";
import { PlaceOutlined, RefreshOutlined } from "@mui/icons-material";

export default function Location() {
  return (
    <div className="location">
      <div className="location_address">
        <h4>인천 서구 가좌동 402</h4>
      </div>
      <div className="location_refresh">
        <RefreshOutlined />
      </div>
      <div className="location_category">
        <PlaceOutlined />
      </div>
    </div>
  );
}
