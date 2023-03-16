import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllmember } from '../../../modules/getDataReducer';
import Title from '../../Title';
import AdmMemList from './AdmMemList';

const AdmMem = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getAllmember());
  },[dispatch])
  return (
    <div className='main'>
      <h1 className='center'>멤버 관리</h1>
      <div className="underlineDiv">
        <div className="grayDiv">
          <pre>
            권한 1: 관리자페이지 접속가능
            <br />
            권한 2: 권한 설정가능, 멤버 삭제가능
          </pre>
          <AdmMemList/>
        </div>
      </div>
    </div>
  );
};

export default AdmMem;