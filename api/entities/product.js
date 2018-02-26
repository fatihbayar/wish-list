const _ = require('lodash');

class Product {
  constructor(data) {
    this.schema = {
      id: null,
      url: null,
      image: null,
      suggestion: null,
      subTitle: null,
      salePrice: null,
      standardPrice: null
    };

    this.data = this.sanitize(data);
  }

  sanitize(product) {
    return _.pick(_.defaults(product, this.schema), _.keys(this.schema));
  }
}

module.exports = Product;