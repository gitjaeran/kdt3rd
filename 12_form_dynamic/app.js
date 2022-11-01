const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing (경로 설정)
app.get('/', function (req, res) {
  res.render('dynamic', { title: '동적 폼을 배워보자!!' });
});

// 1. ajax
// GET /ajax
app.get('/ajax', function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// POST /ajax
app.post('/ajax', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// 2. axios
// GET /axios
app.get('/axios', function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// POST /axios
app.post('/axios', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// 3. fetch
// GET /fetch
app.get('/fetch', function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// POST /fetch
app.post('/fetch', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});