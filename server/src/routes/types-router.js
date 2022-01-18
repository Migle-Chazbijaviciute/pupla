const express = require('express');
const {
  getTypes,
  createType,
  getType,
  deleteType,
  updateType,
  replaceType
} = require('../controllers/type-controller');

const router = express.Router();

router.get('/', getTypes);

router.post('/', createType);

router.get('/:id', getType);

router.delete('/:id', deleteType);

router.patch('/:id', updateType);

router.put('/:id', replaceType);

module.exports = router;
