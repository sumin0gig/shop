import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postAmount } from '../../../modules/getDataReducer';

type formdataType={
  p_no: number|string,
  pa_size: null|string,
  pa_color: null|string,
  pa_amount: null|string
}

const AdmPrdAmountSetAddMini = ({p_no}:{p_no:number}) => {
  const [formdata,setFormData]=useState<formdataType>({
    p_no:p_no,
    pa_size: null,
    pa_color: null,
    pa_amount: "0"
  })
  const dispatch= useDispatch();
  const onClick=()=>{
    document.querySelector(`.class${p_no}`)!.classList.toggle("open");
    document.querySelector(`.btn${p_no}`)!.classList.toggle("white");
    if(formdata.pa_amount!=="0"){
      dispatch(postAmount(formdata))
      setFormData({
        p_no:p_no,
        pa_size: null,
        pa_color: null,
        pa_amount: "0"
      })
    }
  }
  useEffect(()=>{
    setFormData({
      ...formdata,
      p_no:p_no
    })
  },[p_no])
  const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;
    setFormData({
      ...formdata,
      [name]:value
    })
  }
  return (
  <>
    <tr className={`prdocutAdd class${p_no}`}>
      <td>
        <div>
          <input type="text" value={formdata.pa_size?formdata.pa_size:""} placeholder="사이즈"
          name='pa_size' onChange={onChange}/>
        </div>
      </td>
      <td>
        <div>
          <input type="text" value={formdata.pa_color?formdata.pa_color:""} placeholder="색상"
          name='pa_color' onChange={onChange}/>
        </div>
      </td>
      <td>
        <div>
          <input type="number" value={formdata.pa_amount?formdata.pa_amount:""}
          name='pa_amount' onChange={onChange}/>
        </div>
      </td>
      <td colSpan={2}>
        <div>
        <pre>
          사이즈를 공란으로 두면 ONE SIZE로 입력됩니다.
          <br />
          색상을 공란으로 두면 ONE COLOR로 입력됩니다.
        </pre>
        </div>
      </td>
    </tr>
      <button className={`default btn${p_no}`} type='button' onClick={onClick}>옵션 추가</button>
  </>
  );
};

export default AdmPrdAmountSetAddMini;