var express = require('express');
var router = express.Router();

var path = require ('path');
var User = require('../models/user');

// create route
router.use('/', function(req, res) {
  console.log('hit create route');
  console.log('req.body = ', req.body);

  var newUser = new User({
    name: 'petee',
    username: 'liberetine',
    password: 'cuddles'
  });

  newUser.save(function(err) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('User saved successfully!');
      res.sendStatus(200);
    }
  });
});

module.exports = router;
