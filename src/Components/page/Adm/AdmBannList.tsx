import React from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../../../modules';
import { bannerDataType } from '../../../modules/getDataReducer';
import AdmBannListC from './AdmBannListC';

const AdmBannList = () => {
  const banner:bannerDataType[]= useSelector((state:rootState)=>state.getDataReducer.banner)
  return (
    <div className='DataDiv'>
      <table>
        <tbody>
          <tr>
            <th>이미지</th>
            <th>배너명</th>
            <th>링크</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
          {banner && banner.map((b,i)=>
            <AdmBannListC b={b} key={i}/>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdmBannList;