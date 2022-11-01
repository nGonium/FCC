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
    const len = db.push(url)
    const obj = { original_url: url, short_url: len - 1}
    res.json(obj)
  })
})
app.get('/api/shorturl/:id', (req, res) => {
  res.redirect(db[req.params.id])
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
