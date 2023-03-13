import React from 'react';
import { useDispatch } from 'react-redux';
import { getSomeIs } from '../../modules/getDataReducer';
import Title from '../Title';
import ListItems from './ListItems';

const BestList = () => {
  const dispatch= useDispatch()
  dispatch(getSomeIs("p_isbest"))
  return (
    <div className='main inner'>
      <Title title={"BEST"} center={true}/>
      <ListItems />
    </div>
  );
};

export default BestList;