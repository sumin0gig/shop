import React from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../../modules';
import { productDataType } from '../../modules/getDataReducer';
import "../style/PrdItemC.css"
import ProductSlider from './slider/ProductSlider';

const ProductItemC = () => {
  const date= new Date().toLocaleDateString();  
  const data:productDataType[]=  useSelector((state:rootState)=>state.getDataReducer.product)
  return (
    <>
      {data&&data.map((d:productDataType,i:number)=>
      <div id='detail' key={i}>
        <div className="detail-top">
          <div className="left">
            <ProductSlider d={d}/>
          </div>
          <div className="right">
            <div className="textDiv">
              <h1>{d.p_name}</h1>
              <div className="priceDiv">
                {d.p_saleprice?
                <>
                  <s className='saleprice'>{d.p_saleprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</s>
                  <p className="salePro">{Math.trunc(d.p_price/d.p_saleprice*100)}%</p>
                </>
                :null
                }
                <p className='price'>{d.p_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
              </div>
            </div>
            <div className="selectDiv">
              <form action="">
                <table>
                  <tbody>
                    <tr>
                      <th>배송정보</th>
                      <td>
                        <p>오후 9시 이전 주문시</p>
                        <p><>내일 ({date}) 도착</></p>
                      </td>
                    </tr>
                    <tr>
                      <th>색상</th>
                      <td>
                        {d.p_color}
                      </td>
                    </tr>
                    <tr>
                      <th>사이즈</th>
                      <td>
                        {d.p_size}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <button className='default white'>장바구니</button>
                        <button className='default'>구매하기</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
        <div className="detail-bottom">
          <div className="detail-photo">
            <h4 className="center">상품정보</h4>
            <img src={`${d.p_annImg}`} alt="" />
          </div>
        </div>
      </div>
      
        )}
    </>
  );
};

export default ProductItemC;