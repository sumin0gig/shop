import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../style/Slider.css';

export default class SimpleSlider extends Component {
  // banner 슬라이더
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const data=[1,2,3,4,5,6];
    return (
      <div className="sliderDiv">
        <Slider {...settings}>
          {data.map((d,i)=>
            <div className="sliderImg" key={i}>
              <h3>{d}</h3>
            </div>
            )}
        </Slider>
      </div>
    );
  }
}