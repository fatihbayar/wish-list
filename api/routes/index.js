const express = require('express');
const router = express.Router();
const ResponseHelper = require('../helpers/response');

router.get('/', (req, res) => {
  new ResponseHelper(res).sendData(null);
});

module.exports = router;
