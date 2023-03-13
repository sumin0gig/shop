import React , { useEffect } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { productDataType } from "../../../modules/getDataReducer";

const ProductSlider= ({d}:{d:productDataType})=> {
  // 상품상세페이지 슬라이더
    const settings = {
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    setTimeout(()=>{
      document.querySelector(".slick-dots li:nth-child(1) button")!.innerHTML=`<img src=${d.p_mainMiniImg1||''} alt='' />`;
      document.querySelector(".slick-dots li:nth-child(2) button")!.innerHTML=`<img src=${d.p_mainMiniImg2||''} alt='' />`;
      document.querySelector(".slick-dots li:nth-child(3) button")!.innerHTML=`<img src=${d.p_mainMiniImg3||''} alt='' />`;
      document.querySelector(".slick-dots li:nth-child(4) button")!.innerHTML=`<img src=${d.p_mainMiniImg4||''} alt='' />`;
    },1)

    return (
      <div className="sliderinner">
        <Slider {...settings}>
          <div>
            <img src={d.p_mainMiniImg1||""} />
          </div>
          <div>
            <img src={d.p_mainMiniImg2||""} />
          </div>
          <div>
            <img src={d.p_mainMiniImg3||""} />
          </div>
          <div>
            <img src={d.p_mainMiniImg4||""} />
          </div>
        </Slider>
      </div>
    );
}
export default ProductSlider;