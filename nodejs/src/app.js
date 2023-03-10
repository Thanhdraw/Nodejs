const path = require('path');
const express = require('express')//thu vien
var morgan = require('morgan');
var app = express();
const port = 3000;
var handlebars = require('express-handlebars');
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
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})