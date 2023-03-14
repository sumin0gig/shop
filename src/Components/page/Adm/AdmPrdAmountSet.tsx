import React from 'react';
import { useDispatch } from 'react-redux';
import { getThunk } from '../../../modules/getDataReducer';
import AdmPrdAmountSetMini from './AdmPrdAmountSetMini';

const AdmPrdAmountSet = () => {
  const dispatch=useDispatch()
  dispatch(getThunk())
  return (
    <div className='productDataDiv'>
      <AdmPrdAmountSetMini/>
    </div>
  );
};

export default AdmPrdAmountSet;