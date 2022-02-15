const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const colorSchema = new mongoose.Schema({
  title: {
    type: 'string',
    required: true,
    unique: true,
  }
}, {
  timestamps: true,
});

colorSchema.plugin(uniqueValidator);

const ColorModel = mongoose.model('Color', colorSchema);

module.exports = ColorModel;
