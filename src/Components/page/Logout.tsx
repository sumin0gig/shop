import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeCookie } from "../../API/Cookie";

const Logout = () => {
  removeCookie('userName')
  removeCookie('authority')
  removeCookie('userNo')
  removeCookie('userPw')
  alert("로그아웃되었습니다.")
  window.location.href="/";
  return(
    <></>
  )
};

export default Logout;