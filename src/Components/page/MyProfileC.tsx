import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../../modules';
import Title from '../Title';
import { memberDataType } from '../../modules/getDataReducer';
import { useDispatch } from 'react-redux';
import { patchMemberOne } from '../../modules/getCartReducer';

const MyProfileC = () => {
  const data:memberDataType= useSelector((state:rootState)=>state.getCartReducer.member);
  const dispatch= useDispatch();
  const [formdata,setFormdata]=useState({
    m_name:data?data.m_name:"",
    m_tel_1:data?data.m_tel_1:0,
    m_tel_2:data?data.m_tel_2:0,
    m_tel_3:data?data.m_tel_3:0,
    m_sms_check:data?data.m_sms_check:false,
    m_mail_add1:data?data.m_mail_add1:"",
    m_mail_add2:data?data.m_mail_add2:"",
    m_mail_check:data?data.m_mail_check:false
  });
  useEffect(()=>{
    setFormdata({
      m_name:data?data.m_name:"",
      m_tel_1:data?data.m_tel_1:0,
      m_tel_2:data?data.m_tel_2:0,
      m_tel_3:data?data.m_tel_3:0,
      m_sms_check:data?data.m_sms_check:false,
      m_mail_add1:data?data.m_mail_add1:"",
      m_mail_add2:data?data.m_mail_add2:"",
      m_mail_check:data?data.m_mail_check:false
    })
  },[data])
  const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;
    setFormdata({
      ...formdata,
      [name]:value
    })
  }
  const onCheckChange=(e:React.ChangeEvent<HTMLInputElement>,value:boolean)=>{
    const {name}=e.target;
    setFormdata({
      ...formdata,
      [name]:value
    })
  }
  const onClick=()=>{
    dispatch(patchMemberOne(data.m_no,formdata));
    alert("수정되었습니다.");
    window.location.reload();
  }

  if(data===null)return <div>no data</div>  
  return (
    <div className='main inner'>
      <Title title='회원 정보 수정' center/>
      <div className='mpInputs'>
        <div className='inputs'>
          <span>닉네임</span>
          <div>
            <input type="text" name='m_name' onChange={onChange} value={formdata.m_name}/>
          </div>
        </div>
        <div className='inputs'>
          <span>휴대전화</span>
          <div className="inputs">
            <input type="number" name='m_tel_1' onChange={onChange} value={formdata.m_tel_1}/>
            <input type="number" name='m_tel_2' onChange={onChange} value={formdata.m_tel_2}/>
            <input type="number" name='m_tel_3' onChange={onChange} value={formdata.m_tel_3}/>
          </div>    
        </div>
        <div className='inputs'>
          <span>sms수신여부</span>
          Y <input type="radio" name='m_sms_check' onChange={(e)=>onCheckChange(e,true)} checked={formdata.m_sms_check?true:false}/>
          N <input type="radio" name='m_sms_check' onChange={(e)=>onCheckChange(e,false)} checked={!formdata.m_sms_check?true:false}/>          
        </div>
        <div className='inputs'>
        <span>이메일</span>
          <div className="inputs">
            <input type="text" name='m_mail_add1' onChange={onChange} value={formdata.m_mail_add1}/>@
            <input type="text" name='m_mail_add2' onChange={onChange} value={formdata.m_mail_add2}/>
          </div>
        </div>
        <div className='inputs'>
          <span>이메일수신여부</span>
          Y <input type="radio" name='m_mail_check' onChange={(e)=>onCheckChange(e,true)} checked={formdata.m_mail_check?true:false}/>
          N <input type="radio" name='m_mail_check' onChange={(e)=>onCheckChange(e,false)} checked={!formdata.m_mail_check?true:false}/>
          </div>
      </div>
      <div className="inDiv center">
        <button className='default' onClick={onClick}>수정</button>
      </div>
    </div>
  );
};

export default MyProfileC;