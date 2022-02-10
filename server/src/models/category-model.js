const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const categorySchema = new Mongoose.Schema({
  title: {
    type: 'string',
    required: true,
    unique: true,
  }
}, {
  timestamps: true,
});

categorySchema.plugin(uniqueValidator);

const CategoryModel = Mongoose.model('Category', categorySchema);

module.exports = CategoryModel;
