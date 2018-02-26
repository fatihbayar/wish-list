const expect = require('chai').expect;

const productData = require('../data/sample-product.json');
const ProductEntity = require('../entities/product');

describe('Product Entity', () => {
  it('Should has a data', () => {
    const product = new ProductEntity(productData);

    expect(product).have.a.property('data');
  });

  describe('sanitize', () => {
    it('Should sanitize given data', () => {
      const product = new ProductEntity(productData).data;

      expect(product).have.a.property('id');
      expect(product).have.a.property('url');
      expect(product).not.have.a.property('rating');
    })
  });
});