import React from 'react';
import { siteName } from '../../../App';

const Info_pri = () => {
	return (
		<div className='info_iframe'>
			<h4>개인정보처리방침</h4>
			<pre>
				<table>
					<colgroup>
						<col width="50%"/>
						<col width="25%"/>
						<col width="25%"/>
					</colgroup>
					<thead>
						<tr>
							<th scope="row">수집 목적</th>
							<th scope="row">수집 항목</th>
							<th scope="row">보유 기간</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>회원 가입의사 확인, 이용자 식별 및 본인여부, 회원자격 유지·관리, 계약 이행 및 약관변경 등의 고지를 위한 연락, 본인의사 확인 및 민원 등의 고객 고충 처리, 부정이용 방지, 비인가 사용방지 및 서비스 제공 및 계약의 이행, 서비스 이용 및 상담, 문의, 후기 등 원활한 의사소통 경로 확보, 맞춤형 회원 서비스 제공, 거점 기반 서비스 제공</td>
							<td>이름, 아이디, 비밀번호, 휴대폰번호, 이메일, 주소</td>
							<td>회원 탈퇴 <br/>즉시 파기 <br/><br/>부정이용 방지를 위하여 30일 동안 보관 (아이디, 휴대폰 번호) 후 파기 </td>
						</tr>
						<tr>
							<td>서비스방문 및 이용기록 분석, 부정이용 방지 등을 위한 기록 관리</td>
							<td>서비스 이용기록, IP주소, 쿠키, MAC 주소, 모바일 기기정보(광고식별자, OS/ 앱 버전)</td>
							<td>회원 탈퇴 즉시 또는 이용 목적 달성 즉시 파기</td>
						</tr>
					</tbody>
				</table>
{`서비스 제공을 위해서 필요한 최소한의 개인정보입니다. 동의를 해 주셔야 서비스를 이용하실 수 있으며, 동의하지 않으실 경우 서비스에 제한이 있을 수 있습니다.
본 페이지는 실제 이용되는 페이지가 아닌 프론트엔드 개발자의 포트폴리오용으로 작성된 페이지입니다.`}
			</pre>
		</div>

	)
};

export default Info_pri;