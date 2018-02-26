const _ = require('lodash');
const errors = require('../data/errors.json');

class ResponseHelper {
  constructor(res) {
    this.res = res;

    this.errors = errors;
  }

  send(data = null, error) {
    this.res.status(error ? error.status : 200);

    this.res.json({
      data,
      error: error ? _.pick(error, [ 'message', 'code' ]) : null
    });
  }

  sendData(data) {
    this.send(data);
  }

  sendError(error, code) {
    this.send(null, error, code);
  }
}

module.exports = ResponseHelper;