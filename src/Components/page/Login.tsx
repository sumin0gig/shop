import React, { useState } from 'react';
import { siteName } from '../../App';
import Title from '../Title';
import { GrCheckmark } from "react-icons/gr";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import'../style/Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../API/api';
import { setCookie } from '../../API/Cookie';
import { useDispatch } from 'react-redux';
import { DEL_MEMBER } from '../../modules/getDataReducer';

const Login = () => {
  const [loginData, setloginData]=useState({
    m_id:"",
    m_pw:""
  })
  const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}= e.target;
    setloginData({
      ...loginData,
      [name]:value
    })
  }
  const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(loginData.m_id===""||loginData.m_pw===""){
      alert("아이디와 비밀번호를 입력해주세요.")
    }else{
      axios.get(`${API_URL}/login/${JSON.stringify(loginData)}`)
      .then((result)=>{        
        console.log(result);
        const {m_id,m_name,m_no,m_pw,m_authority}=result.data[0];
        if(m_id){
          if(m_pw===false){
            alert("비밀번호가 틀렸습니다.")
          }else{
            alert("로그인 되었습니다.")
            let expires= new Date();
            expires.setMinutes(expires.getMinutes()+1440);
            setCookie('authority',m_authority,{path:"/",expires});
            setCookie('userName',m_name,{path:"/",expires});
            setCookie('userNo',m_no,{path:"/",expires});
            setCookie('userPw',m_pw,{path:"/",expires});
            window.history.back();
          }
        }else{
          alert("존재하지 않는 아이디입니다.")
        }
      }).catch(e=>alert(e));
    }
  }
  const dispatch=useDispatch()
  dispatch({type:DEL_MEMBER})
  return (
		<div className='main inner'>
      <div className='loginform'>
        <form className='loginform_left' onSubmit={onSubmit}>
          <Title title='로그인'/>
          <div className='logininputs'>
            <input type="text" placeholder='ID' onChange={onChange} name="m_id"/>
            <input type="password" placeholder='PW' onChange={onChange} name="m_pw"/>
          </div>
          <div className='loginSearch'>
            <p><Link to="/idSearch">아이디 찾기</Link></p>
            <p><Link to="/pwSearch">비밀번호 찾기</Link></p>
          </div>
          <button className='default'>로그인</button>
        </form>
        <div className='loginform_right'>
          <Title title={`${siteName} 가입하기`}/>
          <p><span><GrCheckmark/></span> 매달 쏟아지는 이벤트를 즐기세요.</p>
          <p><span><GrCheckmark/></span> 회원 전용 추가 할인 혜택을 받아보세요.</p>
          <p><span><GrCheckmark/></span> 회원만의 포인트 적립 및 사용을 누려보세요.</p>
          <p><cite> {siteName}의 베스트 제품을 지금 만나보세요!</cite></p>
          <div className='loginJoin'>
            <Link to="/join/1"><h4><BsFillArrowRightCircleFill/> 회원가입하기</h4></Link>
          </div>
        </div>
        
      </div>
      <div className='loginbanner '>
        배너
      </div>
    </div>
  );
};

export default Login;