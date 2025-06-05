const Article = require('../models/Article');
const mockArticles = require('../models/mockArticles');

exports.createArticle = async (req, res) => {
  const { title, content, tags, coverImage } = req.body;
  const newArticle = new Article({
    title,
    content,
    tags,
    coverImage,
    author: req.user.id
  });

  await newArticle.save();
  res.status(201).json(newArticle);
};

exports.getAllArticles = async (req, res) => {
res.json(mockArticles); // Utilisation des articles mockés pour le moment
};

exports.getArticleById = async (req, res) => {
  const article = await Article.findById(req.params.id).populate('author', 'username');
  if (!article) return res.status(404).json({ msg: 'Article non trouvé' });

  article.views += 1;
  await article.save();

  res.json(article);
};
