// Dependencies: express: bodyParser: method_overide
var express = require("express");
var bodyParser = require("body-parser");
var exphbs  = require('express-handlebars');
// var require = require("./config/connection.js")

// Sets up the Express and PORT
var app = express();
var methodOverride = require("method-override");
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing(bodyParser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// handlebars connections for node to use handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Static directory to be served
app.use(express.static("./public/css/burger_style.css"));
// app.use(methodOverride('_method'));
app.use(express.static ("method-override"));

// ROUTES:
app.get('/testing', function(req, res){
   res.send('testing!')
});
app.get('/home', function(req, res){
   res.render('index')
});
// connected to savedata in index.handlebars
app.post('/savedata', function(req, res){
   console.log('Data Successfully Logged!', req.body)
});



// PORT LISTENING
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
