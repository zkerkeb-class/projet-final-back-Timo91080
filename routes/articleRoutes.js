const express = require('express');
const router = express.Router();
const {
  createArticle,
  getAllArticles,
  getArticleById
} = require('../controllers/articleControllers'); // <-- chemin corrigé
const auth = require('../middleware/authMiddleware');

router.get('/', getAllArticles);
router.get('/:id', getArticleById);
router.post('/', auth, createArticle); // protégé par JWT

module.exports = router;
