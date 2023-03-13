import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getNo } from '../../modules/getDataReducer';
import ProductItemC from './ProductItemC';

const ProductItem = () => {
  
  const dispatch= useDispatch();
  const {no}=useParams();
  dispatch(getNo(no!))
  return (
    <div className='main inner'>
      <ProductItemC/>
    </div>
  );
};

export default ProductItem;