var express = require("express")
var app = express();
var expressLayouts = require('express-ejs-layouts');

require("./user.js")

app.engine('.html', require('ejs').__express);

// Optional since express defaults to CWD/views
app.set('views', __dirname + '/layout');

// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
app.set('view engine', 'html');
app.set('layout', 'layout')

app.use(expressLayouts)

// Dummy users
var users = [
  { name: 'tobi', email: 'tobi@learnboost.com' },
  { name: 'loki', email: 'loki@learnboost.com' },
  { name: 'jane', email: 'jane@learnboost.com' }
];

app.get('/', function(req, res) {
  res.render('index', { title: 'The index page!', users: users })
});

app.listen(process.env.PORT, process.env.IP);

// Note: when spawning a server on Cloud9 IDE, 
// listen on the process.env.PORT and process.env.IP environment variables

// Click the 'Run' button at the top to start your server,
// then click the URL that is emitted to the Output tab of the console