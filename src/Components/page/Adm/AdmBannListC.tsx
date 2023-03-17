import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_URL } from '../../../API/api';
import { bannerDataType, delBanner, patchBanner } from '../../../modules/getDataReducer';

const AdmBannListC = ({b}:{b:bannerDataType}) => {
  const [formdata,setFormdata]=useState({
    b_no: b.b_no,
    b_img: b.b_img,
    b_name: b.b_name,
    b_link: b.b_link
  })
  useEffect(()=>{
    setFormdata({
      b_no: b.b_no,
      b_img: b.b_img,
      b_name: b.b_name,
      b_link: b.b_link
    })
  },[b])
  const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;
    setFormdata({
      ...formdata,
      [name]:value
    })
  }
  const onChangeImage=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const imageFormData= new FormData();
    imageFormData.append('img', e.target.files![0]);
    axios.post(`${API_URL}/admin/banner/upload`,imageFormData,{
        headers:{'content-type':'multipart/formdata'}
        })
        .then(res=>{
          setFormdata({...formdata, b_img: res.data.imageUrl})
       })
        .catch(e=>alert(e))
  }
  
  const dispatch= useDispatch();
  const onModify=()=>{
    dispatch(patchBanner(formdata))
  }
  const onDel=()=>{
    dispatch(delBanner(b.b_no))
  }
  return (
    <tr>
      <td className='inputs'>
        <img src={`${API_URL}/upload/banner/${formdata.b_img}`} className="miniImg" alt={b.b_name} />
        <input type="file" onChange={onChangeImage} name="b_img"/>
      </td>       
      <td>
        <input type="text" value={formdata.b_name} onChange={onChange} name="b_name"/>
      </td>
      <td>
        <input type="text" value={formdata.b_link} onChange={onChange} name="b_link"/>
      </td>
      <td>
        <button className='noneBg' onClick={onModify}>M</button>
      </td>
      <td>
        <button className='noneBg' onClick={onDel}>X</button>
      </td>
    </tr>
  );
};

export default AdmBannListC;