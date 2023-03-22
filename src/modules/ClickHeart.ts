import axios from 'axios';
import React from 'react';
import { API_URL } from '../API/api';
import { getCookie } from '../API/Cookie';


const ClickHeart = (p_no:number,p_mainImg:string,p_name:string,p_price:number,p_saleprice:number) => {
  const formdata={
    m_no:getCookie("userNo"),
    p_no:p_no,
    p_mainImg:p_mainImg,
    p_name:p_name,
    p_price:p_price,
    p_saleprice:p_saleprice
  }
  axios.post(`${API_URL}/heart/add`,formdata)
  alert("추가되었습니다.")
};

export default ClickHeart;