const express = require('express');
const router = express.Router();
const Product = require('../models/product'); // Adjust path if needed

// Add product
router.post('/add', async (req, res) => {
  try {
    const { name, price, description, category, stock, image } = req.body;

    // Validate that required fields are provided
    if (!name || !price) {
      return res.status(400).json({ message: 'Name and price are required' });
    }

    const newProduct = new Product({ name, price, description, category, stock, image });
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error adding product', error });
  }
});

// Update product
router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, category, stock, image  } = req.body;

    // Validate required fields if needed
    if (!name || !price) {
      return res.status(400).json({ message: 'Name and price are required' });
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, {name, price, description, category, stock, image }, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error });
  }
});

// Delete product
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error });
  }
});


router.get('/', async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products', error });
    }
  });

module.exports = router;
