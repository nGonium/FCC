require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const dns = require('dns')
const { json, urlencoded } = require('body-parser');
const URL = require('url')

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));
app.use(urlencoded({extended: false}))

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

const db = []

app.post('/api/shorturl', (req, res) => {
  const { url } = req.body
  const { host } = URL.parse(url)
  dns.lookup(host, (err, addr) => {
    if (err) return res.json({ error: 'invalid url' })
    const obj = { 
      original_url: url, 
      short_url: db.length > 0 ? db[db.length - 1].short_url + 1 : 0,
    }
    db.push(obj)
    res.json(obj)
  })
})
app.get('/api/shorturl/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const item = db.find((el) => el.short_url === id)
  if (!item) res.json({ error: "No short URL found for the given input" })
  res.redirect(item.original_url)
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
