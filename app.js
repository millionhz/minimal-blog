const express = require('express');
const path = require('path');

const errorPage = require('./middlewares/error');

const indexRouter = require('./routes/index');
const postRouter = require('./routes/post');
const composeRouter = require('./routes/compose');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/post', postRouter);
app.use('/compose', composeRouter);

app.use(errorPage);

app.listen(process.env.PORT);
