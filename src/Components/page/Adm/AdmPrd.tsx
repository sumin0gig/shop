import React , { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../../../modules';
import { getAmountThunk, getThunk, productDataType } from '../../../modules/getDataReducer';
import Title from '../../Title';
import AdmPrdUpdate from './AdmPrdUpdate';
import AdmPrdAmountSet from './AdmPrdAmountSet';
import "../../style/AdmPrd.css"
import AdmPrdSet from './AdmPrdSet';
import AdmPrdHead from './AdmPrdHead';
import AdmPrdUpdateSet from './AdmPrdUpdateSet';
import { useDispatch } from 'react-redux';



const AdmPrd = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    // dispatch(getThunk())
    dispatch(getAmountThunk())
  },[dispatch])
  
  const initialState={
    p_name:"",
    p_price:0,
    p_saleprice:0,
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
        <pre>삭제한 데이터는 복구할 수 없으니 주의하세요.</pre>
        <div className="grayDiv">
          <AdmPrdSet module='del'/>
        </div>
      </div>

      <div className='underlineDiv'>
        <Title title="수량 설정" no='no3'/>
        <pre>삭제한 데이터는 복구할 수 없으니 주의하세요.</pre>
        <div className="grayDiv">
          <AdmPrdAmountSet/>
        </div>
      </div>

      <div className='underlineDiv'>
        <Title title="BEST / NEW 지정" no='no4'/>
        <pre>BEST로 지정한 상품은 좌측상단에 노출됩니다.</pre>
        <div className="grayDiv">
          <AdmPrdSet module='set'/>
        </div>
      </div>

      <div className='underlineDiv'>
        <Title title="상품 설정" no='no5'/>
        <div className="grayDiv">
          <AdmPrdUpdateSet/>
        </div>
      </div>

     

    </div>
    </>
  );
};

export default AdmPrd;