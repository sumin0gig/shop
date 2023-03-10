import React ,{ useState } from 'react';
import { onTitleMove } from '../../Title';
import AdmPrdBtn from './AdmPrdBtn';
import { BsSearch } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { getSomeThunk } from '../../../modules/getDataReducer';



const AdmPrdHead = () => {
  
  const [prdData,setPrdData]=useState({
    p_name:"",
    p_pricemin:0,
    p_pricemax:999990,
    p_salepricemin:0,
    p_salepricemax:999990,
    p_amountmin:0,
    p_amountmax:5000,
    p_category:"",
    p_isbest:"",
    p_isnew:"",
  });

  const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;
    setPrdData({
      ...prdData,
      [name]:value
    })
  }
  const clickBtn=(value:string)=>{
    setPrdData({
      ...prdData,
      p_category:value
    })
  }
  const clickCheckBtn=(name:string,value:string)=>{
    setPrdData({
      ...prdData,
      [name]:value
    })
  }

  const onClick=()=>{
    document.querySelector(".right")?.classList.toggle("open")
  }
  const dispatch= useDispatch()
  const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    dispatch(getSomeThunk(JSON.stringify(prdData)))
  }
  return (
    <div>
      <ul className='AdmHeader'>
      <li> <span onClick={()=>onTitleMove("no1")}>상품 추가</span></li>
      <li> <span onClick={()=>onTitleMove("no2")}>상품 삭제</span></li>
      <li> <span onClick={()=>onTitleMove("no3")}>BEST / NEW 상품 지정</span></li>
      <li> <span onClick={()=>onTitleMove("no4")}>상품 관리</span></li>
    </ul>
    <div className='AdmHeader right'>
      <form action="" className='searchForm' onSubmit={onSubmit}>
        <h2>상품 검색</h2>
          <table className='table'>
            <tbody>
              <tr>
                <th>제품명</th>
                <td><input type="text" name='p_name' value={prdData.p_name} onChange={onChange}/></td>
              </tr>
              <tr>
                <th>판매가</th>
                <td className='searchprice'>
                  <input type="number" name='p_pricemin' onChange={onChange} value={prdData.p_pricemin}/> 원 이상~
                  <input type="number" name='p_pricemax' onChange={onChange} value={prdData.p_pricemax}/> 원 이하
                </td>
              </tr>
              <tr>
                <th>세일가</th>
                <td className='searchprice'>
                  <input type="number" name='p_salepricemin' onChange={onChange} value={prdData.p_salepricemin}/> 원 이상~
                  <input type="number" name='p_salepricemax' onChange={onChange} value={prdData.p_salepricemax}/> 원 이하
                </td>
              </tr>
              <tr>
                <th>수량</th>
                <td className='searchprice'>
                  <input type="number" name='p_amountmin' onChange={onChange} value={prdData.p_amountmin} /> 개 이상~
                  <input type="number" name='p_amountmax' onChange={onChange} value={prdData.p_amountmax} /> 개 이하
                </td>
              </tr>
              <tr>
                <th>카테고리</th>
                <td>
                  <div>
                    <AdmPrdBtn prdData={prdData} name="" clickBtn={clickBtn}/>
                    <AdmPrdBtn prdData={prdData} name="아우터" clickBtn={clickBtn}/>
                    <AdmPrdBtn prdData={prdData} name="상의" clickBtn={clickBtn}/>
                    <AdmPrdBtn prdData={prdData} name="원피스" clickBtn={clickBtn}/>
                    <AdmPrdBtn prdData={prdData} name="스커트" clickBtn={clickBtn}/>
                    <AdmPrdBtn prdData={prdData} name="팬츠" clickBtn={clickBtn}/>
                    <AdmPrdBtn prdData={prdData} name="가방" clickBtn={clickBtn}/>
                    <AdmPrdBtn prdData={prdData} name="신발" clickBtn={clickBtn}/>
                    <AdmPrdBtn prdData={prdData} name="악세사리" clickBtn={clickBtn}/>
                  </div>
                </td>
              </tr>
              <tr>
                <th>BEST 상품</th>
                <td>
                  ALL<input type="checkbox" onClick={()=>clickCheckBtn("p_isbest","")} defaultChecked={prdData.p_isbest===""?true:false}/>
                  Y<input type="checkbox" onClick={()=>clickCheckBtn("p_isbest","Y")} defaultChecked={prdData.p_isbest==="Y"?true:false}/>
                  N<input type="checkbox" onClick={()=>clickCheckBtn("p_isbest","N")} defaultChecked={prdData.p_isbest==="N"?true:false}/>
                </td>
              </tr>
              <tr>
                <th>NEW 상품</th>
                <td>
                  ALL<input type="checkbox" name='p_isnew' onClick={()=>clickCheckBtn("p_isnew","")} defaultChecked={prdData.p_isnew===""?true:false}/>
                  Y<input type="checkbox" name='p_isnew' onClick={()=>clickCheckBtn("p_isnew","Y")} defaultChecked={prdData.p_isnew==="Y"?true:false}/>
                  N<input type="checkbox" name='p_isnew' onClick={()=>clickCheckBtn("p_isnew","N")} defaultChecked={prdData.p_isnew==="N"?true:false}/>
                </td>
              </tr>
              <tr>
              </tr>
            </tbody>
          </table>
          <button className='default'>검색</button>
      </form>  
      <div className='searchOpener' onClick={onClick}>
        <BsSearch/>
      </div>
    </div>
    </div>
  );
};

export default AdmPrdHead;