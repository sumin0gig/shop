import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCookie } from '../../API/Cookie';
import { nowMember } from '../../modules/getCartReducer';
import MyProfileC from './MyProfileC';

const MyProfile = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(nowMember(Number(getCookie("userNo"))));    
  },[dispatch])
  return (
    <>
    <MyProfileC/>
    </>
  );
};

export default MyProfile;