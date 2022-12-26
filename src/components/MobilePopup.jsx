import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function color(value) {
  value = Math.round(value * 100) / 100;
  if (value >= 0) {
    let up = "▲ ";
    value = up + value + "%";
  } else {
    let down = "▼ ";
    value = down + -1 * value + "%";
  }
  return value;
}

function MobilePopup({ props, popup, setPopup }) {
  const red = { color: "#EA3943" };
  const green = { color: " #16C784" };
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
  return (
    <div className="mobile-popover">
      <div className="mobile-popover-data-item">
        <tr className="popup-name">
          <td>
            <img src={image} alt="" className="popup-name-image"></img>
            <div className="popup-name-text">{name}</div>
          </td>
          <td
            className="popover-cross"
            onClick={() => {
              setPopup(!popup);
            }}
          >
            X
          </td>
        </tr>
      </div>
      <div className="mobile-popover-data">
        <div className="mobile-popover-data-item">
          <tr>
            <th>Price</th>
            <th>24H</th>
            <th>7D</th>
          </tr>
          <tr>
            <td>
              ${(Math.round(current_price * 100) / 100).toLocaleString("en-US")}
            </td>
            <td
              id="24hr"
              style={price_change_percentage_24h_in_currency >= 0 ? green : red}
            >
              {color(price_change_percentage_24h_in_currency)}
            </td>
            <td
              id="7hr"
              style={price_change_percentage_7d_in_currency >= 0 ? green : red}
            >
              {color(price_change_percentage_7d_in_currency)}
            </td>
          </tr>
        </div>
        <div className="mobile-popover-data-item">
          <tr>
            <th>MARKET CAP</th>
          </tr>
          <tr>
            <td>${Math.round(market_cap).toLocaleString("en-US")}</td>
          </tr>
        </div>
        <div className="mobile-popover-data-item">
          <tr>
            <th>VOLUME(24H)</th>
          </tr>
          <tr>
            <td>${Math.round(total_volume).toLocaleString("en-US")}</td>
          </tr>
        </div>
        <div className="mobile-popover-data-item">
          {" "}
          <tr>
            <th>CIRCULATING SUPPLY</th>
          </tr>
          <tr>
            <td>
              {Math.round(circulating_supply).toLocaleString("en-US")} BTC
            </td>
          </tr>
        </div>
      </div>
    </div>
  );
}

export default MobilePopup;
