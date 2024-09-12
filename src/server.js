const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

//Express settings
app.set('port', 3000);
app.set('serverName', 'REST_api');

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
const HomeRoute = require('./routes/home')
const UsersRoute = require('./routes/users')

app.use(HomeRoute);
app.use(UsersRoute);

//Static files
app.use('/public', express.static(path.join(__dirname, './public')))

app.listen(app.get('port'));
console.log(`Server ${app.get('serverName')} on port ${app.get('port')}`);
