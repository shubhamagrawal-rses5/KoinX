import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

// function percent_colour(value) {
//   if (value >= 0) {
//   }
// }

function CryptocoinItem({ props }) {
  // function liked() {
  //   var element = document.getElementById("like");
  //   console.log("hgg");
  //   // element.classList.toggle("liked");
  // }
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
    // <div className="table-row">
    <tr>
      <td className="table-bookmark">
        {/* <button id="like" onClick={() => liked()}> */}
        <i className="fa fa-star-o"></i>
        {/* <span class="icon">Like</span> */}
        {/* </button> */}
      </td>
      <td className="table-rank">{market_cap_rank}</td>
      <td className="table-name">
        <img src={image} alt="" className="table-name-image"></img>
        <div className="table-name-text">
          {name}{" "}
          <div className="table-name-text-symbol">{symbol.toUpperCase()}</div>
        </div>
      </td>
      <td>
        ${(Math.round(current_price * 100) / 100).toLocaleString("en-US")}
      </td>
      <td id="24hr">
        {(
          Math.round(price_change_percentage_24h_in_currency * 100) / 100
        ).toLocaleString("en-US")}
      </td>
      <td id="7hr">
        {(
          Math.round(price_change_percentage_7d_in_currency * 100) / 100
        ).toLocaleString("en-US")}
      </td>
      <td>${Math.round(market_cap).toLocaleString("en-US")}</td>
      <td>${Math.round(total_volume).toLocaleString("en-US")}</td>
      <td>{Math.round(circulating_supply).toLocaleString("en-US")} BTC</td>
      <td></td>
    </tr>
    // </div>
  );
}

export default CryptocoinItem;
