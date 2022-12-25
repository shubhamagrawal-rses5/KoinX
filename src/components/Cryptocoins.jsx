import React, { useEffect, useState } from "react";
import CryptocoinItem from "./CryptocoinItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import TableTop from "./TableTop";
import Pagination from "./Pagination";
import MobilePopup from "./MobilePopup";

function Cryptocoins() {
  const [coins, setCoins] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = useState(1);

  const fetchData = () => {
    let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_de sc&amp;per_page=${pageSize}&amp;page=${pageNo}&amp;sparkline=false&amp;price_change_percentage=24h%2C7d`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => setCoins(data));
  };

  useEffect(() => {
    fetchData();
  }, [pageSize, pageNo]);

  return (
    <>
      <TableTop setPageSize={setPageSize} />
      <table className="table table-hover">
        <thead className="table-header">
          <tr>
            <th></th>
            <th>#</th>
            <th className="table-name">Name</th>
            <th>Price</th>
            <th>24H</th>
            <th>7D</th>
            <th>MARKET CAP</th>
            <th>VOLUME(24H)</th>
            <th>CIRCULATING SUPPLY</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {coins &&
            coins.length > 0 &&
            coins.map((userObj, index) => (
              <>
                <CryptocoinItem key={userObj.market_cap_rank} props={userObj} />
                {/* <MobilePopup key={userObj.market_cap_rank} props={userObj} /> */}
              </>
            ))}
        </tbody>
      </table>
      <Pagination pageNo={pageNo} setPageNo={setPageNo} />
    </>
  );
}

export default Cryptocoins;
