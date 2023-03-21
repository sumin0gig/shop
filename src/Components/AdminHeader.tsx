import React from 'react';
import { siteName } from '../App';
import './style/Header.css'
import './style/AdmHeader.css'
import { Link } from 'react-router-dom';
import { getCookie } from '../API/Cookie';

const AdminHeader = () => {  
  if(getCookie('authority')<1||getCookie('authority')===undefined) alert("잘못된 접근입니다.");
  window.scrollTo(0,0)
  return (
    <>
    <header>
    <div className='head top'>
      <h1><Link to='/admin/product'>{siteName} 관리자 페이지</Link></h1>
      <ul className='headList openUl'>
        <li><Link to='/logout'>로그아웃</Link></li>
        <li><Link to='/'> 홈페이지</Link></li>		
      </ul>
    </div>
    <div className='head'>
      <ul className='openUl'>
        <li>사이트 설정</li>
        {/*
          사이트 이름, CUSTOMER CENTER, ABOUT logo, 교환/반품주소지 ,ONLY logo등
          header에 들어갈 내용
        */}
        <li>디자인 설정</li>
        {/* 사이트의 디자인...바꿀 수 있ㄱ ㅔ할 수 있을가...천천히하자 */}
      </ul>
      <ul className='openUl'>
        <li><Link to='/admin/product'> 상품 관리</Link></li>
        <li><Link to='/admin/member'> 멤버 관리</Link></li>
        <li><Link to='/admin/banner'>메인배너 관리</Link></li>
      </ul>
    </div>
  </header>
    </>
  );
};

export default AdminHeader;