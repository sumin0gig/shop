import React from 'react';
import { useDispatch } from 'react-redux';
import { getCookie } from '../../../API/Cookie';
import { memberDataType, patchMember } from '../../../modules/getDataReducer';

const AdmMemListC = ({m}:{m:memberDataType}) => {
  const formDataMini={
    m_no:m.m_no,
    m_authority:Math.max(m.m_authority-1,0)    
  }
  const formDataBig={
    m_no:m.m_no,
    m_authority:Math.min(m.m_authority+1,2)    
  }
  const dispatch=useDispatch();
  const onClickDown=()=>{
    if(getCookie('authority')<2||getCookie('authority')===undefined){
       alert("권한이 없습니다.")
    }else{
      dispatch(patchMember(formDataMini))    
    }
  }
  const onClickUp=()=>{
    if(getCookie('authority')<2||getCookie('authority')===undefined){
      alert("권한이 없습니다.")
   }else{
     dispatch(patchMember(formDataBig))
    }
  }
  return (
    <tr>
      <td>{m.m_no}</td>
      <td>{m.m_name}</td>
      <td>{m.m_id}</td>
      <td>{m.m_birth}</td>
      <td>{m.m_tel_1}-{m.m_tel_2}-{m.m_tel_3}</td>
      <td>{m.m_sms_check}</td>
      <td>{m.m_mail_add1}@{m.m_mail_add2}</td>
      <td>{m.m_mail_check}</td>
      <td className='inputs'>
        {m.m_authority}
        <button className='noneBg' onClick={onClickUp}>▲</button>
        <button className='noneBg' onClick={onClickDown}>▼</button>
      </td>
    </tr>
  );
};

export default AdmMemListC;