const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('views'));
app.use(express.static('files'));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/api', (req, res) => {
  res.redirect('https://api.chillex.ga');
});

app.get('/botlist', (req, res) => {
  res.redirect('https://bots.chillex.ga');
});

app.get('/twitter', (req, res) => {
  res.redirect('https://twitter.com/chillex_hangout');
});

app.get('/twitch', (req, res) => {
  res.redirect('https://twitch.tv/teamchillex');
});

app.listen(port, () => console.log(`Website is listening at http://localhost:${port}`));