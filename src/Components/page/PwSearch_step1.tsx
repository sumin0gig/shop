import axios from 'axios';
import React , { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { API_URL } from '../../API/api';
import { rootState } from '../../modules';
import { getMemberThunk } from '../../modules/getDataReducer';
import Title from '../Title';


const PWSearch_step1 = () => {
  const member=useSelector((state:rootState)=>state.getDataReducer.member);

  const [formdata,setFormData]=useState({
    m_id:"",
    m_tel_1:"010",
    m_tel_2:"",
    m_tel_3:"",
  })
  const onChange=(e:React.ChangeEvent<HTMLSelectElement>|React.ChangeEvent<HTMLInputElement>)=>{
		const {name,value}=e.target;
		setFormData({
			...formdata,
			[name]: value
		})
    document.querySelector(".announce")!.innerHTML=""
	}
  const [pwFormData,setPwFormData]=useState({
    m_no:"",
    m_pw:"",
    m_check_pw:""
  })
  const onPWChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;
		setPwFormData({
			...pwFormData,
			[name]: value
		})
  }

  const dispatch=useDispatch();
  const onClick=()=>{
    dispatch(getMemberThunk(JSON.stringify(formdata),"pw"))
    document.querySelector(".announce")!.innerHTML="일치하는 계정정보가 없습니다."
  }
  const onPwClick=()=>{
    axios.patch(`${API_URL}/search/pw`,pwFormData)
  }

  useEffect(()=>{
    setPwFormData({
      ...pwFormData,
      m_no: member&&member.length>0?member[0].m_no:""
    })
  },[member])
 if(!member||member.length===0) return (
  <div className='main inner'>
    <Title title='비밀번호 찾기' center/>
    <div>
      <div>
        <input type="text" placeholder='아이디' onChange={onChange} name="m_id"/>
      </div>
      <div className='inputs'>
        <select onChange={onChange} name="m_tel_1" id="">
          <option value="010">010</option>
          <option value="011">011</option>
          <option value="016">016</option>
          <option value="017">017</option>
        </select>
        <input type="text" maxLength={4} onChange={onChange} name="m_tel_2"/>
        <input type="text" maxLength={4} onChange={onChange} name="m_tel_3"/>
      </div>
      <div className="announce">
      </div>
      <div className='inDiv center'>
        <button className='default' type='button' onClick={onClick}>확인</button>
      </div>
    </div>
  </div>
 )
  return (
    <div className='main inner'>
      <Title title='비밀번호 바꾸기' center/>
      <div className='inputs'>
        <div className="inputs">
          새 비밀번호 <input type="password" onChange={onPWChange} name="m_pw" value={pwFormData.m_pw}/>
        </div>
        <div className="inputs">
          비밀번호 확인 <input type="password" onChange={onPWChange} name="m_check_pw" value={pwFormData.m_check_pw}/>
        </div>
        <div className="announce none">
        </div>
        <div>
          <button className='default' onClick={onPwClick}>변경하기</button>
        </div>
      </div>
    </div>
  );
};

export default PWSearch_step1;