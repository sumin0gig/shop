import React from 'react';
import { FaHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { rootState } from '../../modules';
import { productDataType } from '../../modules/getDataReducer';
import { Link } from 'react-router-dom';

const ListItems = () => {
  let data:productDataType[]= useSelector((state:rootState)=>state.getDataReducer.product);

  return (
    <div className='inDiv'>
      <h4>
        {data?data.length:0}개의 상품
      </h4>
      <ul className='items'>
        {data&&data.length===0 &&
          <div>등록된 상품이 없습니다.</div>
        }
        {data&&data.map((d:productDataType,i:number)=>
          <li key={i}>
              <Link to={`/product/view/${d.p_no}`}>
                <div className="item-image">
                  <img src={d.p_mainImg} alt="MainImg" />
                </div>
              </Link>
                <div className="item-content balloon-div">
                  <Link to={`/product/view/${d.p_no}`}>
                    { d.p_isnew==="Y"?<div className="balloon new">NEW</div>:
                    d.p_isbest==="Y"?<div className="balloon best">BEST</div>:
                    null}
                    <div className="subject">
                    {d.p_name}
                    </div>
                    <div className="priceDiv">
                      {d.p_saleprice?<s className="saleprice">{d.p_saleprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</s>:null}
                      <p className="price">{d.p_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                      {d.p_saleprice?<p className="salePro">{100-Math.trunc(d.p_price/d.p_saleprice*100)}%</p>:null}
                    </div>
                  </Link>
                  <div className="icons">
                    <p><FaHeart/></p>
                  </div>
                </div>
              
          </li>
        )}
      </ul>
    </div>
  );
};

export default ListItems;