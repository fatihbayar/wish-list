import React from 'react';
import { connect } from 'react-redux';

import WishListContainer from '../../../containers/wish-list';
import style from './index.less';

function WishListButton({ product, addToWishList, removeFromWishList, wishList }) {
  const inWishList = wishList.find(wishedProduct => product.id === wishedProduct.id);

  const text = inWishList ?
    'Remove from wish list' :
    'Add to wish list';

  const className = style.button + (inWishList ? (' ' + style.added) : '');

  return (
    <button className={className} onClick={() => {
      if (inWishList) {
        return removeFromWishList(product.id);
      }

      addToWishList(product);
    }}>{text}</button>
  );
}

export default connect(...WishListContainer)(WishListButton);