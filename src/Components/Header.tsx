import React from 'react';
import { FaHeart, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { siteName } from '../App';
import './style/Header.css'
import { Link } from 'react-router-dom';
import { getCookie } from '../API/Cookie';


const Header = () => {
	const onClick=()=>{
		document.querySelector(".opener")?.classList.toggle("opener-on");
	}
	return (
		<header>
			<div className='head top'>
				<ul className='wrapper'>
					<div className='wrap'>
						{/* 여기에 링크 반복적으로 돌아가며 출력 */}
						<div>
							<a href="링크" target="_self">
								<strong>번호.</strong> 이름							
							</a>
						</div>
						<button className='wrapbtn' onClick={onClick}>▼</button>
					</div>
					<div className='opener'>
						<table>
							<caption>인기 검색어</caption>
							<tbody>
								{/* 여기에 tr 반복적으로 돌아가며 출력 */}
								<tr>
									<td><strong>번호.</strong>이름</td>
									<td>NEW</td>
								</tr>
							</tbody>
						</table>
					</div>
				</ul>
				<h1><Link to='/'>{siteName}</Link></h1>
				<ul className='headList openUl'>
					{!getCookie('userId')?
					<>
					<li><Link to='/login'>로그인</Link></li>
					<li><Link to='/join/1'>회원가입</Link></li>
					</>:
					<li><Link to='/logout'>로그아웃</Link></li>}
					{getCookie('userId')==="admin"? <li><Link to='/admin'>관리자 페이지</Link></li>:<></>}
					<li>고객센터</li>
					<li><FaUserAlt/></li>
					<li><FaShoppingCart/></li>
					<li><FaHeart/></li>				
				</ul>
			</div>
			<div className='head bottom'>
				<ul className='openUl'>
					<li>BEST</li>
					<li>신상</li>
				</ul>
				<ul className='openUl'>
					<li>아우터</li>
					<li>상의</li>
					<li>원피스</li>
					<li>스커트</li>
					<li>팬츠</li>
					<li>가방</li>
					<li>신발</li>
					<li>악세사리</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;