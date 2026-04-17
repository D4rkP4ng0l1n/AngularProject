const express = require('express');
const router = express.Router();

const CartItem = require('../models/CartItem');

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
  const { product_id } = req.body;

  try {
    const item = await CartItem.findOneAndUpdate(
      { product_id },
      { $inc: { quantity: 1 } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.json(item);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;