const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const sizeSchema = new Mongoose.Schema({
  title: {
    type: 'string',
    required: true,
    unique: true,
  }
}, {
  timestamps: true,
});

sizeSchema.plugin(uniqueValidator);

const SizeModel = Mongoose.model('Size', sizeSchema);

module.exports = SizeModel;
