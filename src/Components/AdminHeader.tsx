import React, { useEffect } from 'react';
import { siteName } from '../App';
import './style/Header.css'
import { Link } from 'react-router-dom';
import { getCookie } from '../API/Cookie';
import { useDispatch } from 'react-redux';
import { getThunk } from '../modules/getDataReducer';

const AdminHeader = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getThunk())
  },[dispatch])
  

  if(getCookie('userId')!=="admin") alert("잘못된 접근입니다.");
  return (
    <>
    <header>
    <div className='head top'>
      <h1><Link to='/admin'>{siteName} 관리자 페이지</Link></h1>
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
        {/* 베스트, 신상, 일반상품추가제거 */}
        <li>고객 관리</li>
        {/* 고객 리스트 */}
        <li>메인배너 관리</li>
        {/* 메인 배너로 출력할 이미지 등록 제거, 링크걸기^^ */}
        <li>게시글 관리</li>
        {/* 배너 눌렀을때 이동할 게시글 */}
        <li>고객센터 관리</li>
        {/* ? */}
      </ul>
    </div>
  </header>
    </>
  );
};

export default AdminHeader;