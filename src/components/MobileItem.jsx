import "./MobileItem.css";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFocus, setFocusInfo } from "../features/focusSlice";

export default function MobileItem({ id, name, address, road_address, phone }) {
  const dispatch = useDispatch();
  const focus = useSelector(selectFocus);

  return (
    <div className="mobileitem">
      <div className="mobileitem_card">
        <span className="mobilesearchitem_name">{name}</span>
        <span className="mobilesearchitem_road_address">{road_address}</span>
        <span className="mobileitem_address">
          <small className="mobileitem_number_address"> </small>
          {address}
        </span>
        <span className="mobileitem_phone">{phone}</span>
      </div>
    </div>
  );
}
