import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../../modules';
import { cartDataType, delCartThunk, patchCartThunk } from '../../modules/getCartReducer';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export let selectProduct: { c_no: number; p_no: number; pa_no: number; c_price: number; c_saleprice: number; c_amount: number; }[] =[];
export let p_noArr:number[]=[]

const Cartlist = () => {
  const data:cartDataType[]=useSelector((state:rootState)=>state.getCartReducer.cart);
  const onChange=(e:React.ChangeEvent<HTMLInputElement>,c:cartDataType,i:number)=>{
    if(e.target.checked){
      selectProduct[i]=
      {
        c_no: c.c_no||0,
        p_no: c.p_no,
        pa_no: c.pa_no,
        c_price: c.c_price*c.c_amount,
        c_saleprice: (c.c_saleprice||0)*c.c_amount,
        c_amount:c.c_amount
      }
      totalSetting()
    }else{
      selectProduct[i]={
        c_no: 0,
        p_no: 0,
        pa_no: 0,
        c_price: 0,
        c_saleprice: 0,
        c_amount: 0
      }
      totalSetting()
    }
    p_noArr= selectProduct.filter(d=>d.pa_no>0).map(d=>d.pa_no);
    
  }
  const [total,setTotal]= useState({
    len:0,
    saleprice:0,
    price:0,
  })
  const totalSetting=()=>{
    setTotal({
      ...total,
      len:selectProduct.filter(d=>d.c_amount>0).length,
      saleprice:selectProduct.length>0?selectProduct.map(d=>d.c_saleprice).reduce((a,b)=>a+b):0,
      price:selectProduct.length>0?selectProduct.map(d=>d.c_price).reduce((a,b)=>a+b):0,
    })
  }
  const dispatch= useDispatch();
  const navigate= useNavigate();
  const onClickDel=()=>{
    const data=selectProduct.filter(i=>i).map(i=>i.c_no);
    dispatch(delCartThunk(data));
    window.location.reload();    
  }

  const onClick=()=>{
    const patchData=data.filter(d=>p_noArr.includes(d.pa_no));
    dispatch(patchCartThunk(patchData))
    navigate("/cart/credit")
  }
  return (
    <>
    <h4>선택한 상품 {total.len} 개</h4>
    <div className="inputs">
      <button className='noneBg' onClick={onClickDel}>선택 삭제</button>
    </div>
    <table className='cartTable'>
      <tbody>
        <tr>
          <th>check</th>
          <th colSpan={4}>주문상품 정보</th>
          <th>수량</th>
          <th>가격</th>
        </tr>
      {data&&data.map((c,i:number)=>
      <tr key={i}>
        <td>
          <input type="checkbox" className='checkbox' onChange={(e)=>onChange(e,c,i)} />
        </td>
        <td>
          <Link to={`/product/view/${c.p_no}`}>
            <img src={`${c.cp_img}`} alt={c.cp_name} />
          </Link>
        </td>
        <td>
          <Link to={`/product/view/${c.p_no}`}>
            <p>{c.cp_name}</p>
          </Link>
        </td>
        <td>
          <p>{c.cp_color}</p>
        </td>
        <td>
          <p>{c.cp_size}</p>
        </td>

        <td>
          <p>{c.c_amount}개</p>
        </td>
        <td>
          {c.c_saleprice?<s className="saleprice">{(c.c_saleprice*c.c_amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</s>:null}
          <p className="price">{(c.c_price*c.c_amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
          {c.c_saleprice?<p className="salePro">{100-Math.trunc(c.c_price/c.c_saleprice*100)}%</p>:null}
        </td>
      </tr>
      )}
      </tbody>
    </table>
    <div className='cartTotal'>
       {(total.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 +	배송비 {(total.price<80000?3000:0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        <pre>
          {" 80,000원 이상 구매시 무료배송 입니다. "}
        </pre>
        <h4>
          총 결제 예상금액 {(total.price+(total.price<80000?3000:0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </h4>
      </div>
      <div>
          <button className='default' onClick={onClick}>주문하기</button>
      </div>
    </>
  );
};

export default Cartlist;