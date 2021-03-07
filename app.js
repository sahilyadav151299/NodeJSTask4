const express = require('express');
const path = require('path');

const formRoute = require('./routes/form');
const usersRoute = require('./routes/users');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

app.use(formRoute);
app.use(usersRoute);

app.listen(3000);