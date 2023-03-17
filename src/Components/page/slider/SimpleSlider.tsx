import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../style/Slider.css';
import { useSelector } from "react-redux";
import { rootState } from "../../../modules";
import { bannerDataType } from "../../../modules/getDataReducer";
import { API_URL } from "../../../API/api";
import { Link } from "react-router-dom";

const SimpleSlider =()=> {
  // banner 슬라이더
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const banners:bannerDataType[]=useSelector((state:rootState)=>state.getDataReducer.banner);
    return (
      <div className="sliderDiv">
        <Slider {...settings}>
          {banners&&banners.map((d,i)=>
            <div className="sliderImg" key={i}>
              <Link to={d.b_link}><img src={`${API_URL}/upload/banner/${d.b_img}`} alt="" /></Link>
            </div>
            )}
        </Slider>
      </div>
    ); 
}

export default SimpleSlider;