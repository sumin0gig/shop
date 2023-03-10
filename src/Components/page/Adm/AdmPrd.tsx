import React from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../../../modules';
import { productDataType } from '../../../modules/getDataReducer';
import Title from '../../Title';
import AdmPrdUpdate from './AdmPrdUpdate';
import "../../style/AdmPrd.css"
import AdmPrdSet from './AdmPrdSet';
import AdmPrdHead from './AdmPrdHead';

type datatype=productDataType[]|null

const AdmPrd = () => {
  const data:datatype= useSelector((state:rootState)=>state.getDataReducer.product);
  console.log(data);
  
  const initialState={
    p_name:"",
    p_price:0,
    p_saleprice:0,
    p_color:"",
    p_size:"ONE SIZE",
    p_amount:0,
    p_category:"아우터",
    p_isbest:"N",
    p_isnew:"N",
    p_mainImg:"",
    p_mainMiniImg1:"",
    p_mainMiniImg2:"",
    p_mainMiniImg3:"",
    p_mainMiniImg4:"",
    p_mainMiniImg5:"",
    p_annImg:"",
  }
  return (
    <>
    <AdmPrdHead/>
    <div className='main'>
      
      <h1 className='center'>상품 관리</h1>

      <div className='underlineDiv'>
        <Title title="상품 추가" no='no1'/>
        <div className="grayDiv">
          <AdmPrdUpdate d={initialState} module={'add'}/>
        </div>
      </div>

      <div className='underlineDiv'>
        <Title title="상품 삭제" no='no2'/>
        <div className="grayDiv">
          <AdmPrdSet module='del'/>
        </div>
      </div>

      <div className='underlineDiv'>
        <Title title="BEST / NEW 상품 지정" no='no3'/>
        <div className="grayDiv">
          <AdmPrdSet module='set'/>
        </div>
      </div>

      <div className='underlineDiv'>
        <Title title="상품 관리" no='no4'/>
        <div className="grayDiv">
          <h4>총 {data?data.length:0}건</h4>
          {data? data.map((d,i)=>
            <AdmPrdUpdate d={d} module={'update'} key={i}/>
          )
          : "상품을 추가해주세요."
          }
        </div>
      </div>

    </div>
    </>
  );
};

export default AdmPrd;