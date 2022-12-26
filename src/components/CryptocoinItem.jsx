import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import MobilePopup from "./MobilePopup";

function color(value) {
  if (value >= 0) {
    let up = "▲ ";
    value = Math.round(value * 100) / 100;
    value = up + value + "%";
  } else {
    let down = "▼ ";
    value = Math.round(value * 100) / 100;
    value = down + -1 * value + "%";
  }
  return value;
}

function CryptocoinItem({ props, popup, setPopup, setpopupdata }) {
  const [bookmarked, setBookMarked] = useState(false);
  const red = { color: "#EA3943" };
  const green = { color: " #16C784" };
  const yellow = { color: "#FFD700" };
  const grey = { color: "#ABB4C2" };
  function bookmark(event) {
    if (bookmarked) {
      setBookMarked(false);
    } else {
      setBookMarked(true);
    }
    console.log("bookmarked");
  }

  const {
    name,
    symbol,
    image,
    current_price,
    market_cap_rank,
    market_cap,
    circulating_supply,
    price_change_percentage_24h_in_currency,
    price_change_percentage_7d_in_currency,
    total_volume,
  } = props;

  const onClickHandler = () => {
    setpopupdata(props);
    setPopup(true);
  };
  return (
    <>
      <tr onClick={onClickHandler}>
        <td className="table-bookmark table-favorite">
          <i
            className="fa fa-star-o bookmark"
            onClick={bookmark}
            style={bookmarked ? yellow : grey}
          ></i>
        </td>
        <td className="table-rank">{market_cap_rank}</td>
        <td className="table-name">
          <img src={image} alt="" className="table-name-image"></img>
          <div className="table-name-text">
            {name}{" "}
            <div className="table-name-text-symbol">{symbol.toUpperCase()}</div>
          </div>
        </td>
        <td className="table-price">
          ${(Math.round(current_price * 100) / 100).toLocaleString("en-US")}
        </td>
        <td
          className="table-24h"
          id="24hr"
          style={price_change_percentage_24h_in_currency >= 0 ? green : red}
        >
          {color(price_change_percentage_24h_in_currency)}
        </td>
        <td
          className="table-7d"
          id="7hr"
          style={price_change_percentage_7d_in_currency >= 0 ? green : red}
        >
          {color(price_change_percentage_7d_in_currency)}
        </td>
        <td className="table-marketcap">
          ${Math.round(market_cap).toLocaleString("en-US")}
        </td>
        <td className="table-volume">
          ${Math.round(total_volume).toLocaleString("en-US")}
        </td>
        <td className="table-circulatingsupply">
          {Math.round(circulating_supply).toLocaleString("en-US")} BTC
        </td>
        <td className="table-dots">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </td>
      </tr>
    </>
  );
}

export default CryptocoinItem;
