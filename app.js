const config = require('./config');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('port', config.port);
app.use('/', express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Welcome to Contoso!',   
  });
});

app.get('/who', (req, res) => {
  res.render('who', {
    title: 'Who We Are',   
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact Us',   
  });
});

app.listen(config.port, () => {
  console.log(`Demo app is running on ${config.port}!`);
});
