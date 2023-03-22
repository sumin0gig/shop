import axios from "axios";
import { Dispatch } from "redux";
import { API_URL } from "../API/api";
import { memberDataType } from "./getDataReducer";

// 액션타입 선언
const GET_CART='getCartReducer/GET_CART';
const GET_HEART='getCartReducer/GET_HEART';
const GET_MEMBER='getCartReducer/GET_MEMBER';

// 타입지정
export type cartDataType={
  c_no?:number;
  m_no: number;
  p_no: number;
  pa_no: number;
  cp_name: string;
  c_saleprice: number | null;
  c_price: number;
  c_amount: number;
  cp_img: string;
  cp_color: string;
  cp_size: string;
}
// memberDataType은 getDataReducer
export type heartDataType={
  h_no:number;
  m_no:number;
  p_no:number;
  p_mainImg:string;
  p_name:string;
  p_price:number;
  p_saleprice:number;
}

export type CartstateType={
  cart:cartDataType[]|null;
  heart:heartDataType[]|null;
  member:memberDataType[]|null;
}

// <--- thunk 함수
export const getCartThunk=():any=>
async (dispatch:Dispatch)=>{
// 장바구니에 넣은 상품 
  try{
    const response= await axios.get(`${API_URL}/cart`)
    const data=response.data;
    dispatch({type:GET_CART, payload:data})
  }catch(e){
    alert(e);
  }
}
export const patchCartThunk=(data:cartDataType[]):any=>
// 장바구니에서 체크박스를 선택한 상품
async (dispatch:Dispatch)=>{
  try{
    dispatch({type:GET_CART, payload:data})
  }catch(e){
    alert(e);    
  }
}
export const delCartThunk=(data:{}[]):any=>
async (dispatch:Dispatch)=>{
  try{
    console.log(JSON.stringify(data));
    axios.delete(`${API_URL}/cart/${JSON.stringify(data)}`)
  }catch(e){
    alert(e);
  }
}

export const nowMember=(no:number):any=>
async (dispatch:Dispatch)=>{
  try{
    const response= await axios.get(`${API_URL}/member/${no}`)
    const data=response.data;
    dispatch({type:GET_MEMBER, payload:data})
  }catch(e){
    alert(e);
  }
}
export const patchMemberOne=(no:number,formdata:{
    m_name: string;
    m_tel_1: number;
    m_tel_2: number;
    m_tel_3: number;
    m_sms_check: boolean;
    m_mail_add1: string;
    m_mail_add2: string;
    m_mail_check: boolean;
}):any=>
async (dispatch:Dispatch)=>{
  try{
    axios.patch(`${API_URL}/member/${no}`,formdata)
    dispatch(nowMember(no))
  }catch(e){
    alert(e);
  }
}

export const getHeart=(no:number):any=>
async(dispatch:Dispatch)=>{
  try{
    const response= await axios.get(`${API_URL}/heart/${no}`)
    const data=response.data;
    dispatch({type:GET_HEART, payload:data})
  }catch(e){
    alert(e);
  }
}
export const delHeart=(userNo:number,no:number):any=>
async(dispatch:Dispatch)=>{
  try{
    axios.delete(`${API_URL}/heart/${no}`)
    dispatch(getHeart(userNo))
  }catch(e){
    alert(e)
  }
}

// ---> thunk 함수

// 초기값 지정
const initialState={
  cart:null,
  heart:null,
  member:null
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
    case GET_MEMBER:
      return{
        ...state,
        member: action.payload
      }
    default:
      return state;
  }
}

export default getCartReducer;