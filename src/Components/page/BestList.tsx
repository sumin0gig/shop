import React from 'react';
import { useDispatch } from 'react-redux';
import { getSomeIs } from '../../modules/getDataReducer';
import Title from '../Title';
import ListItems from './ListItems';

const BestList = () => {
  const dispatch= useDispatch()
  dispatch(getSomeIs("p_isbest"))
  return (
    <div className='main'>
      <div className="best_banner">
        <img src='https://i.ibb.co/mNqGL7T/best-banner.png' alt="bestItem" />
      </div>
      <div className="inner">
        <Title title={"BEST"} center={true}/>
        <ListItems />
      </div>
    </div>
  );
};

export default BestList;