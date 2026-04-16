const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.error("MONGO_URI manquant");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB Atlas connecté");
  } catch (err) {
    console.error("Erreur connexion MongoDB :", err);
    process.exit(1);
  }
};

module.exports = connectDB;