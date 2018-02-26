import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/header';
import ProductList from '../../components/product/list';
import WishListContainer from '../../containers/wish-list';
  import style from './index.less';

function WishList({ wishList }) {
  return (
    <div>
      <Header />
      <h1 className={style.title}>Wish List</h1>
      <ProductList products={wishList}/>
    </div>
  );
}

export default connect(...WishListContainer)(WishList);