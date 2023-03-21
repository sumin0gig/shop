import React from 'react';
import Title from '../Title';
import ListItems from './ListItems';

const ProductSearch = () => {
  return (
    <div className='main inner'>
      <Title title='SEARCH ITEMS' center/>
      <ListItems/>
    </div>
  );
};

export default ProductSearch;