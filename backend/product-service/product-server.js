require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectDB = require('../src/config/db');
const productRoutes = require('../src/routes/product.routes');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/products', productRoutes);

const PORT = process.env.PRODUCTS_PORT;

app.listen(PORT, () => {
  console.log(`Service Produits lancé sur http://localhost:${PORT}`);
});
