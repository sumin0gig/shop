import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { API_URL } from '../../../API/api';
import { postBanner } from '../../../modules/getDataReducer';

const AdmBannAdd = () => {
  const [formdata,setFormdata]=useState({
    b_img:"",
    b_name:"",
    b_link:""
  })
  const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;
    setFormdata({
      ...formdata,
      [name]:value
    })
  }
  const dispatch= useDispatch();
  const onClick=()=>{
    dispatch(postBanner(formdata))
    setFormdata({
      b_img:"",
      b_name:"",
      b_link:""
    })
  }
  const onChangeImage=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const imageFormData= new FormData();
    imageFormData.append(e.target.name, e.target.files![0]);
    axios.post(`${API_URL}/upload`,imageFormData,{
        headers:{'content-type':'multipart/form-data'}
        }).then(res=>{
          setFormdata({...formdata, b_img: res.data.imageUrl})
       }).catch(e=>alert(e))
  }

  return (
    <div className='DataDiv'>
      <div className='inputs'>
        <div className="subtitle">이미지</div>
        {formdata.b_img&&<img src={`${API_URL}/upload/${formdata.b_img}`} alt="img" />}
        <input type="file" name="file" onChange={onChangeImage}/>
      </div>
      <div className='inputs'>
        <div className="subtitle">배너명</div>
        <input type="text" name="b_name" onChange={onChange}/>
      </div>
      <div className='inputs'>
        <div className="subtitle">링크</div>
        <input type="text" name="b_link" onChange={onChange}/>
      </div>
      <div>
        <button className='default' onClick={onClick}>추가</button>
      </div>

    </div>
  );
};

export default AdmBannAdd;