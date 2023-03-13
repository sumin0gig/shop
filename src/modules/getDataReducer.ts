import axios from "axios";
import { Dispatch } from "redux";
import { API_URL } from "../API/api";
import { deprecated } from "typesafe-actions";
const { createStandardAction } = deprecated;

// 1.액션타입 선언
const LOADING='getDataReducer/LOADING';
const GET_PRODUCT='getDataReducer/GET_PRODUCT';
const GET_BEST_PRODUCT='getDataReducer/GET_BEST_PRODUCT';

// 2. 액션생성 함수
export const nowLoading=createStandardAction(LOADING)<boolean>
export const getproduct=createStandardAction(GET_PRODUCT)<productDataType>
export const getbestproduct=createStandardAction(GET_BEST_PRODUCT)<productDataType>
// 타입지정
export type productDataType={
  p_no?:number,
  p_name:string,
  p_price:number,
  p_saleprice:number|null,
  p_color?:string|null,
  p_size?:string|null,
  p_amount:number,
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
export type stateType = {
  loading: boolean;
  product: productDataType[]|null;
  bestproduct: []|null
};

// <----thunk 함수
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
  }catch(e){
    alert(e);
  }
}



// Thunk함수 --->

// 초기값 지정 
const initialState={
  loading: false,
	product: null,
  bestproduct:null
}

// 리듀서 함수
function getDataReducer(state: stateType = initialState,action: any) {
  switch (action.type) {
    case LOADING:
      return{
        ...state,
        loading: true,
      } 
    case GET_PRODUCT:
      return {
        ...state,
        loading: false,
        product: action.payload
      }
    case GET_BEST_PRODUCT:
      return{
        ...state,
        bestproduct: action.payload
      }
    default:
      return state;
  }
}


export default getDataReducer;