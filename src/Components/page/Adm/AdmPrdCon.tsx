import React, { useState } from 'react';
import { productDataType } from '../../../modules/getDataReducer';

const AdmPrdCon = ({d}:{d:productDataType}) => {
  const [prdData,setPrdData]=useState({
    p_name:d.p_name,
    p_price:d.p_price,
    p_saleprice:d.p_saleprice,
    p_color:d.p_color,
    p_size:d.p_size,
    p_amount:d.p_amount,
    p_category:d.p_category,
    p_isbest:d.p_isbest,
    p_isnew:d.p_isnew,
    p_mainImg:d.p_mainImg,
    p_mainMiniImg1:d.p_mainMiniImg1,
    p_mainMiniImg2:d.p_mainMiniImg2,
    p_mainMiniImg3:d.p_mainMiniImg3,
    p_mainMiniImg4:d.p_mainMiniImg4,
    p_mainMiniImg5:d.p_mainMiniImg5,
    p_annImg:d.p_annImg,
  });
  const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;
    setPrdData({
      ...prdData,
      [name]:value
    })
  }
  return (
    <div className='productDataDiv'>
      <div className='left'>
        <div className='inDiv'>
          <img src={prdData.p_mainImg} alt="main_IMG" className='mainProduct'/>
          <h3>메인 사진</h3>
          <input type="text" onChange={onChange} name='p_mainImg' value={prdData.p_mainImg}/>
          <pre>리스트에서 나타나는 사진</pre>
        </div>
        <div>
            <div className='productState'>제품명<input type="text" onChange={onChange} name='p_name' value={prdData.p_name} /></div>
          <pre>제품명</pre>
        </div>
        <div>
          <div className='productState'>판매가<input type="number" onChange={onChange} name='p_price' value={prdData.p_price} step={1000}/></div>
          <pre>실제로 결제되는 금액</pre>
        </div>
        <div>
          <div className='productState'>세일가<input type="number" onChange={onChange} name='p_saleprice' value={prdData.p_saleprice?prdData.p_saleprice:""} step={1000}/></div>
          <pre>세일하지 않을 시 공란
          </pre>
        </div>
      </div>
      <div className='center'>

        <div>
          <div className='productState'>
            <b>색상</b>
            <input type="text" onChange={onChange} name='p_color' value={prdData.p_color?prdData.p_color:""} />
          </div>
        </div>
        <pre>상품의 색상,로 이어 작성합니다.</pre>

        <div>
          <div className='productState'>
            <b>사이즈</b>
            <input type="text" onChange={onChange} name='p_size' value={prdData.p_size?prdData.p_size:""} />
          </div>
        </div>
        <pre>상품의 사이즈,로 이어 작성합니다.</pre>

        <div>
          <div className='productState'>수량<input type="number" onChange={onChange} name='p_amount' value={prdData.p_amount} /></div>
          <pre>상품 재고</pre>
        </div>
        <div>
          <div className='productState'>카테고리<input type="text" onChange={onChange} name='p_category' value={prdData.p_category} /></div>
          <pre>카테고리</pre>
        </div>
        <div>
          <div className='productState'>BEST 상품지정<input type="text" onChange={onChange} name='p_isbest' value={prdData.p_isbest} /></div>
          <pre>BEST상품으로 지정합니다.</pre>
        </div>
        <div>
          <div className='productState'>NEW 상품지정<input type="text" onChange={onChange} name='p_isnew' value={prdData.p_isnew} /></div>
          <pre>신상품으로 지정합니다.</pre>
        </div>
      </div>
      <div className='right'>
        <div className='productStateDiv'>
          <img src={prdData.p_mainMiniImg1?prdData.p_mainMiniImg1:""} alt="main_IMG" />
          <div className='productState'>이미지1<input type="text" onChange={onChange} name='p_mainMiniImg1' value={prdData.p_mainMiniImg1?prdData.p_mainMiniImg1:""} /></div>
          <pre>상품 상세화면에서 출력되는 미니 이미지</pre>
        </div>
        <div className='productStateDiv'>
          <img src={prdData.p_mainMiniImg2?prdData.p_mainMiniImg2:""} alt="main_IMG" />
          <div className='productState'>이미지2<input type="text" onChange={onChange} name='p_mainMiniImg2' value={prdData.p_mainMiniImg2?prdData.p_mainMiniImg2:""} /></div>
          <pre>상품 상세화면에서 출력되는 미니 이미지</pre>
        </div>
        <div className='productStateDiv'>
          <img src={prdData.p_mainMiniImg3?prdData.p_mainMiniImg3:""} alt="main_IMG" />
          <div className='productState'>이미지3<input type="text" onChange={onChange} name='p_mainMiniImg3' value={prdData.p_mainMiniImg3?prdData.p_mainMiniImg3:""} /></div>
          <pre>상품 상세화면에서 출력되는 미니 이미지</pre>
        </div>
        <div className='productStateDiv'>
          <img src={prdData.p_mainMiniImg4?prdData.p_mainMiniImg4:""} alt="main_IMG" />
          <div className='productState'>이미지4<input type="text" onChange={onChange} name='p_mainMiniImg4' value={prdData.p_mainMiniImg4?prdData.p_mainMiniImg4:""} /></div>
          <pre>상품 상세화면에서 출력되는 미니 이미지</pre>
        </div>
        <div className='productStateDiv'>
          <img src={prdData.p_mainMiniImg5?prdData.p_mainMiniImg5:""} alt="main_IMG" />
          <div className='productState'>이미지5<input type="text" onChange={onChange} name='p_mainMiniImg5' value={prdData.p_mainMiniImg5?prdData.p_mainMiniImg5:""} /></div>
          <pre>상품 상세화면에서 출력되는 미니 이미지</pre>
        </div>
      </div>

      
      


    </div>
  );
};

export default AdmPrdCon;