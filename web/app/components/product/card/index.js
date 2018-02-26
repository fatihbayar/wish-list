import React from 'react';

import WishListButton from '../wish-list-button';
import style from './index.less';

function ProductCard({ product }) {
  return (
    <div className={style.card}>
      <div className={style['image-wrapper']}>
        <img className={style.image} src={product.image}/>
      </div>
      <div className={style.information}>
        <div className={style.subtitle}>{product.subTitle}</div>
        <div className={style.title}>{product.suggestion}</div>
        <div className={style.price}>£ {product.standardPrice}</div>
      </div>
      <WishListButton product={product} />
    </div>
  );
}

export default ProductCard;