import React from "react";
import "../Slider/Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Slider() {
  return (
    <div className="slider">
      <Carousel infiniteLoop autoPlay>
        <div className="slider-image">
          <img src="../images/slider3.jpg" alt="mobile" />
        </div>
        <div className="slider-image">
          <img src="../images/slider4.jpg" alt="mobile" />
        </div>
        <div className="slider-image">
          <img src="../images/slider2.jpg" alt="mobile" />
        </div>
        <div className="slider-image">
          <img src="../images/slider.jpg" alt="mobile" />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
