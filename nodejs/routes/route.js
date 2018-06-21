var express = require('express');
var router = express.Router();
const url = '/users';
const users = require('../users.json');

router.get('/', function(req, res, next) {
  res.send("Main Page!!")
});

router.get(url, function(req, res, next) {
  console.log("Get All Request ");
  res.status(200).json(users);
  //res.send("Main Page!!")
});

module.exports = router;
