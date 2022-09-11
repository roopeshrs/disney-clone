import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import badging4 from "../assets/images/badging4.jpg";
import badging5 from "../assets/images/badging5.jpg";
import scale6 from "../assets/images/scale6.jpg";
import scale16 from "../assets/images/scale16.jpg";

function BannerSlider() {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
  };
  return (
    <Slider {...settings} className="banner mt-[20px] w-[90%] mx-auto">
        <div>
            <img src={badging4} className="cursor-pointer"/>
        </div>
        <div>
            <img src={badging5} className="cursor-pointer"/>
        </div>
        <div>
            <img src={scale6} className="cursor-pointer"/>
        </div>
        <div>
            <img src={scale16} className="cursor-pointer"/>
        </div>
    </Slider>
  );
}

export default BannerSlider;
