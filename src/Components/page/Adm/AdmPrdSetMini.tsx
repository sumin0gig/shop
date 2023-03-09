import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { API_URL } from '../../../API/api';
import { getThunk, patchThunk, productDataType } from '../../../modules/getDataReducer';

const AdmPrdSetMini = ({d,module}:{d:productDataType,module:string}) => {
  const dispatch=useDispatch()

  let isData={
    p_no:d.p_no,
    p_isbest:d.p_isbest,
    p_isnew:d.p_isnew
  }
  const onClickDel=(id:number)=>{
    axios.delete(`${API_URL}/admin/product/update/${id}`)
    .then(
      dispatch(getThunk())
    )
  }
  const onClickBEST=()=>{
    isData={
      ...isData,
      p_isbest: isData.p_isbest==="N"?"Y":"N"
    }
    dispatch(patchThunk(isData))
  }
  const onClickNEW=()=>{
    isData={
      ...isData,
      p_isnew: isData.p_isnew==="N"?"Y":"N"  
    }
    dispatch(patchThunk(isData))
  }
  return (
    <tr>
      <td>
        <img src={d.p_mainImg} alt="mainImg" className='miniImg' />
      </td>
      <td>
        <div>{d.p_category}</div>
      </td>
      <td>
        <div>{d.p_name}</div>
      </td>
      {module==="del"?
      <td>
        <div>
          <button onClick={()=>onClickDel(d.p_no?d.p_no:0)}>삭제</button>
        </div>
      </td>
      :
      <>
      <td>
        <div>
          {d.p_isbest} <button onClick={onClickBEST}>변경</button>
        </div>
      </td>
      <td>
        <div>
          {d.p_isnew} <button onClick={onClickNEW}>변경</button>
        </div>
      </td>
      </>
      }
    </tr>
  );
};

export default AdmPrdSetMini;