import React , { useState } from 'react';
import Title from '../Title';

const PwSearch_step2 = () => {
  const [formdata, setFormData]=useState({
    m_pw:"",
    m_check_pw:""
  })
  const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}= e.target;
    setFormData({
      ...formdata,
      [name]:value
    })
  }
  return (
    <div className='main inner'>
      <Title title='비밀번호 바꾸기' center/>
      <div className='inputs'>
        <div className="inputs">
          새 비밀번호 <input type="password" onChange={onChange} name="m_pw"/>
        </div>
        <div className="inputs">
          비밀번호 확인 <input type="password" onChange={onChange} name="m_check_pw"/>
        </div>
      </div>
      <div>
        <button className='default'>로그인</button>
      </div>
    </div>
  );
};

export default PwSearch_step2;