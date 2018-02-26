const expect = require('chai').expect;

const productData = require('../data/sample-product.json');
const WishListModel = require('../models/wish-list');

describe('Wish List Model', () => {
  describe('add', () => {
    it('Should return a promise', () => {
      const model = new WishListModel();
      const product = model.add(productData);

      expect(product).to.be.a('promise');
    });

    it('Should resolve a product', function* () {
      const model = new WishListModel();
      const product = yield model.add(productData);

      expect(product).to.be.a('object');
    });

    it('Should resolve a product added before', function* () {
      const model = new WishListModel();
      const product = yield model.add(productData);
      const sameProduct = yield model.add(product);

      expect(product.id).to.be.equal(sameProduct.id);
    });
  });

  describe('remove', () => {
    it('Should return a promise', () => {
      const model = new WishListModel();
      const result = model.remove(productData.id);

      expect(result).to.be.a('promise');
    });

    it('Should resolve true', function* () {
      const model = new WishListModel();
      const result = yield model.remove(productData.id);

      expect(result).to.be.true;
    });
  });

  describe('list', () => {
    it('Should return a promise', () => {
      const model = new WishListModel();
      const list = model.list();

      expect(list).to.be.a('promise');
    });

    it('Should resolve array', function* () {
      const model = new WishListModel();
      const list = yield model.list();

      expect(list).to.be.a('array');
    });
  });
});