const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const garmentSchema = new mongoose.Schema({
  label: {
    type: 'string',
    required: true,
    unique: true,
  },
  color: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Color',
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  price: {
    type: 'number',
    required: true,
  },
  sizes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Size',
    required: true,
  }],
  images: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
    required: true,
  }],
  limitedEdition: {
    type: 'boolean',
    required: true,
  },
  inStock: {
    type: 'boolean',
    required: true,
  }
}, {
  timestamps: true,
});

garmentSchema.plugin(uniqueValidator);

const GarmentModel = mongoose.model('Garment', garmentSchema);

module.exports = GarmentModel;
