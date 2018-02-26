const _ = require('lodash');
const expect = require('chai').expect;

const productData = require('../data/sample-product.json');
const WishListService = require('../services/wish-list');

describe('Wish List Service', () => {
  describe('add', () => {
    it('Should return a promise', () => {
      const service = new WishListService();
      const product = service.add(productData);

      expect(product).to.be.a('promise');
    });

    it('Should resolve a product', function* () {
      const service = new WishListService();
      const product = yield service.add(productData);

      expect(product).to.be.a('object');
    });

    it('Should generate an ID', function* () {
      const service = new WishListService();
      const cloneProduct = _.clone(productData);

      delete cloneProduct.id;

      const product = yield service.add(cloneProduct);

      expect(product).have.a.property('id');
    });

    it('Should reject on missing data', function* () {
      const service = new WishListService();

      try {
        yield service.add();
      } catch (error) {
        expect(error).to.be.a('object');
        expect(error).have.a.property('message');
      }
    });

    it('Should reject on missing url', function* () {
      const service = new WishListService();
      const productClone = _.clone(productData);

      delete productClone.url;

      try {
        yield service.add(productClone);
      } catch (error) {
        expect(error).to.be.a('object');
        expect(error).have.a.property('message');
      }
    });
  });

  describe('remove', () => {
    it('Should return a promise', () => {
      const service = new WishListService();
      const result = service.remove(productData.id);

      expect(result).to.be.a('promise');
    });

    it('Should resolve true', function* () {
      const service = new WishListService();
      const result = yield service.remove(productData.id);

      expect(result).to.be.true;
    });
  });

  describe('list', () => {
    it('Should return a promise', () => {
      const service = new WishListService();
      const list = service.list();

      expect(list).to.be.a('promise');
    });

    it('Should resolve array', function* () {
      const service = new WishListService();
      const list = yield service.list();

      expect(list).to.be.a('array');
    });
  });
});