const express = require('express');
// const { use } = require('./routes');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/////////////////
const indexRouter = require('./routes');
app.use('/', indexRouter);
/////////////////


const userRouter = require('./routes');
app.use('/', userRouter);


app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
