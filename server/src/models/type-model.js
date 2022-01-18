const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const typeSchema = new Mongoose.Schema({
  title: {
    type: 'string',
    required: true,
    unique: true,
  }
}, {
  timestamps: true,
});

typeSchema.plugin(uniqueValidator);

const TypeModel = Mongoose.model('Type', typeSchema);

module.exports = TypeModel;
