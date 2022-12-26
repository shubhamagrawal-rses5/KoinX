import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
function TableTop({ setPageSize }) {
  function f(event) {
    setPageSize(event.target.value);
    console.log(event.target.value);
  }
  return (
    <div className="tabletop-container">
      <div className="tabletop">
        <div className="table-heading">
          Top 100 Cryptocurrencies by Market Cap
        </div>
        <div className="d-flex justify-content-between legends-container">
          <div className="d-flex justify-content-start ">
            <button type="button" className="btn btn-light legends">
              <i className="fa fa-star-o"></i> Favorites
            </button>
            <button type="button" className="legends btn btn-light">
              CryptoCurrencies
            </button>
            <button type="button" className="btn btn-light legends">
              Defi
            </button>
            <button type="button" className="btn btn-light legends">
              NFTs and Collection
            </button>
          </div>
          <div className="d-flex justify-content-end">
            <label htmlFor="rows" className="show-rows">
              show rows
            </label>
            <select
              id="rows"
              name="dropdown"
              className="dropdown"
              defaultValue={10}
              onClick={f}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableTop;
