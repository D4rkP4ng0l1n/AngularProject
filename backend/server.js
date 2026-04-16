const dotenvConfig = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Atlas connecté'))
  .catch(err => console.error(err));

app.listen(3000, () => {
  console.log('Serveur lancé sur http://localhost:3000');
});