var express = require('express');
var app = express();
var pkg = require(__dirname + '/package.json');
var _ = require('underscore');

app.configure( function() {
  app.engine('.html', require('ejs').__express);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'html');
  
  app.use(express.json());
});

app.get('/', function(req, res){
  res.send({ name: pkg.name, version: pkg.version });
});

app.get('/views/*', function(req, res) {
  var view = req.url.replace('/views/','');
  res.render(view);
});

app.get('/*', function(req, res, next) {
  if (/\/api/.test(req.url)) { return next(); }
  if (/\./.test(req.url))  { return next(); }
  res.sendfile(__dirname + '/public/index.html');
});

module.exports = app;
