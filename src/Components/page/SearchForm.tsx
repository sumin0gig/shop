import React ,{ useState } from 'react';
import AdmPrdBtn from './Adm/AdmPrdBtn';
import { BsSearch } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { getSomeThunk } from '../../modules/getDataReducer';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const [prdData,setPrdData]=useState({
    p_name:"",
    p_pricemin:0,
    p_pricemax:999990,
    p_salepricemin:0,
    p_salepricemax:999990,
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
  const navigate=useNavigate();
  const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    dispatch(getSomeThunk(JSON.stringify(prdData)))
    navigate("/product/search")
    document.querySelector(".right")?.classList.remove("open")
  }
  return (
    <div>
    <div className='AdmHeader right'>
      <form action="" className='searchForm' onSubmit={onSubmit}>
          <table className='table'>
            <tbody>
              <tr>
                <td colSpan={2}>
                  <h2 className='center'>상품 검색</h2>
                </td>
              </tr>
              <tr>
                <th>제품명</th>
                <td><input type="text" name='p_name' value={prdData.p_name} onChange={onChange}/></td>
              </tr>
              <tr>
                <th>가격</th>
                <td className='searchprice'>
                  <input type="number" name='p_pricemin' onChange={onChange} value={prdData.p_pricemin}/> 원 이상~
                  <input type="number" name='p_pricemax' onChange={onChange} value={prdData.p_pricemax}/> 원 이하
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
                <td className='inputs'>
                  ALL<input type="checkbox" onClick={()=>clickCheckBtn("p_isbest","")} defaultChecked={prdData.p_isbest===""?true:false}/>
                  Y<input type="checkbox" onClick={()=>clickCheckBtn("p_isbest","Y")} defaultChecked={prdData.p_isbest==="Y"?true:false}/>
                  N<input type="checkbox" onClick={()=>clickCheckBtn("p_isbest","N")} defaultChecked={prdData.p_isbest==="N"?true:false}/>
                </td>
              </tr>
              <tr>
                <th>NEW 상품</th>
                <td className='inputs'>
                  ALL<input type="checkbox" name='p_isnew' onClick={()=>clickCheckBtn("p_isnew","")} defaultChecked={prdData.p_isnew===""?true:false}/>
                  Y<input type="checkbox" name='p_isnew' onClick={()=>clickCheckBtn("p_isnew","Y")} defaultChecked={prdData.p_isnew==="Y"?true:false}/>
                  N<input type="checkbox" name='p_isnew' onClick={()=>clickCheckBtn("p_isnew","N")} defaultChecked={prdData.p_isnew==="N"?true:false}/>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className='center'>
                  <button className='default'>검색</button>
                </td>
              </tr>
            </tbody>
          </table>
      </form>  
      <div className='searchOpener' onClick={onClick}>
        <BsSearch/>
      </div>
    </div>
    </div>
  );
};

export default SearchForm;