const _ = require('lodash');
const Product = require('../entities/product');

let wishList = [];

class WishListModel {
  add(data) {
    return new Promise(resolve => {
      const search = _.find(wishList, { id: data.id });

      if (search) {
        return resolve(search);
      }

      const product = new Product(data);

      wishList.push(product.data);
      resolve(product.data);
    });
  }

  remove(productId) {
    return new Promise(resolve => {
      wishList = _.reject(wishList, { id: productId });

      resolve(true);
    });
  }

  list() {
    return new Promise(resolve => {
      resolve(wishList);
    })
  }
}

module.exports = WishListModel;