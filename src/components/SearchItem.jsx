import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFocus, setFocusInfo } from "../features/focusSlice";
import "./SearchItem.css";

export default function SearchItem({ id, name, address, road_address, phone }) {
  const dispatch = useDispatch();
  const focus = useSelector(selectFocus);
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [focus]);

  const handleItemClick = () => {
    dispatch(
      setFocusInfo({
        focus: id,
      })
    );
  };

  return (
    <div className="searchitem">
      <div
        ref={focus == id ? myRef : null}
        className="searchitem_card"
        style={{ backgroundColor: focus === id ? "lightcyan" : "white" }}
      >
        <a onClick={handleItemClick}>
          <span className="searchitem_name">{name}</span>
          <span className="searchitem_road_address">{road_address}</span>
          <span className="searchitem_address">
            <small className="searchitem_number_address"> </small>
            {address}
          </span>
          <span className="searchitem_phone">{phone}</span>
        </a>
      </div>
    </div>
  );
}
