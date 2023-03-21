import React from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../../../modules';
import { prodcutAmountDataType, productDataType } from '../../../modules/getDataReducer';
import AdmPrdAmountSetMiniMini from './AdmPrdAmountSetMiniMini';
import AdmPrdAmountSetAddMini from './AdmPrdAmountSetAddMini';

const AdmPrdAmountSetMini = () => {
  // 수량 출력
  const data:productDataType[]=useSelector((state:rootState)=>state.getDataReducer.product);
  const dataAmount:prodcutAmountDataType[]=useSelector((state:rootState)=>state.getDataReducer.product_amount);

  return (
    <table className='productAmount'>
      <tbody>
        <tr>
          <th className='img'>제품</th>
          <th className='cate'>카테고리</th>
          <th className='name'>제품명</th>
          <th>사이즈</th>
        </tr>
        {data&&data.map((d:productDataType,i:number)=>
        <tr key={i}>
          <td className='img center'>
            <a href={`/product/view/${d.p_no}`} target="_blank">
              <img src={d.p_mainImg} alt="MainImg" className='miniImg' />
            </a>  
          </td>
          <td className='cate center'>
            {d.p_category}
          </td>
          <td className='name'>
            <a href={`/product/view/${d.p_no}`} target="_blank">
              {d.p_name}
            </a>
          </td>
          <td>
            <tr>
              <th className='size'>사이즈</th>
              <th className='color'>색상</th>
              <th className='amount'>재고수량</th>
              <th className='add'>재고 추가/제거</th>
              <th>삭제</th>
            </tr>
            {dataAmount&&dataAmount.filter(a=>a.p_no===d.p_no).map((d,i)=>
              <AdmPrdAmountSetMiniMini d={d} key={i}/>
            )}
              <AdmPrdAmountSetAddMini p_no={d.p_no}/>
          </td>
        </tr>
        )}
      </tbody>
    </table>
  );
};


export default AdmPrdAmountSetMini;