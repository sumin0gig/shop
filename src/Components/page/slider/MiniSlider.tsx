import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../style/Slider.css';
import { useSelector } from "react-redux";
import { rootState } from "../../../modules";
import { Link } from "react-router-dom";

const MiniSlider=()=>{
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  const data= useSelector((state:rootState)=>state.getDataReducer.bestproduct)
  if (!data) return <div>no data</div>
  return (
    // bestItem slider
    <Slider {...settings}>
      {data.map((d:any,i:number)=>
        <div key={i}>
          
            <div className="miniSliderImg">
              <div className="miniImg">
                <img src={d.p_mainImg} alt="" />
              </div>
            </div>
            <div>
              <Link to={`/product/view/${d.p_no}`}>
              <div className="info">
                <p className="name">{d.p_name}</p>
                <div className="priceDiv">
                  {d.p_saleprice?<s className="saleprice">{d.p_saleprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</s>:null}
                  <p className="price">{d.p_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                  {d.p_saleprice?<p className="salePro">{Math.trunc(d.p_price/d.p_saleprice*100)}%</p>:null}
                </div>
                <div className="icons">
                  <p><FaHeart/></p>
                  <p><FaShoppingCart/></p>
                </div>
              </div>
              </Link>
            </div>
          
        </div>
      )}
    </Slider>
  );
}

export default MiniSlider