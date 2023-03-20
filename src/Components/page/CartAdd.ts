import axios from 'axios';
import React from 'react';
import { API_URL } from '../../API/api';
import { getCookie } from '../../API/Cookie';
import { cartDataType } from '../../modules/getCartReducer';
import { productDataType } from '../../modules/getDataReducer';

const CartAdd = (
  formdata:{
  pa_no: number;
  color: string;
  size: string;
  },
  data:productDataType[]
) => {
  const dataset:cartDataType={
    m_no:getCookie("userNo"),
    p_no:data[0].p_no,
    pa_no:formdata.pa_no,
    cp_name:data[0].p_name,
    c_saleprice:data[0].p_saleprice,
    c_price:data[0].p_price,
    c_amount:1,
    cp_img:data[0].p_mainImg,
    cp_color:formdata.color,
    cp_size:formdata.size,
  }
axios.post(`${API_URL}/cart/add`,dataset)
alert(`장바구니에 담겼습니다.`)
};

export default CartAdd;