import React from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../../modules';
import { delHeart, heartDataType } from '../../modules/getCartReducer';
import Title from '../Title';
import { Link } from 'react-router-dom';
import "../style/Heart.css"
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getCookie } from '../../API/Cookie';

const HeartC = () => {
  const data:heartDataType[]=useSelector((state:rootState)=>state.getCartReducer.heart);
  const dispatch= useDispatch();
  if(!data) return<div>no data</div>;
  const isDelOver=(no:number)=>{document.querySelector(`.graydiv${no}`)!.classList.add("del")};
  const isDelLeave=(no:number)=>{document.querySelector(`.graydiv${no}`)!.classList.remove("del")};
  const onDel=(no:number)=>{ 
    dispatch(delHeart(getCookie("userNo"),no))
  }
  return (
    <div className='main inner'>
      <Title title='LIKE' center/>
      <ul className='heartUl'>
        {data&&data.map((d,i:number)=>
        <li key={i}>
          <div className="delBtn" onMouseOver={()=>isDelOver(i)} onMouseLeave={()=>isDelLeave(i)}>
            <button className='noneBg' onClick={()=>onDel(d.h_no)}>X</button>
          </div>
          <div className={`grayDiv graydiv${i}`}>
            <Link to={`/product/view/${d.p_no}`}>
              <img src={d.p_mainImg} alt={d.p_name} className="middleImg"/>
              <p className="name">{d.p_name}</p>
              <div className="priceDiv">
                {d.p_saleprice?<s className="saleprice">{d.p_saleprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</s>:null}
                <p className="price">{d.p_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                {d.p_saleprice?<p className="salePro">{100-Math.trunc(d.p_price/d.p_saleprice*100)}%</p>:null}
              </div>
            </Link>
          </div>
        </li>  
        )}
      </ul>

    </div>
  );
};

export default HeartC;