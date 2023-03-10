import React from 'react';

const AdmPrdUdMini = ({onChange,num,Img}:{
  onChange:(e: React.ChangeEvent<HTMLInputElement>) => void,
  num:number,
  Img:string|null|undefined
}) => {
  // 관리자페이지-상품관리-상품관리-우측 이미지 리스트
  return (
    <div>
      <div className='productImgDiv'>
        <img src={Img?Img:""} alt={`mini_IMG${num}`} className='miniImg' />
        <div className='productState'>
          <span>{num===0?"상세 설명":`이미지${num}`}</span>
          <input type="text" onChange={onChange} name={num===0?`p_annImg`:`p_mainMiniImg${num}`} value={Img?Img:""} />
        </div>
      </div>
        <pre>{num===0?"상세화면에서 출력되는 상세설명 이미지":"상세화면에서 출력되는 미니 이미지"}</pre>
    </div>
  );
};

export default AdmPrdUdMini;