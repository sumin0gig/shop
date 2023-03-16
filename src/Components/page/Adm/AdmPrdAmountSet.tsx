import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getThunk } from '../../../modules/getDataReducer';
import AdmPrdAmountSetMini from './AdmPrdAmountSetMini';

const AdmPrdAmountSet = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getThunk())
  },[dispatch])
  return (
    <div className='DataDiv'>
      <AdmPrdAmountSetMini/>
    </div>
  );
};

export default AdmPrdAmountSet;