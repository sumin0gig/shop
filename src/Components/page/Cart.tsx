import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCartThunk } from '../../modules/getCartReducer';
import Title from '../Title';
import Cartlist from './Cartlist';
import "../style/Cart.css"

const Cart = () => {
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(getCartThunk())
  },[dispatch])
  return (
    <div className='main'>
      <div>
        <Title title='장바구니' center></Title>
      </div>
      <div className="inner">
        {/* map돌려서 리스트 출력 */}
        <Cartlist/>
        
        <div>
          <button className='default'>주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;