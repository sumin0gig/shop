import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../../modules';
import { prodcutAmountDataType, productDataType } from '../../modules/getDataReducer';
import "../style/PrdItemC.css"
import ProductSlider from './slider/ProductSlider';

const ProductItemC =  () => {
  window.scrollTo(0,0)
  const date= new Date().toLocaleDateString();  
  const data:productDataType[]= useSelector((state:rootState)=>state.getDataReducer.product)
  const amountdata:prodcutAmountDataType[] =  useSelector((state:rootState)=>state.getDataReducer.product_amount)
  let color:string[]= [];
  if(amountdata){
    amountdata.map(a=> color.push(a.pa_color))
  }
  let set= new Set(color);
  let colorData=[...set];
  
  const [formdata,setFormData]=useState({
    color:"",
    size:""
  })

  const onClick=(name:string,value:string)=>{
    setFormData({
      ...formdata,
      [name]:value
    })
  }
  if(!data||!amountdata) return <div>no data</div>
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
                  <s className='saleprice'>{d.p_saleprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</s>
                  <p className="salePro">{100-Math.trunc(d.p_price/d.p_saleprice*100)}%</p>
                </>
                :null
                }
                <p className='price'>{d.p_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
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
                        {amountdata&&colorData.map((a,i)=>
                         <button key={i} className={formdata.color===a? "default" :"default white"} type='button'
                         onClick={()=>onClick("color",a)}>
                          {a}
                        </button> 
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th>사이즈</th>
                      <td>
                        {amountdata&&amountdata.filter(a=>a.pa_color===formdata.color).map((a,i)=>
                        <div className='balloon-div'>
                          <button key={i} className={formdata.size===a.pa_size? "default" :"default white"} type='button'
                         onClick={()=>onClick("size",a.pa_size)}>
                          {a.pa_size}
                          </button> 
                            {Number(a.pa_amount)<=10?
                            <div className='balloon'>
                              수량임박!
                            </div>
                            :null 
                            }
                        </div>
                        )}
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