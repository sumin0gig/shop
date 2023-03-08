import React, { useEffect, useState, Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../modules';
import { getThunk, productDataType } from '../../../modules/getDataReducer';
import Title from '../../Title';
import AdmPrdCon from './AdmPrdCon';
import "../../style/AdmPrd.css"

type datatype=productDataType[]|null
const AdmPrd = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getThunk())
  },[dispatch])
  const data:datatype= useSelector((state:rootState)=>state.getDataReducer.product);
  console.log(data);
  console.log("사과");
  
  const [formData,setFormData]=useState({
    p_no:"",
    p_name:"",
    p_price:"",
    p_saleprice:"",
    p_color:"",
    p_size:"",
    p_amount:"",
    p_category:"",
    p_isbest:"",
    p_isnew:"",
    p_mainImg:"",
    p_mainMiniImg1:"",
    p_mainMiniImg2:"",
    p_mainMiniImg3:"",
    p_mainMiniImg4:"",
    p_mainMiniImg5:"",
    p_annImg:"",
  })
  

  if(!data)return(
    <div className='main'>
      <h1 className='center'>상품 관리</h1>
      <div className='underlineDiv'>
        <Title title="상품 관리"/>
        <div className="grayDiv">
        no Data
        </div>
      </div>
    </div>
  )
  return (
    <div className='main'>
      <h1 className='center'>상품 관리</h1>
      <div className='underlineDiv'>
        <Title title="상품 관리"/>
        <div className="grayDiv">
          총 {data.length}건
          {data.map(d=>
            <AdmPrdCon d={d}/>
          )}
        </div>
      </div>

    </div>
  );
};

export default AdmPrd;