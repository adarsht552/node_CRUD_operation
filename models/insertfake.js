import mongoose from 'mongoose'
import Product from '../models/product' // Adjust path if needed
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    try {
      // Create a new product instance
      const product = new Product({
        name: "Test Product 10000",
        price: 9.99,
        description: "This is a test product.",
        category: "Test Category",
        stock: 100
      });

      // Save the product to the database
      await product.save();
      console.log('Fake product inserted successfully');
    } catch (error) {
      console.error('Error inserting product:', error);
    } finally {
      // Disconnect from MongoDB
      mongoose.disconnect();
    }
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
