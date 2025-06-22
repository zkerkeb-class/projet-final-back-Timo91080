const mongoose = require('mongoose');
const Article = require('../models/Article');
const mockArticles = require('../models/mockArticles');

mongoose.connect('mongodb://localhost:27017/ArticleFoot_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function importData() {
  await Article.deleteMany();
  await Article.insertMany(
    mockArticles.map(a => ({
      title: a.title,
      content: a.description,
      coverImage: a.image,
      tags: [],
      author: null
    }))
  );
  console.log('Mock articles importés !');
  mongoose.disconnect();
}

importData();                                                                        