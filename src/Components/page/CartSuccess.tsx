import React from 'react';
import { Link } from 'react-router-dom';
import { TbHeartPlus } from "react-icons/tb"
import Title from '../Title';
import { getCookie } from '../../API/Cookie';

const CartSuccess = () => {
  const username=getCookie("userName")
  return (
    <div className='main inner'>
      <Title title='결제 완료' center/>
      <div className="cartSuccess_div">
        <h3>{username} 고객님</h3>
        <p className='size30'><TbHeartPlus/></p>
        <p>주문이 완료되었습니다.</p>
      </div>
      <Link to="/"><button className="default">메인으로</button></Link>
    </div>
  );
};

export default CartSuccess;