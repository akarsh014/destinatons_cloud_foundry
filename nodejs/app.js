'use strict';
var express = require('express');
var cfenv = require("cfenv");

const users = require('./users.json');

let app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/users',function(req, res){
  res.status(200).json(users);
});

let appEnv   = cfenv.getAppEnv();
app.listen(appEnv.port, function() {
    console.log("server starting on " + appEnv.url);
})
