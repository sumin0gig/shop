import axios from "axios";
import { Dispatch } from "redux";
import { API_URL } from "../API/api";

// 액션타입 선언
const GET_CART='getCartReducer/GET_CART';
const GET_HEART='getCartReducer/GET_HEART';

// 타입지정
export type cartDataType={
  m_no: number;
  p_no: number;
  cp_name: string;
  c_saleprice: number | null;
  c_price: number;
  c_amount: number;
  cp_img: string;
  cp_color: string;
  cp_size: string;
}
export type CartstateType={
  cart:cartDataType[]|null;
  heart:null
}

// <--- thunk 함수
export const getCartThunk=():any=>
async (dispatch:Dispatch)=>{
  try{
    const response= await axios.get(`${API_URL}/cart`)
    const data=response.data;
    dispatch({type:GET_CART, payload:data})
  }catch(e){
    alert(e);
  }
}

// ---> thunk 함수

// 초기값 지정
const initialState={
  cart:null,
  heart:null
}

// 리듀서 함수
function getCartReducer(state:CartstateType=initialState, action:any){
  switch (action.type) {
    case GET_CART:
      return{
        ...state,
        cart: action.payload
      }
    case GET_HEART:
      return{
        ...state,
        heart: action.payload
      }
    default:
      return state;
  }
}

export default getCartReducer;