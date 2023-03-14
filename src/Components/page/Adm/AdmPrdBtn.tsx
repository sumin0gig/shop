import React from 'react';
import { productDataType } from '../../../modules/getDataReducer';

const AdmPrdBtn = ({prdData,name,clickBtn}:{
  // 카테고리 버튼 출력
  prdData: {p_name: string;
  p_pricemin: number;
  p_pricemax: number;
  p_salepricemin: number;
  p_salepricemax: number;
  p_category: string;
  p_isbest: string;
  p_isnew: string;
} | productDataType,
  name:string,
  clickBtn:(value: string) => void
}) => {
  return (
    <button className={prdData.p_category===name?'mini black':'mini'} type="button"
    onClick={()=>clickBtn(name)}>
    {name===""? "ALL": name}
    </button>
  );
};

export default AdmPrdBtn;