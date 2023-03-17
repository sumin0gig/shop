import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../../modules';
import { cartDataType } from '../../modules/getCartReducer';
import { Link } from 'react-router-dom';

const Cartlist = () => {
  const data:cartDataType[]=useSelector((state:rootState)=>state.getCartReducer.cart);
  let selectProduct: { c_price: number; c_saleprice: number; c_amount: number; }[] =[];
  const onChange=(e:React.ChangeEvent<HTMLInputElement>,c:cartDataType,i:number)=>{
    if(e.target.checked){
      selectProduct[i]=
      {
        c_price: c.c_price,
        c_saleprice: c.c_saleprice||0,
        c_amount:c.c_amount
      }
      totalSetting()
    }else{
      selectProduct[i]={
        c_price: 0,
        c_saleprice: 0,
        c_amount: 0
      }
      totalSetting()
    }
    console.log()
  }
  const [total,setTotal]= useState({
    len:0,
    saleprice:0,
    price:0,
  })
  const [delivery,setDelivery]=useState(0);
  const totalSetting=()=>{
    setTotal({
      ...total,
      len:selectProduct.filter(d=>d.c_amount>0).length,
      saleprice:selectProduct.length>0?selectProduct.map(d=>d.c_saleprice).reduce((a,b)=>a+b):0,
      price:selectProduct.length>0?selectProduct.map(d=>d.c_price).reduce((a,b)=>a+b):0,
    })
    setDelivery(
      total.price<80000?3000:0
    )
  }
  const onClickAll=()=>{
    document.querySelectorAll("")
  }
  
  return (
    <>
    <h4>선택한 상품 {total.len} 개</h4>
    <button className='noneBg' onClick={onClickAll}>전체 선택</button>
    <table className='cartTale'>
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
          <input type="checkbox" onChange={(e)=>onChange(e,c,i)} />
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
          {c.c_saleprice?<s className="saleprice">{c.c_saleprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</s>:null}
          <p className="price">{c.c_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
          {c.c_saleprice?<p className="salePro">{100-Math.trunc(c.c_price/c.c_saleprice*100)}%</p>:null}
        </td>
      </tr>
      )}
      </tbody>
    </table>
    <div className='cartTotal'>
       {(total.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 +	배송비 {delivery.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        <pre>
          {" 80,000원 이상 구매시 무료배송 입니다. "}
        </pre>
        <h4>
          총 결제 예상금액 {(total.price+delivery).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </h4>
        </div>
    </>
  );
};

export default Cartlist;