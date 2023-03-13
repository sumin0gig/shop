import React from 'react';
import { useDispatch } from 'react-redux';
import { getSomeIs } from '../../modules/getDataReducer';
import Title from '../Title';
import ListItems from './ListItems';

const NewList = () => {
  const dispatch= useDispatch();
  dispatch(getSomeIs("p_isnew"))
  return (
    <div className='main inner'>
      <Title title='NEW' center={true}/>
      <ListItems/>
    </div>
  );
};

export default NewList;