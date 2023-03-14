import React from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../../../modules';
import { productDataType } from '../../../modules/getDataReducer';
import AdmPrdUpdate from './AdmPrdUpdate';

type datatype=productDataType[]|null
const AdmPrdUpdateSet = () => {
  const data:datatype= useSelector((state:rootState)=>state.getDataReducer.product);

  return (
    <>
      <h4>총 {data?data.length:0}건</h4>
        {data? data.map((d,i)=>
          <AdmPrdUpdate d={d} module={'update'} key={i}/>)
        : "상품을 추가해주세요."
        }
    </>
  );
};

export default AdmPrdUpdateSet;