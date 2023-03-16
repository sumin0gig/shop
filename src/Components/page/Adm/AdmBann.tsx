import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBanner } from '../../../modules/getDataReducer';
import Title from '../../Title';
import AdmBannAdd from './AdmBannAdd';
import AdmBannHead from './AdmBannHead';
import AdmBannList from './AdmBannList';

const AdmBann = () => {
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(getBanner())
  },[dispatch])
  return (
    <>
    <AdmBannHead/>
    <div className='main'>
      <h1 className="center">메인배너 관리</h1>

      <div className="underlineDiv">
        <Title title='배너 추가' no={"no1"}/>
        <div className="grayDiv">
          {/* 배너 이미지 등록 */}
          <AdmBannAdd/>
        </div>
      </div>

      <div className="underlineDiv">
        <Title title='배너 목록' no={"no2"}/>
        <div className="grayDiv">
          {/* 배너 이미지 삭제도 가능 */}
          <AdmBannList/>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdmBann;