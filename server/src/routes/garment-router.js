const express = require('express');
const {
  getGarments,
  createGarment,
  getGarment,
  deleteGarment,
  updateGarment
} = require('../controllers/garment-controller');

const router = express.Router();

router.get('/', getGarments);

router.post('/', createGarment);

router.get('/:id', getGarment);

router.delete('/:id', deleteGarment);

router.patch('/:id', updateGarment);

module.exports = router;
