import React from 'react';

const JoinStepUl = ({step}:{step:number}) => {
	return (
		<ul className='joinsteps'>
			<li className={step===1?'joinstep on':'joinstep'}>
				<b>01</b>
				<div>이용약관</div>
				<div>동의</div>
			</li>
			<hr className='rotateline'/>
			<li className={step===2?'joinstep on':'joinstep'}>
				<b>02</b>
				<div>회원정보</div>
				<div>입력</div>
			</li>
			<hr className='rotateline'/>
			<li className={step===3?'joinstep on':'joinstep'}>
				<b>03</b>
				<div>회원가입</div>
				<div>완료</div>
			</li>
		</ul>
	);
};

export default JoinStepUl;