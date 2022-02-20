const express = require('express');
// const authMiddleware = require('../middlewares/auth-middleware');
const { uploadManyMiddleware } = require('../middlewares/upload-middleware');
const {
  getImages,
  uploadImages,
  deleteImage,
} = require('../controllers/image-controller');

const router = express.Router();

// middlewares
// router.use(authMiddleware); Nereikia nes turi visada rodyt visas nuotraukas ir authenticated ir neauthenticated useriams?

router.get('/', getImages);

router.post('/', uploadManyMiddleware('files'), uploadImages);

router.delete('/:id', deleteImage);

module.exports = router;
