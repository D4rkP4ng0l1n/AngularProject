require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectDB = require('../src/config/db');
const cartItemRoutes = require('../src/routes/cartItem.routes');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/cart', cartItemRoutes);

const PORT = process.env.CART_PORT;

app.listen(PORT, () => {
  console.log(`Service Panier lancé sur http://localhost:${PORT}`);
});
