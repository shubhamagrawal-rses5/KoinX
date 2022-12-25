import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
function TableTop() {
  return (
    <div className="tabletop">
      <div className="table-heading">
        Top 100 Cryptocurrencies by Market Cap
      </div>
      <div class="d-flex justify-content-between">
        <div class="d-flex justify-content-start ">
          <button type="button" class="btn btn-light legends">
            <i className="fa fa-star-o"></i> Favorites
          </button>
          <button type="button" class="legends btn btn-light">
            CryptoCurrencies
          </button>
          <button type="button" class="btn btn-light legends">
            Defi
          </button>
          <button type="button" class="btn btn-light legends">
            NFTs and Collection
          </button>
        </div>
        <div class="d-flex justify-content-end">
          show rows
          <button type="button" class="btn btn-light legends">
            100
          </button>
        </div>
      </div>
    </div>
  );
}

export default TableTop;
