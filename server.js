const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Parser = require('rss-parser');
const parser = new Parser();

const articleRoutes = require('./routes/articleRoutes');
const authRoutes = require('./routes/authRoutes');
const rssRoutes = require('./routes/rssRoutes');
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/articles', articleRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/rss', rssRoutes);
// MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB connecté'))
  .catch((err) => console.error(err));

// Démarrage
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Serveur sur http://localhost:${PORT}`));
