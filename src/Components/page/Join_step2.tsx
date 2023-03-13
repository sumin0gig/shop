import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../API/api';
import { setCookie } from '../../API/Cookie';
import Title from '../Title';
import JoinStepUl from './info/JoinStepUl';

export type formDataType={
	name:string,
	id:string,
	id_check:boolean,
	pw:string,
	pw_check:string,
	tel_1:string,
	tel_2:string,
	tel_3:string,
	tel_check:boolean,
	birth:string|number,
	sms_check:boolean,
	mail_add1:string,
	mail_add2:string,
	mail_check:boolean
}
const Join_step2 = () => {
	const nameRef = useRef<HTMLInputElement>(null);
	const idRef = useRef<HTMLInputElement>(null);
	const pwRef = useRef<HTMLInputElement>(null);
	const pwChRef = useRef<HTMLInputElement>(null);
	const telChRef = useRef<HTMLInputElement>(null);
	const refMove=(ref:React.RefObject<HTMLInputElement>)=>{
		ref.current!.focus();
		window.scrollTo(0,ref.current!.height)
	}
	let navigate=	useNavigate();

	const minYear= new Date().getFullYear()-14
	const [formdata,setFormData]=useState<formDataType>({
		name:"",
		id:"",
		id_check:false,
		pw:"",
		pw_check:"",
		tel_1:"010",
		tel_2:"",
		tel_3:"",
		tel_check:false,
		birth:minYear,
		sms_check:true,
		mail_add1:"",
		mail_add2:"",
		mail_check:true
	})
	const onChange=(e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLSelectElement>)=>{
		const {name,value}=e.target;
		name==="id"?
		setFormData({
			...formdata,
			[name]: value,
			id_check: false
		}):
		name==='tel_1'|| name==='tel_2'|| name==='tel_3' ?
		setFormData({
			...formdata,
			[name]: value,
			tel_check:false
		}):
		setFormData({
			...formdata,
			[name]: value
		})
	}
	const turnToogle=(e:React.ChangeEvent<HTMLInputElement>,value:boolean)=>{
		setFormData({
			...formdata,
			[e.target.name]:value
		})
	}

	const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
		e.preventDefault();
	}
	const onClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
		e.preventDefault();
		if(formdata.name===""){
			alert("이름을 적어주세요.")
			refMove(nameRef)
		}else if(!formdata.id_check){
			alert("아이디 중복확인을 진행해주세요.")
			refMove(idRef)
		}else if(!/.{8,}/g.test(formdata.pw)){
			alert("비밀번호는 8자 이상 입력해주세요.")
			document.querySelector(".pwAnnounce")!.innerHTML="비밀번호는 8자 이상 입력해주세요."
			refMove(pwRef)
		}else if(formdata.pw!==formdata.pw_check){
			alert("비밀번호와 비밀번호 체크가 일치하지 않습니다.")
			refMove(pwChRef)
		}else if(!formdata.tel_check){
			alert("휴대폰 인증을 진행해주세요.")
			refMove(telChRef)
		}else{
			axios.post(`${API_URL}/join`,formdata)
			setCookie("username",formdata.name)
			navigate("/join/3");
		}
	}
	const onIdCheck= (e:React.MouseEvent<HTMLButtonElement>) =>{
		e.preventDefault();
		axios.get(`${API_URL}/join/id`)
		.then(async res=>{
			const datas= await res.data.map((v:{m_id:null|string})=>v.m_id)
			datas.includes(formdata.id)? setFormData({...formdata, id_check:false}) : setFormData({...formdata, id_check:true})
			datas.includes(formdata.id)? alert("사용할 수 없는 아이디입니다.") : alert("사용할 수 있는 아이디입니다.")
			}).catch(e=>{
			alert(e)
		})
	}
	const onTelCheck=()=>{
		axios.get(`${API_URL}/join/tel`)
		.then(async res=>{
			const datas= await res.data.map((v:{m_tel_1:null|string, m_tel_2:null|string, m_tel_3:null|string})=>
				v.m_tel_1!+v.m_tel_2+v.m_tel_3)
			const tel= formdata.tel_1+formdata.tel_2+formdata.tel_3
			datas.includes(tel)? setFormData({...formdata, tel_check:false}) : setFormData({...formdata, tel_check:true})
			datas.includes(tel)? alert("이미 사용된 전화번호입니다."):alert("전화번호가 확인되었습니다.")
			}).catch(e=>{
			alert(e)
		})
	}
	
	useEffect(()=>{
		document.querySelector(".id_check_p")!.innerHTML=
		formdata.id_check? "확인되었습니다.": "버튼을 눌러 아이디 중복체크를 진행해주세요.";
		document.querySelector(".tel_check_p")!.innerHTML=
		formdata.tel_check? "확인되었습니다.": "버튼을 눌러 휴대폰 인증을 진행해주세요.";
	},[formdata])
	
	return (
		<div className='main inner'>
			<Title title={"회원가입"} center={true}/>
			<JoinStepUl step={2}/>
			<form onSubmit={onSubmit} className='submitForm'>
				<table className='joinstepForm mini'>
					<tbody>
						<tr>
							<td>이름<span className="star">*</span></td>
							<td>
								<input type="text" onChange={onChange} name="name" ref={nameRef}/>
							</td>
						</tr>
						<tr>
							<td>아이디<span className="star">*</span></td>
							<td>
								<input type="text" onChange={onChange} name="id" ref={idRef}/>
								<p className='id_check_p'></p>
							</td>
							<td>
								<button className='default white' onClick={onIdCheck}>중복확인</button>
							</td>
						</tr>
						<tr>
							<td>비밀번호<span className="star">*</span></td>
							<td>
								<input type="password" onChange={onChange} name="pw" ref={pwRef}/>
								<p className='pwAnnounce'>비밀번호는 8자 이상 입력해주세요.</p>
							</td>
						</tr>
						<tr>
							<td>비밀번호 확인<span className="star">*</span></td>
							<td>
								<input type="password" onChange={onChange} name="pw_check" ref={pwChRef}/>
								<p className='pwChAnnounce'>{formdata.pw===formdata.pw_check?"":"비밀번호가 일치하지 않습니다."}</p>
							</td>
						</tr>
						<tr>
							<td>휴대폰 번호<span className="star">*</span></td>
							<td>
								<div className='inputs'>
									<select onChange={onChange} name="tel_1" id="">
										<option value="010">010</option>
										<option value="011">011</option>
										<option value="016">016</option>
										<option value="017">017</option>
									</select>
									<input type="text" maxLength={4} onChange={onChange} name="tel_2" ref={telChRef}/>
									<input type="text" maxLength={4} onChange={onChange} name="tel_3"/>
								</div>
								<p className='tel_check_p'></p>
							</td>
							<td>
								<button className='default white' onClick={onTelCheck}>휴대폰 인증</button>
							</td>
						</tr>
						<tr>
							<td>생년월일</td>
							<td>
								<select onChange={onChange} name="birth">
									<option value={minYear}>{minYear}</option>
									{/* 이거 달력 넣어줘 */}
								</select>
							</td>
						</tr>
						<tr>
							<td>sms 수신 여부</td>
							<td>
								<input type="radio" name="sms_check" id="sms_true" onChange={(e)=>turnToogle(e,true)} checked={formdata.sms_check?true:false}/>
									<label htmlFor="sms_true"> 예</label>
								<input type="radio" name="sms_check" id="sms_false"onChange={(e)=>turnToogle(e,false)} checked={!formdata.sms_check?true:false}/>
									<label htmlFor="sms_false"> 아니오</label>
							</td>
						</tr>
						<tr>
							<td>이메일</td>
							<td>
								<div className='inputs'>
									<input type="text" onChange={onChange} name="mail_add1"/>
									@
									<input type="text" onChange={onChange} name="mail_add2"/>
								</div>
							</td>
						</tr>
						<tr>
							<td>메일 수신 여부</td>
							<td>
								<input type="radio" name="mail_check" id="email_true" onChange={(e)=>turnToogle(e,true)} checked={formdata.mail_check?true:false}/>
									<label htmlFor="email_true"> 예</label>
								<input type="radio" name="mail_check" id="email_false" onChange={(e)=>turnToogle(e,false)} checked={!formdata.mail_check?true:false}/>
									<label htmlFor="email_false"> 아니오</label>
							</td>
						</tr>
						<tr>
							<td>추천인 아이디</td>
							<td>
								<input type="text" />
							</td>
						</tr>
					</tbody>
				</table>
				<div>
					<button className='default' onClick={onClick}>전송</button>
					<button type='reset' className='default white'>취소</button>
				</div>
			</form>
		</div>
	);
};

export default Join_step2;