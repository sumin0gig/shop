import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCartThunk, nowMember } from '../../modules/getCartReducer';
import Title from '../Title';
import Cartlist from './Cartlist';
import "../style/Cart.css"
import { getCookie } from '../../API/Cookie';

const Cart = () => {
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(getCartThunk())
    dispatch(nowMember(getCookie("userNo")))
  },[dispatch])
  return (
    <div className='main'>
      <div>
        <Title title='장바구니' center></Title>
      </div>
      <div className="inner">
        <Cartlist/>
      </div>
    </div>
  );
};

export default Cart;