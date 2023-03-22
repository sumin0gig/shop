import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCookie } from '../../API/Cookie';
import { getHeart } from '../../modules/getCartReducer';
import HeartC from './HeartC';

const Heart = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getHeart(Number(getCookie("userNo"))))
  },[dispatch])
  return (
    <HeartC/>    
  );
};

export default Heart;