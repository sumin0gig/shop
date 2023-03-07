import React from 'react';
import Title from '../Title';

const AdmPrd = () => {
  return (
    <div className='main inner'>
      <h1>상품 관리</h1>
      <div className='underlineDiv'>
        <Title title="베스트 상품 관리"/>
        <div className="grayDiv">
          글자
        </div>
      </div>
      <div className='underlineDiv'>
        <Title title="신상품 관리"/>
        <div className="grayDiv">
          글자
        </div>
      </div>
      <div className='underlineDiv'>
        <Title title="상품 관리"/>
        <div className="grayDiv">
          글자
        </div>
      </div>

    </div>
  );
};

export default AdmPrd;