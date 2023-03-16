import React from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../../../modules';
import { productDataType } from '../../../modules/getDataReducer';
import AdmPrdSetMini from './AdmPrdSetMini';

type datatype=productDataType[]|null
const AdmPrdSet = ({module}:{module:string}) => {
  const data:datatype= useSelector((state:rootState)=>state.getDataReducer.product);

  return (
      <table className='DataDiv'>
        <tbody>
        <tr>
          <th>제품</th>
          <th>카테고리</th>
          <th>제품명</th>
          {module==="del"?
          <th>삭제</th>:
          <>
          <th>BEST 지정</th>
          <th>BEST 번호 지정</th>
          <th>NEW 지정</th>          
          </>
          }
        </tr>
        {data?
        data.map((d,i)=>
          <AdmPrdSetMini d={d} key={i} module={module}/>
          )
        :<></>}
        </tbody>
      </table>
  );
};

export default AdmPrdSet;