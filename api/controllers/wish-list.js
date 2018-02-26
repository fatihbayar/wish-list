const WishListService = require('../services/wish-list');
const ResponseHelper = require('../helpers/response');

class WishListController {
  constructor(req, res) {
    this.service = new WishListService();
    this.responser = new ResponseHelper(res);
  }

  async list() {
    let list;

    try {
      list = await this.service.list();
    } catch (error) {
      return this.responser.sendError(this.responser.errors.UNKNOWN);
    }

    this.responser.sendData(list);
  }

  async add(product) {
    let newProduct;

    try {
      newProduct = await this.service.add(product);
    } catch (error) {
      return this.responser.sendError(error);
    }

    this.responser.sendData(newProduct);
  }

  async remove(id) {
    try {
      await this.service.remove(id);
    } catch (error) {
      return this.responser.sendError(this.responser.errors.UNKNOWN);
    }

    this.responser.sendData(true)
  }
}

module.exports = WishListController;