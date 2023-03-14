import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { API_URL } from '../../../API/api';
import { getThunk, patchIsbestNo, patchThunk, productDataType } from '../../../modules/getDataReducer';

const AdmPrdSetMini = ({d,module}:{d:productDataType,module:string}) => {
  // PrdSet의Btn 
  const dispatch=useDispatch()

  let isData={
    p_no:d.p_no,
    p_isbest:d.p_isbest,
    p_isnew:d.p_isnew,
    p_isbestNo:d.p_isbestNo
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
  const onChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    isData={
      ...isData,
      p_isbestNo: e.target.value
    }
    dispatch(patchIsbestNo(isData))
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
          <button onClick={()=>onClickDel(d.p_no?d.p_no:0)} className="default">삭제</button>
        </div>
      </td>
      :
      <>
      <td>
        <div>
          <span>{d.p_isbest}</span>
          <button onClick={onClickBEST} className="check">변경</button>
        </div>
      </td>
      <td>
        <div>
          <select name="" id="" onChange={onChange}>
            <option value={d.p_isbest==="Y"?d.p_isbestNo:0}>{d.p_isbest==="Y"?d.p_isbestNo:"not"}</option>
            {d.p_isbest==="Y"&&<>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            </>}
          </select>
        </div>
      </td>
      <td>
        <div>
        <span>{d.p_isnew}</span>
        <button onClick={onClickNEW} className="check">변경</button>
        </div>
      </td>
      </>
      }
    </tr>
  );
};

export default AdmPrdSetMini;