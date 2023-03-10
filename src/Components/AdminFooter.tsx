import React from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../modules';
import "./style/Adm.css"

const AdminFooter = () => {
  

  const loading:boolean= useSelector((state:rootState)=>state.getDataReducer.loading)
  return (
    <div className='loading'>
      {loading?"Loading...":""}
    </div>
  );
};

export default AdminFooter;