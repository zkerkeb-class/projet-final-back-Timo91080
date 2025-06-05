const express = require('express');
const router = express.Router();

const {
  createArticle,
  getAllArticles,
  getArticleById
} = require('../controllers/articleControllers'); // <-- chemin corrigé
const auth = require('../middleware/authMiddleware');
const mockArticles = require('../models/mockArticles');
router.get('/mock', (req, res) => {
  res.json(mockArticles);
});
router.get('/', getAllArticles);
router.get('/:id', getArticleById);
router.post('/', auth, createArticle); // protégé par JWT

module.exports = router;
