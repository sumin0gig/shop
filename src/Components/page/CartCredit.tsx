import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../API/api';
import { rootState } from '../../modules';
import { cartDataType, delCartThunk } from '../../modules/getCartReducer';
import { memberDataType } from '../../modules/getDataReducer';
import Title from '../Title';

const CartCredit = () => {
  const data:cartDataType[]= useSelector((state:rootState)=>state.getCartReducer.cart);
  const memberdata:memberDataType=useSelector((state:rootState)=>state.getCartReducer.member);

  const [state,setState]=useState<{
    TotalPrice: number;
    TotalSalePrice: number|null;
    delivery: number;
}>({
    TotalPrice:0,
    TotalSalePrice:0,
    delivery:0,
  })
  useEffect(()=>{
    setState({
      TotalPrice:data?data.map(d=>d.c_price*d.c_amount).reduce((a,b)=>a+b):0,
      TotalSalePrice:data?data.map(d=>(d.c_saleprice||0)*d.c_amount).reduce((a,b)=>(a||0)+(b||0)):0,
      delivery:state.TotalPrice<80000?3000:0
    })
  },[data,memberdata])
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const onClick=()=>{
    const formdata= data.map(i=>i.c_no!)
    dispatch(delCartThunk(formdata))
    axios.patch(`${API_URL}/product/amount`,data)
    navigate("/cart/success")
  }

  return (
    <div className='main'>
      <div>
        <Title title='주문/결제' center/>
      </div>
      <div className="inner">
        <table className="cartTable">
          <tbody>
            <tr>
              <th colSpan={4}>상품정보</th>
              <th>수량</th>
              <th>가격</th>
            </tr>
            {data&&data.map((c,i:number)=>
            <tr key={i}>
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
        <div className='creditDiv'>
          <div className="left">
            <div className="delivery">
              <h4>배송지 정보</h4>
                <ul>
                  <li>
                    {memberdata&&memberdata.m_name}
                  </li>
                  <li>
                    {memberdata&&memberdata.m_tel_1}-{memberdata&&memberdata.m_tel_2}-{memberdata&&memberdata.m_tel_3}
                    <pre>
                      <input type="checkbox" name="safeTel" id=""/>
                      <label htmlFor="safeTel">안심번호 서비스 사용</label>
                    </pre>
                  </li>
                  <li>
                    {memberdata&&memberdata.m_addr}
                  </li>
                  <li>
                    <input type="text" placeholder='요청사항을 입력합니다.'/>
                  </li>
                  <li>
                    <pre>
                      도서산간 지역의 경우 추후 수령 시 추가 배송비가 발생할 수 있습니다.
                    </pre>
                  </li>
                </ul>
            </div>
            <div className="delivery">
              <h4>할인</h4>
              <h5>상품 할인</h5>
              <ul>
                <li>{((state.TotalSalePrice||0)-state.TotalPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</li>
              </ul>
              
            </div>
            <div className="delivery">
              <h4>결제수단</h4>
              <div>
                <input type="radio" name='credit' defaultChecked/> 카드 간편결제
              </div>
              <div>
                <input type="radio" name='credit'/> 계좌이체
              </div>
            </div>
          </div>

          <div className="right">
            <div className="delivery">
              <h5>주문자정보</h5>
              <ul>
                <li>
                  {memberdata&&memberdata.m_name}
                </li>
                <li>
                  {memberdata&&memberdata.m_tel_1}-{memberdata&&memberdata.m_tel_2}-{memberdata&&memberdata.m_tel_3}
                </li>
                <li>
                  {memberdata&&memberdata.m_mail_add1}@ {memberdata&&memberdata.m_mail_add2}
                </li>
              </ul>
              <pre>
                주문자 정보로 결제관련 정보가 제공됩니다.
                정확한 정보로 등록되어있는지 확인해주세요.
              </pre>
            </div>
            <div className="delivery">
              <h4>결제 상세</h4>
              <h5>주문금액 {(state.TotalPrice+state.delivery).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</h5>
              <ul>
                <li>
                  <span>상품 금액</span>
                  <div>
                    {(state.TotalSalePrice||0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                  </div>
                </li>
                <li>
                  <span>배송비</span>
                  <div>
                    {state.delivery.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </div>
                </li>
                <li>
                  <span>상품 할인</span>
                  <div>
                    {((state.TotalSalePrice||0)-state.TotalPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className='cartTotal'>
          <button className='default' onClick={onClick}>결제하기</button>
        </div>
      </div>
    </div>
  );
};

export default CartCredit;