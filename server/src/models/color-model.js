const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const colorSchema = new Mongoose.Schema({
  title: {
    type: 'string',
    required: true,
    unique: true,
  }
}, {
  timestamps: true,
});

colorSchema.plugin(uniqueValidator);

const ColorModel = Mongoose.model('Color', colorSchema);

module.exports = ColorModel;
