import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function CarouselCard({ image, title, desc }) {
  return (
    <div className="card carouselcard">
      <div className="d-flex">
        <div className="flex-shrink-0">
          <img src="image.png" className="card-image" alt="..."></img>
        </div>
        <div className="flex-grow-1 ms-3 card-image-title">
          Portfolio
          <div className="card-image-desc">
            Track youi trades in one place, not all over the place.
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;
