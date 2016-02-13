// first 15 minute objectives:

// • The app will render all the data from the database to the HTML using handlebars.
// • The app will have 3 buttons 'too hot', 'too cold', and 'just right’
// • When the any of the button is clicked, it will save the state of the room temp in the MySQL database with a timestamp and display on the page.

var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var expressHandlebars = require('express-handlebars');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
var PORT = process.env.NODE_ENV || 3001;
app.engine('handlebars', expressHandlebars({defaultLayout: 'hot-cold-justright-layout'}));
app.set('view engine', 'handlebars');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'hot-cold-justright_db'
});