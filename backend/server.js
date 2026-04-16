require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectDB = require('./src/config/db');
const productRoutes = require('./src/routes/product.routes');

const app = express();

app.use(cors());

// Connexion DB
connectDB();

// Routes
app.use('/products', productRoutes);

// Lancement serveur
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});