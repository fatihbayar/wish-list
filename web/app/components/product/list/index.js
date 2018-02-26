import React from 'react';

import ProductCard from '../card';
import style from './index.less';

function ProductList({ products }) {
  return (
    <div className={style.list}>
      {
        products.length ?
          products.map((product, index) => (
            <ProductCard product={product} key={index} />
          )) :
          <div className={style["no-result"]}>No result found.</div>
      }
    </div>
  );
}

export default ProductList;