import React from 'react';
import Title from '../Title';
import JoinStepUl from './info/JoinStepUl';
import { Link } from 'react-router-dom';
import { TbHeartPlus } from "react-icons/tb"
import { getCookie } from '../../API/Cookie';



const Join_step3 = () => {
  const username=getCookie("username")
  return (
		<div className='main inner minheight300'>
			<Title title={"회원가입"}/>
			<JoinStepUl step={3}/>
			<div className='joinstepForm center'>
        <h3>{username} 고객님</h3>
        <p className='size30'><TbHeartPlus/></p>
        <p>회원가입을 진심으로 환영합니다.</p>
      </div>
      <Link to="/login"><button className='default'>로그인</button></Link>
    </div>
  );
};

export default Join_step3;