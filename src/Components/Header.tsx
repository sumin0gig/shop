import React from 'react';
import { FaHeart, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { siteName } from '../App';
import './style/Header.css'
import { Link } from 'react-router-dom';
import { getCookie } from '../API/Cookie';
import HeaderOpener from './HeaderOpener';
import { useDispatch } from 'react-redux';
import { getBestList } from '../modules/getDataReducer';


const Header = () => {
	const dispatch= useDispatch();
	dispatch(getBestList())
	return (
		<header>
			<div className='head top'>
				<HeaderOpener/>
				<h1><Link to='/'>{siteName}</Link></h1>
				<ul className='headList openUl'>
					{!getCookie('authority')?
					<>
					<li><Link to='/login'>로그인</Link></li>
					<li><Link to='/join/1'>회원가입</Link></li>
					</>:
					<li><Link to='/logout'>로그아웃</Link></li>}
					{getCookie('authority')>0? <li><Link to='/admin'>관리자 페이지</Link></li>:<></>}
					<li>고객센터</li>
					<li><FaUserAlt/></li>
					<li><Link to='/cart'><FaShoppingCart/></Link></li>
					<li><FaHeart/></li>				
				</ul>
			</div>
			<div className='head bottom'>
				<ul className='openUl'>
					<li><Link to={"/product/best"}>BEST</Link></li>
					<li><Link to={"/product/new"}>NEW</Link></li>
				</ul>
				<ul className='openUl'>
					<li><Link to={"/product/cate1"}>아우터</Link></li>
					<li><Link to={"/product/cate2"}>상의</Link></li>
					<li><Link to={"/product/cate3"}>원피스</Link></li>
					<li><Link to={"/product/cate4"}>스커트</Link></li>
					<li><Link to={"/product/cate5"}>팬츠</Link></li>
					<li><Link to={"/product/cate6"}>가방</Link></li>
					<li><Link to={"/product/cate7"}>신발</Link></li>
					<li><Link to={"/product/cate8"}>악세사리</Link></li>
				</ul>
			</div>
			
		</header>
	);
};

export default Header;