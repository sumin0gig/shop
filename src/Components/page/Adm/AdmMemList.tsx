import React from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../../../modules';
import { memberDataType } from '../../../modules/getDataReducer';
import AdmMemListC from './AdmMemListC';

const AdmMemList = () => {
  const members:memberDataType[]= useSelector((state:rootState)=>state.getDataReducer.member)
  return (
    <div>
      <h4>{members?members.length:0}명의 가입자가 있습니다.</h4>
      <div className="DataDiv">
        <table>
          <tbody>
            <tr>
              <th>번호</th>
              <th>이름</th>
              <th>아이디</th>
              <th>생일</th>
              <th>연락처</th>
              <th>sms 수신 여부</th>
              <th>메일</th>
              <th>메일 수신 여부</th>
              <th>권한 설정</th>
            </tr>
            {members&&members.map((m,i)=>
            <AdmMemListC m={m} key={i}/>
            )}
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

export default AdmMemList;