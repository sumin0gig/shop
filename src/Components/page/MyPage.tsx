import React from 'react';
import { getCookie } from '../../API/Cookie';
import Title from '../Title';
import "../style/MyPage.css"
import { Link } from 'react-router-dom';

const MyPage = () => {
  return (
    <div className='main inner'>
      <Title title='MY PAGE' center/>
      <div>
        안녕하세요,
        <b>{getCookie("userName")}</b>님
      </div>
      <div className='mpList'>
        <Link to="/"><div className='mpList_box'>
          <h3>ORDER</h3>
          <pre>고객님께서 주문하신 상품의</pre>
          <pre>주문내역을 확인하실 수 있습니다.</pre>
        </div></Link>
        <div className='mpList_box'>
          <h3>PROFILE</h3>
          <pre>고객님의 개인정보를</pre>
          <pre>관리하실 수 있습니다.</pre>
        </div>
        <div className='mpList_box'>
          <h3>WISH LIST</h3>
          <pre>관심상품으로 등록하신</pre>
          <pre>상품의 목록을 보여드립니다.</pre>
        </div>
      </div>
    </div>
  );
};

export default MyPage;