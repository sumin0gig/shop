import axios from 'axios';
import React ,{ useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_URL } from '../../../API/api';
import { delAmount, patchAmount, prodcutAmountDataType } from '../../../modules/getDataReducer';

const AdmPrdAmountSetMiniMini = ({d}:{d:prodcutAmountDataType}) => {
  const [formData,setFormData]= useState({
    pa_amount: d.pa_amount,
    plus_amount: "",
  })
  useEffect(()=>{
    setFormData({
      ...formData,
      pa_amount: d.pa_amount
    })
  },[d])
  const dispatch=useDispatch();
  const onAdd=(no:number)=>{
    dispatch(patchAmount(no,formData));
  }
  const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setFormData({
      ...formData,
      plus_amount: e.target.value
    })
  }
  const onDel=(no:number)=>{
    dispatch(delAmount(no))
  }
  return (
    <>
      <td>{d.pa_size}</td>
      <td>{d.pa_color}</td>
      <td>{d.pa_amount}EA</td>
      <td className='amount-box'>
        <input type="number" name="plus_amount" onChange={onChange} />
        <button type='button' className='mini' onClick={()=>onAdd(d.pa_no!)}>추가</button>
      </td>
      <td>
        <button type='button' className='noneBg' onClick={()=>onDel(d.pa_no!)}>X</button>
      </td>
    </>
  );
};

export default AdmPrdAmountSetMiniMini;