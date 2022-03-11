import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Wrap } from "./style";

import slider1 from "Assets/Images/slider-badag.jpg";
import slider2 from "Assets/Images/slider-badging.jpg";
import slider3 from "Assets/Images/slider-scale.jpg";
import slider4 from "Assets/Images/slider-scales.jpg";

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  let imgs = [slider1, slider2, slider3, slider4];

  return (
    <Carousel {...settings}>
      {imgs.map((img, index) => (
        <Wrap key={index}>
          <a>
            <img src={img} alt="" />
          </a>
        </Wrap>
      ))}
    </Carousel>
  );
};

export default ImgSlider;
