const express = require('express');
const {
  getColor,
  createColor,
  getColor,
  deleteColor,
  updateColor,
  replaceColor
} = require('../controllers/color-controller');

const router = express.Router();

router.get('/', getColor);

router.post('/', createColor);

router.get('/:id', getColor);

router.delete('/:id', deleteColor);

router.patch('/:id', updateColor);

router.put('/:id', replaceColor);

module.exports = router;
