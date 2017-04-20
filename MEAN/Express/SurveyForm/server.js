var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded());
//line 7 not needed for this assignment, no static files
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
//line 10, allow view engine to be 'ejs'
app.set('view engine', 'ejs');

var route = require('./routes/index.js')(app);

app.listen(8000, function() {
  console.log("listening on port 8000");
});
