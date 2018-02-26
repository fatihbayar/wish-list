const express = require('express');
const router = express.Router();
const WishListController = require('../controllers/wish-list');

router.get('/', (req, res) => {
  new WishListController(req, res).list();
});

router.post('/', (req, res) => {
  new WishListController(req, res).add(req.body);
});

router.delete('/:id', (req, res) => {
  new WishListController(req, res).remove(req.params.id);
});

module.exports = router;
