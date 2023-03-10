import React from 'react';
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { rootState } from '../../modules';
import { productDataType } from '../../modules/getDataReducer';
import Title from '../Title';
import "../style/Product.css"

const ProductList = ({cate}:{cate:string}) => {
  const data:productDataType[]= useSelector((state:rootState)=>state.getDataReducer.product);
  console.log(data);
  
  return (
    <div className='main inner'>
      <Title title={cate} center={true}/>
      <h4>
        {data?data.length:0}개의 상품
      </h4>
      <ul className='items'>
        {data.map((d:productDataType,i:number)=>
          <li key={i}>
            <div className="item-image">
              <img src={d.p_mainImg} alt="MainImg" />
            </div>
            <div className="item-content">
              <div className="subject">
              {d.p_name}
              </div>
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
          </li>
        )}
      </ul>

      
    </div>
  );
};

export default ProductList;