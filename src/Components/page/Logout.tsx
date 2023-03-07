import React from 'react';
import { removeCookie } from "../../API/Cookie";

const Logout = () => {
  removeCookie('userId')
  removeCookie('userPw')
  alert("로그아웃되었습니다.")
  window.history.back()
  return (
    <div>
      
    </div>
  );
};

export default Logout;