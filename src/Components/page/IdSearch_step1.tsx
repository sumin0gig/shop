import React , { useState } from 'react';
import Title from '../Title';
import "../style/Join.css"
import { useDispatch } from 'react-redux';
import { getMemberThunk, memberDataType } from '../../modules/getDataReducer';
import { useSelector } from 'react-redux';
import { rootState } from '../../modules';
import { useNavigate } from 'react-router-dom';


const IdSearch_step1 = () => {
  const navigate= useNavigate();
  const [formdata,setFormData]=useState({
    m_name:"",
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
	}
  const dispatch=useDispatch();
  const onClick=()=>{
    dispatch(getMemberThunk(JSON.stringify(formdata),"id"))
  }
  const member=useSelector((state:rootState)=>state.getDataReducer.member);
  const onClickLogin=()=>{navigate("/login")}
  const onClickPw=()=>{navigate("/pwSearch")}
  if(!member) return(
    <div className="main inner">
      <Title title='아이디 찾기' center/>
      <div>
        <div>
          <input type="text" placeholder='이름' onChange={onChange} name="m_name"/>
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
      </div>
      <div>
        <button className='default' type='button' onClick={onClick}>확인</button>
      </div>
    </div>
  )
  return (
    <div className='main inner'>
      <Title title='아이디 찾기' center/>
      <div className='grayDiv center'>
        <b>조회된 아이디는 {member&&member.length}건입니다.</b>
        {member&&member.map((m:memberDataType,i:number)=>
        <p key={i}>{m.m_id}</p>
        )}
      </div>
      <div>
        <button className='default' onClick={onClickLogin}>로그인</button>
        <button className='default white' onClick={onClickPw}>비밀번호찾기</button>
      </div>
    </div>
  );
};

export default IdSearch_step1;