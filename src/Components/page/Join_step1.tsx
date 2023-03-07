import React, { useState } from 'react';
import Title from '../Title';
import '../style/Join.css'
import JoinStepUl from './info/JoinStepUl';

const Join_step1 = () => {
	const [check,setCheck]=useState({
		step1:false,
		step2:false,
		step3:false
	});
	const turnToogle=(e:React.ChangeEvent<HTMLInputElement>,value:boolean)=>{
		setCheck({
			...check,
			[e.target.name]:value
		})
		console.log(check);
		
	}

	const onClick=()=>{
		if(!check.step1)return alert("이용약관에 동의해주세요."); 
		if(!check.step2)return alert("개인정보 처리방침에 동의해주세요."); 
		if(!check.step3)return alert("만 14세 이상만 가입가능합니다.");
		document.location="/join/2";
	}
	return (
		<div className='main inner'>
			엥? 카카오톡뭐?
			<Title title={"회원가입"}/>
			<JoinStepUl step={1}/>
			<div className='joinstepForm'>
				<iframe src="/info/user" title='user'/>
				<p><input type="radio" name='step1' id='step1_true' onChange={(e)=>turnToogle(e,true)}/> <label htmlFor="step1_true"> 동의함</label> </p>
				<p><input type="radio" name='step1' id='step1_false' onChange={(e)=>turnToogle(e,false)}/> <label htmlFor="step1_false"> 동의하지 않음</label></p>
			</div>
			<div className='joinstepForm'>
				<iframe src="/info/pri" title='pri'/>
				<p><input type="radio" name='step2' id='step2_true' onChange={(e)=>turnToogle(e,true)}/><label htmlFor="step2_true"> 동의함</label></p>
				<p><input type="radio" name='step2' id='step2_false' onChange={(e)=>turnToogle(e,false)}/><label htmlFor="step2_false"> 동의하지 않음</label></p>
			</div>
			<div className='joinstepForm'>
				<p><input type="radio" name='step3' id='step3_true' onChange={(e)=>turnToogle(e,true)}/><label htmlFor="step3_true"> 만 14세 이상입니다.</label></p>
				<p><input type="radio" name='step3' id='step3_false' onChange={(e)=>turnToogle(e,false)}/><label htmlFor="step3_false"> 만 14세 미만입니다.</label></p>
			</div>
			<button className='default' onClick={onClick}>확인</button>
		</div>
	);
};

export default Join_step1;