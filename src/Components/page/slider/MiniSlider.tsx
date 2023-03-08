import React, { Component } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../style/Slider.css';

export default class MiniSlider extends Component {
  render() {
    var settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };
    const data=[{no:1,price:100000},{no:2,price:100000},{no:3,price:100000},{no:1,price:100000},{no:2,price:100000},{no:3,price:100000}]
    return (
      <Slider {...settings}>
        {data.map(d=>
          <>
          <div className="miniSliderImg">
            <div className="miniImg">
              <img src="" alt="" />
            </div>
          </div>
          <div>
            <div className="info">
              <p className="name">[1만5천장 돌파👏] 멜로샤 부클 트위드 자켓 개강룩 jk2531</p>
              <div className="priceDiv">
                <s className="saleprice">{d.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</s>
                <p className="price">{d.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                <p className="salePro">00%</p>
              </div>
              <div className="icons">
                <p><FaHeart/></p>
                <p><FaShoppingCart/></p>
              </div>
            </div>
          </div>
          </>
        )}
      </Slider>
    );
  }
}