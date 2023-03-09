import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { rootState } from '../modules';
import { getThunk } from '../modules/getDataReducer';
import "./style/Adm.css"

const AdminFooter = () => {
  
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getThunk())
  },[dispatch])
  const loading:boolean= useSelector((state:rootState)=>state.getDataReducer.loading)
  return (
    <div className='loading'>
      {loading?"Loading...":""}
    </div>
  );
};

export default AdminFooter;