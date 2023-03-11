const path = require('path');
const express = require('express')//thu vien
const morgan = require('morgan');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
app.use(express.static(path.join(__dirname, 'public')));


// HTTP logger
app.use(morgan('combined'));
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log('PATH: ',path.join(__dirname, 'resources/views'));

//route
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});
app.get('/search', (req, res) => {
  res.render('search');
});
app.post('/search', (req, res) => {
  console.log(req.body);
  res.send('Okie');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});