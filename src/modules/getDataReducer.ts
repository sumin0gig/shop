import axios from "axios";
import { Dispatch } from "redux";
import { API_URL } from "../API/api";
import { deprecated } from "typesafe-actions";
const { createStandardAction } = deprecated;

// 1.액션타입 선언
const LOADING='getDataReducer/LOADING';
const GET_MEMBER='getDataReducer/GET_MEMBER';
export const DEL_MEMBER='getDataReducer/DEL_MEMBER';
const GET_PRODUCT='getDataReducer/GET_PRODUCT';
const GET_PRODUCT_AMOUNT='getDataReducer/GET_PRODUCT_AMOUNT';
const GET_BEST_PRODUCT='getDataReducer/GET_BEST_PRODUCT';
const GET_BANNER='getDataReducer/GET_BANNER';

// 타입지정
export type memberDataType={
  m_no:number,
  m_name:string,
  m_id:string,
  m_pw?:number,
  m_tel_1:number,
  m_tel_2:number,
  m_tel_3:number,
  m_birth:number,
  m_sms_check:boolean,
  m_mail_add1:string,
  m_mail_add2:string,
  m_mail_check:boolean,
  m_authority:number
}
export type productDataType={
  p_no:number,
  p_name:string,
  p_price:number,
  p_saleprice:number|null,
  p_category:string,
  p_isbest:string,
  p_isbestNo?:string,
  p_isnew:string,
  p_mainImg:string,
  p_mainMiniImg1?:string|null,
  p_mainMiniImg2?:string|null,
  p_mainMiniImg3?:string|null,
  p_mainMiniImg4?:string|null,
  p_annImg?:string|null,
}
export type prodcutAmountDataType={
  pa_no?:number,
  p_no:number,
  pa_color:string,
  pa_size:string,
  pa_amount:string
}
export type bannerDataType={
  b_no:number,
  b_img:string,
  b_name:string,
  b_link:string
}

export type stateType = {
  loading: boolean;
  member: memberDataType[]|null;
  product: productDataType[]|null;
  product_amount: prodcutAmountDataType[]|null;
  bestproduct: []|null;
  banner:bannerDataType[]|null,
};

// <----thunk 함수

export const getMemberThunk=(formData:string,state:string):any=>
async (dispatch: Dispatch) => {
  try{
    const response= await axios.get(`${API_URL}/search/${state}/${formData}`);
    const data= response.data;
    dispatch({type:GET_MEMBER, payload:data})
  }catch(e){
    alert(e);
  }
}

export const getThunk = (): any => 
async (dispatch: Dispatch) => {
  dispatch({type:LOADING})
  try {
    const response= await axios.get(`${API_URL}/admin/product`);
    const data= response.data;
    dispatch({type:GET_PRODUCT, payload:data})
  } catch (e) {
    alert(e);
  }
};
export const patchThunk=(isData: { p_isbest: string; p_isnew: string; }):any=>
// admin 수정기능
async (dispatch: Dispatch) => {
  dispatch({type:LOADING})
  try {
    axios.patch(`${API_URL}/admin/product/update/is`,isData);
    const response= await axios.get(`${API_URL}/admin/product`);
    const data= response.data;
    dispatch({type:GET_PRODUCT, payload:data})
  } catch (e) {
    alert(e);
  }
};
export const patchIsbestNo=(isData:{}):any=>
// admin best 수정기능
async(dispatch:Dispatch)=>{
  dispatch({type:LOADING})
  try{
    axios.patch(`${API_URL}/admin/product/update/best`,isData);
    const response= await axios.get(`${API_URL}/admin/product`);
    const data=response.data;
    dispatch({type:GET_PRODUCT, payload:data})
  } catch(e){
    alert(e)
  }
}

export const getSomeThunk=(isSearch:string):any=>
// admin 검색기능
async (dispatch: Dispatch) => {
  dispatch({type:LOADING})
  try{
    const response= await axios.get(`${API_URL}/admin/product/some/${isSearch}`);
    const data= response.data;
    dispatch({type:GET_PRODUCT, payload:data})
  }catch(e){
    alert(e);
  }
}


export const getSomeCate=(cate:string):any=>
// 카테고리별 product 출력기능 
async(dispatch:Dispatch)=>{
  try{
    const response= await axios.get(`${API_URL}/product/some/${cate}`);
    const data= response.data;
    dispatch({type:GET_PRODUCT, payload:data})
  }catch(e){
    alert(e);
  }
}

export const getSomeIs=(state:string):any=>
// new, best product 출력기능
async(dispatch:Dispatch)=>{
  try{
    const response= await axios.get(`${API_URL}/product/Is/${state}`);
    const data= response.data;
    dispatch({type:GET_PRODUCT,payload:data});
  }catch(e){
    alert(e);
  }
}
export const getBestList=():any=>
// best product no 출력기능
async(dispatch:Dispatch)=>{
  try{
    const response= await axios.get(`${API_URL}/product/IsBest`);
    const data= response.data;
    dispatch({type:GET_BEST_PRODUCT, payload:data})
  }catch(e){
    alert(e);
  }
}

