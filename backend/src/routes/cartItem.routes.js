const express = require('express');
const router = express.Router();

const CartItem = require('../models/CartItem');
const Product = require('../models/Product');

// GET shopping cart
router.get('/', async (req, res) => {
  try {
    const cart = await CartItem.find().populate('product_id');
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST product into shopping cart
router.post('/add', async (req, res) => {
  const { product_id, quantity = 1 } = req.body;

  if (!product_id) {
    return res.status(400).json({ error: 'product_id is required' });
  }

  try {
    const item = await CartItem.findOneAndUpdate(
      { product_id },
      { $inc: { quantity } },
      { upsert: true, returnDocument: 'after', setDefaultsOnInsert: true }
    );

    res.json(item);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE delete single item from cart
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItem = await CartItem.findByIdAndDelete(id);
    
    if (!deletedItem) {
      return res.status(404).json({ error: 'Item not found in cart' });
    }

    res.json({ message: 'Item deleted from cart', deletedItem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE delete all items from cart
router.delete('/', async (req, res) => {
  try {
    const result = await CartItem.deleteMany({});
    
    res.json({ 
      message: 'All items deleted from cart', 
      deletedCount: result.deletedCount 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;