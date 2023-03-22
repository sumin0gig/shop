import React from 'react';
import { getCookie } from '../../API/Cookie';
import Title from '../Title';
import "../style/MyPage.css"
import { Link } from 'react-router-dom';
import { nowMember } from '../../modules/getCartReducer';
import { useDispatch } from 'react-redux';

const MyPage = () => {
  const dispatch= useDispatch();
  dispatch(nowMember(Number(getCookie("userNo"))));
  return (
    <div className='main'>
      <div className="inner">
        <Title title='MY PAGE' center/>
        <div>
          안녕하세요,
          <b>{getCookie("userName")}</b>님
        </div>
        <div className='mpBox'>
          <div>
            <span>적립금</span>
            <pre>0원</pre>
          </div>
          <div>
            <span>포인트</span>
            <pre>0원</pre>
          </div>
          <div>
            <span>쿠폰</span>
            <pre>0장</pre>
          </div>
          <div>
            <span>배송쿠폰</span>
            <pre>0장</pre>
          </div>
        </div>
        <div className='mpList'>
          <Link to="/myprofile">
          <div className='mpList_box'>          
            <h3>PROFILE</h3>
            <pre>고객님의 개인정보를</pre>
            <pre>관리하실 수 있습니다.</pre>
          </div>
          </Link>  

          <Link to="/heart">
          <div className='mpList_box'>
            <h3>HEART</h3>
            <pre>고객님이 관심있으신 상품을</pre>
            <pre>관리하실 수 있습니다.</pre>
          </div>
          </Link>

          <Link to="/info/guide">
          <div className='mpList_box'>
            <h3>INSTRUCTIONS</h3>
            <pre>현재 이용중인 사이트의</pre>
            <pre>이용안내를 읽어보실 수 있습니다.</pre>
          </div>
          </Link>

          <Link to="/info/use">
          <div className='mpList_box'>
            <h3>CLAUSE</h3>
            <pre>현재 이용중인 사이트의</pre>
            <pre>이용약관을 읽어보실 수 있습니다.</pre>
          </div>
          </Link>
        </div>
      </div>
      

    </div>
  );
};

export default MyPage;