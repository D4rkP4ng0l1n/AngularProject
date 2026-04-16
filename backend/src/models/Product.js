const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: String,
  name: String,
  image: String
});

module.exports = mongoose.model('Product', productSchema, 'Products');