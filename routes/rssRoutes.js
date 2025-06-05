const express = require('express');
const Parser = require('rss-parser');
const router = express.Router();
const parser = new Parser();

const feeds = [
  'https://www.lemonde.fr/sport/rss_full.xml',
  'http://feeds.bbci.co.uk/sport/football/rss.xml',
  'https://www.eurosport.fr/rss.xml'
];

router.get('/', async (req, res) => {
  let articles = [];
  for (const url of feeds) {
    const feed = await parser.parseURL(url);
    articles = articles.concat(
      feed.items.map(item => ({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        source: feed.title,
        description: item.contentSnippet,
        image: item.enclosure?.url || null
      }))
    );
  }
  res.json(articles);
});

module.exports = router;