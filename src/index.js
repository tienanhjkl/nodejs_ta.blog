const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const port = 3000;

const app = express();
const hbs = handlebars.create();

const route = require('./routes');

const db =require('./config/db');

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
// Template Engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes Init
route(app);

app.listen(port, () => {
  console.log(`App listening at http:localhost:${port}`);
});
