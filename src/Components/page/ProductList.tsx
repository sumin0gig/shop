import React from 'react';
import ListItems from './ListItems';
import { getSomeCate } from '../../modules/getDataReducer';
import Title from '../Title';
import "../style/Product.css"
import { useDispatch } from 'react-redux';

const ProductList = ({cate}:{cate:string}) => {
  const dispatch=useDispatch()
  dispatch(getSomeCate(cate))
  return (
    <div className='main inner'>
      <Title title={cate} center={true}/>
      <ListItems />
    </div>
  );
};

export default ProductList;