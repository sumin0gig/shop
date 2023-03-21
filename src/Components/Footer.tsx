import React from 'react';
import { siteName } from '../App';
import Commentbox from './Commentbox';
import './style/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer>
			<div className='foot top'>
				<div>
					<Commentbox heading='CUSTOMER CENTER' paragraph={[
						'월~금 : am 11 ~ pm 5  점심시간 : pm 12 ~ 1',
						'(토/일/공휴일은 휴무)'
					]}/>
					<Commentbox heading='NOTICE' paragraph={[
						'- 2023년 설연휴 배송공지',
						'- 택배사의 배송비 인상정책으로 인한 택배비 인상',
						'- [긴급공지] 죄송함과 감사의 마음을 담아 오늘 하루 무료배송 진행 합니다.'
						]}/>		
				</div>
				<div>
					<Commentbox heading={`ABOUT ${siteName}`}  paragraph={[
						`${siteName}그룹 주식회사`,
						'대표 : 김OO | 전화: 1000-0000 | 팩스 : 02)0000-0000',
						`주소 : 서울특별시 OO구 OO동 0000-00 ${siteName}`,
						'통신판매업 신고 : 2000-서울OO-0000',
						'사업자등록번호 : 200-00-00000',
						'개인정보보호책임자 : OOO,OOO (OOOOOO@naver.com)',
						'제휴,협찬,유통 문의 : OOOOOOO@naver.com'
					]}/>
				</div>
				<div>
					<Commentbox heading='DELIVERY' paragraph={[`교환/반품주소지 : 서울시 OO구 OO동 000-00 1층 ${siteName}담당`]}/>
					<Commentbox heading={`ONLY ${siteName}`} paragraph={[
						'다양한 배송시스템 1 - 오늘출발',
						'다양한 배송시스템 2 - 새벽도착',
						'다양한 배송시스템 3 - 새벽도착',
						'2천평 규모의 물류서비스 - 스팀케어부터 클린커버까지',
					]}/>
				</div>
			</div>
			<div className='foot bottom'>
				<ul className='openUl'>
					<li><Link to="/info/guide">이용안내</Link></li>
					<li><Link to="/info/use">이용약관</Link></li>
					<li><Link to="/info/pr">개인정보처리방침</Link></li>
					<li><Link to="/info/recruit">리크루트</Link></li>
				</ul>
				<ul className='openUl'>
					<li>
						<a href="https://www.inicis.com/" target="_blank" rel='noreferrer'>
							<img src="/ft_mark1.gif" alt="KG이니시스"/>
						</a>
					</li>
					<li>
						<a href="https://www.cjlogistics.com/ko/tool/parcel/tracking" target="_blank" rel='noreferrer'>
							<img src="/ft_mark2.gif" alt="CJ대한통운"/>
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;