import axios from "axios";
import { Dispatch } from "redux";
import { API_URL } from "../API/api";
import { deprecated } from "typesafe-actions";
const { createStandardAction } = deprecated;

// 1.액션타입 선언
const LOADING='getDataReducer/LOADING';
const GET_PRODUCT='getDataReducer/GET_PRODUCT';
const PATCH_PRODUCT='getDataReducer/PATCH_PRODUCT';

// 2. 액션생성 함수
export const nowLoading=createStandardAction(LOADING)<boolean>
export const getproduct=createStandardAction(GET_PRODUCT)<productDataType>
export const postproduct=createStandardAction(PATCH_PRODUCT)<productDataType>
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
  p_isnew:string,
  p_mainImg:string,
  p_mainMiniImg1?:string|null,
  p_mainMiniImg2?:string|null,
  p_mainMiniImg3?:string|null,
  p_mainMiniImg4?:string|null,
  p_mainMiniImg5?:string|null,
  p_annImg?:string|null,
}
export type stateType = {
  loading: boolean;
  product: productDataType[]|null;
};
// thunk 함수
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
async (dispatch: Dispatch) => {
  dispatch({type:LOADING})
  try {
    axios.patch(`${API_URL}/admin/product/update/is`,isData);
    dispatch({type:PATCH_PRODUCT})
    const response= await axios.get(`${API_URL}/admin/product`);
    const data= response.data;
    dispatch({type:GET_PRODUCT, payload:data})
  } catch (e) {
    alert(e);
  }
};
export const getSomeThunk=(isSearch:string):any=>
async (dispatch: Dispatch) => {
  dispatch({type:LOADING})
  try{
    const params= isSearch
    const response= await axios.get(`${API_URL}/admin/product/some/${isSearch}`);
    const data= response.data;
    dispatch({type:GET_PRODUCT, payload:data})
  }catch(e){
    alert(e);
  }
}

// 초기값 지정 
const initialState={
  loading: false,
	product: null,
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
    case PATCH_PRODUCT:
      return{
        ...state,
        loaing: false
      }
    default:
      return state;
  }
}


export default getDataReducer;