export const getNo=(no:string):any=>
// 제품 상세보기 기능
async(dispatch:Dispatch)=>{
  try{
    const response= await axios.get(`${API_URL}/product/view/${no}`);
    const data= response.data;
    dispatch({type:GET_PRODUCT,payload:data});
    const amountResponse= await axios.get(`${API_URL}/product/view/amount/${no}`);
    const amountData= amountResponse.data;
    dispatch({type:GET_PRODUCT_AMOUNT, payload:amountData})
  }catch(e){
    alert(e);
  }
}

export const getAmountThunk=():any=>
// admin-상품관리-수량 설정
async(dispatch:Dispatch)=>{
  try{
    const response= await axios.get(`${API_URL}/admin/product/view/amount`);
    const data= response.data;
    dispatch({type:GET_PRODUCT_AMOUNT, payload:data});
  }catch(e){
    alert(e);
  }
}
export const patchAmount=(
// 상품 수량 + 혹은 - 
  no:number,
  formData:{pa_amount: string;plus_amount: string;}
  ):any=>
async(dispatch:Dispatch)=>{
  dispatch({type:LOADING})
  try{
    axios.patch(`${API_URL}/admin/product/amount/${no}`,formData)
    dispatch(getAmountThunk())
  }catch(e){
    alert(e);
  }
}
export const delAmount=(no:number):any=>
// 상품 옵션(사이즈,색상) 삭제
async(dispatch:Dispatch)=>{
  dispatch({type:LOADING})
  try{
    axios.delete(`${API_URL}/admin/product/amount/${no}`)
    dispatch(getAmountThunk())
  }catch(e){
    alert(e);
  }
}

export const postAmount=(
// 상품 옵션(사이즈,색상) 추가 
  formData:{  p_no: number|string,pa_size: null|string,pa_color: null|string,pa_amount: null|string}
):any=>
async (dispatch:Dispatch)=>{
  dispatch({type:LOADING})
  try{
    axios.post(`${API_URL}/admin/product/amount`,formData)
    dispatch(getAmountThunk())
  }catch(e){
    alert(e);
  }
}

export const getAllmember=():any=>
async (dispatch:Dispatch)=>{
  dispatch({type:LOADING})
  try{
    const response= await axios.get(`${API_URL}/admin/member`)
    const data= response.data;
    dispatch({type:GET_MEMBER, payload:data})
  }catch(e){
    alert(e);
  }
}
export const patchMember=(formData:{
  m_no: number,
  m_authority:number
}):any=>
async (dispatch:Dispatch)=>{
  dispatch({type:LOADING})
  try{
    axios.patch(`${API_URL}/admin/member`,formData)
    dispatch(getAllmember())
  }catch(e){
    alert(e);
  }
}
export const getBanner=():any=>
async (dispatch:Dispatch)=>{
  dispatch({type:LOADING})
  try{
    const response=await axios.get(`${API_URL}/admin/banner`)
    const data= response.data
    dispatch({type:GET_BANNER, payload:data})
  }catch(e){
    console.log(e);
  }
}
export const postBanner=(formData:{
  b_img: string;
  b_name: string;
  b_link: string;
}):any=>
async (dispatch:Dispatch)=>{
  dispatch({type:LOADING})
  try{
    axios.post(`${API_URL}/admin/banner`,formData)
    dispatch(getBanner());
  }catch(e){
    console.log(e);
    
  }
}
export const patchBanner=(formData:{
  b_no: number;
  b_img: string;
  b_name: string;
  b_link: string;
}):any=>
async (dispatch:Dispatch)=>{
  dispatch({type:LOADING})
  try{
    axios.patch(`${API_URL}/admin/banner`,formData)
    dispatch(getBanner());
  }catch(e){
    console.log(e);
    
  }
}
export const delBanner=(no:number):any=>
async (dispatch:Dispatch)=>{
  dispatch({type:LOADING})
  try{
    axios.delete(`${API_URL}/admin/banner/${no}`)
    dispatch(getBanner());
  }catch(e){
    console.log(e);
    
  }
}

// Thunk함수 --->

// 초기값 지정 
const initialState={
  loading: false,
  member:null,
	product: null,
  product_amount:null,
  bestproduct:null,
  banner:null
}

// 리듀서 함수
function getDataReducer(state: stateType = initialState,action: any) {
  switch (action.type) {
    case LOADING:
      return{
        ...state,
        loading: true,
      } 
    case GET_MEMBER:
      return{
        ...state,
        loading: false,
        member: action.payload
      }
    case DEL_MEMBER:
      return{
        ...state,
        loading: false,
        member: null
      }
    case GET_PRODUCT:
      return {
        ...state,
        loading: false,
        product: action.payload
      }
    case GET_PRODUCT_AMOUNT:
      return{
        ...state,
        loading: false,
        product_amount: action.payload
      }
    case GET_BEST_PRODUCT:
      return{
        ...state,
        loading: false,
        bestproduct: action.payload
      }
    case GET_BANNER:
      return{
        ...state,
        loading: false,
        banner: action.payload
      }
    default:
      return state;
  }
}


export default getDataReducer;