const WishListModel = require('../models/wish-list');
const ResponseHelper = require('../helpers/response');
const errors = new ResponseHelper(null).errors;

class WishListService {
  constructor() {
    this.model = new WishListModel();
  }

  list() {
    return this.model.list();
  }

  add(product) {
    if (!product || !product.url) {
      return Promise.reject(errors.VALIDATION);
    }

    try {
      product.id = product.url.match(/(?=\w+\.\w{3,4}$).+/)[0].replace('.html', '');
    } catch (error) {
      return Promise.reject(errors.VALIDATION);
    }

    return this.model.add(product);
  }

  remove(productId) {
    return this.model.remove(productId);
  }
}

module.exports = WishListService;