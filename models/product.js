const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  category: String,
  
  stock: Number,
  image: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('products', productSchema);


