import React from "react";
import Slider from "react-slick";
import CarouselCard from "./CarouselCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MultiCarousel() {
  var settings = {
    arrows: true,
    dots: false,
    infinite: true,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="carousel-outer-container">
      <div className="carousel-container">
        <div className="carousel">
          <Slider {...settings}>
            <div>
              <CarouselCard />
            </div>
            <div>
              <CarouselCard />
            </div>
            <div>
              <CarouselCard />
            </div>
            <div>
              <CarouselCard />
            </div>
            <div>
              <CarouselCard />
            </div>
            <div>
              <CarouselCard />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default MultiCarousel;
