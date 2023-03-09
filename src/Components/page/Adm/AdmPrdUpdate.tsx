import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { API_URL } from '../../../API/api';
import { getThunk, productDataType } from '../../../modules/getDataReducer';
import AdmPrdUdMini from './AdmPrdUdMini';

const AdmPrdUpdate = ({d,module}:{d:productDataType,module:string}) => {
  const [prdData,setPrdData]=useState({
    p_no:d.p_no,
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
  const dispatch= useDispatch();

  const onSubmit=()=>{
    // e.preventDefault();
    switch (module) {
      case 'add':
        axios.post(`${API_URL}/admin/product/add`,prdData)
        break;
      case 'update':
        axios.patch(`${API_URL}/admin/product/update`,prdData)
        .then(
          dispatch(getThunk())
        )
        break;
    
      default:
        break;
    }
    
  }
  const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;
    setPrdData({
      ...prdData,
      [name]:value
    })
  }
  return (
    <form className='productDataDiv update' onSubmit={onSubmit}>
      <div className='left'>

        <div className='productImgDiv'>
          <img src={prdData.p_mainImg} alt="main_IMG" className='mainProduct'/>
          <div className='mainDiv'>
            <h3>메인 사진</h3>
            <input type="text" onChange={onChange} name='p_mainImg' value={prdData.p_mainImg}/>  
            <pre>메인 사진</pre>
          </div>      
        </div>
        <div className='productTitleDiv'>
          <h3>제품명</h3>
              <div>
                <input type="text" onChange={onChange} name='p_name' value={prdData.p_name} />
              </div>
          <pre>제품명</pre>
        </div>
        <div>
          <div className='productState'>
            <span>판매가</span>
            <div>
              <input type="number" onChange={onChange} name='p_price' value={prdData.p_price}/>
            </div>  
            원
          </div>
          <pre>실제로 결제되는 금액</pre>
        </div>
        <div>
          <div className='productState'>
            <span>세일가</span>
            <div>
              <input type="number" onChange={onChange} name='p_saleprice' value={prdData.p_saleprice?prdData.p_saleprice:""}/>
            </div>
            원
          </div>
            <pre>상품의 본래 금액, 세일하지 않을 경우 0원</pre>
        </div>
      </div>
      <div className='center'>

        <div>
          <div className='productState'>
            <span>색상</span>
            <div>
              <input type="text" onChange={onChange} name='p_color' value={prdData.p_color?prdData.p_color:""} />
            </div>
          </div>
          <pre>상품의 색상,로 이어 작성합니다.</pre>

        </div>
        <div>
          <div className='productState'>
            <span>사이즈</span>
            <div>
              <input type="text" onChange={onChange} name='p_size' value={prdData.p_size?prdData.p_size:""} />
            </div>
          </div>
          <pre>상품의 사이즈,로 이어 작성합니다.</pre>
        </div>
        <div>
          <div className='productState'>
            <span>수량</span>
            <div>
              <input type="number" onChange={onChange} name='p_amount' value={prdData.p_amount} />
            </div>
          </div>
          <pre>상품 재고</pre>
        </div>
        <div>
          <div className='productState'>
            <span>카테고리</span>
            <div>
              <input type="text" onChange={onChange} name='p_category' value={prdData.p_category} />
            </div>
          </div>
          <pre>아우터 상의 원피스 스커트 팬츠 가방 신발 악세사리</pre>
        </div>
        <div>
          <div className='productState'>
            <span>BEST<br />상품지정</span>
            <div>
              <input type="text" onChange={onChange} name='p_isbest' value={prdData.p_isbest} />
            </div>
          </div>
          <pre>BEST상품으로 지정합니다.</pre>
        </div>
        <div>
          <div className='productState'>
            <span>NEW<br />상품지정</span>
            <div>
              <input type="text" onChange={onChange} name='p_isnew' value={prdData.p_isnew} />
            </div>
          </div>
          <pre>신상품으로 지정합니다.</pre>
        </div>
      </div>
      <div className='right'>
        {<AdmPrdUdMini onChange={onChange} num={1} Img={prdData.p_mainMiniImg1}/>}
        {<AdmPrdUdMini onChange={onChange} num={2} Img={prdData.p_mainMiniImg2}/>}
        {<AdmPrdUdMini onChange={onChange} num={3} Img={prdData.p_mainMiniImg3}/>}
        {<AdmPrdUdMini onChange={onChange} num={4} Img={prdData.p_mainMiniImg4}/>}
        {<AdmPrdUdMini onChange={onChange} num={5} Img={prdData.p_mainMiniImg5}/>}
        {<AdmPrdUdMini onChange={onChange} num={0} Img={prdData.p_annImg}/>}
      </div>

      <div className='inDiv center'>
        <button className='default'>{module==="add"?"추가":"수정"}</button>
        <button className='default white'>취소</button>
      </div>
    </form>
  );
};

export default AdmPrdUpdate;