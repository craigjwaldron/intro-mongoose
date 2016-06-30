var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
//require model

// get the express app
var app = express();

//require routes
var millie = require ('../routes/millie');
var all = require ('../routes/all');

//use routes
app.use('/millie', millie);

//connect to the database - userDb is the database name
mongoose.connect('mongodb://localhost:27017/userDb');

//parse json
app.use(bodyParser.json());

//enable router

//get all users
app.get('/all', function(req, res) {
  User.find({}, function(err, usersList) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      res.send(usersList);
    }
  });
}); //end get all users

// create route
app.post('/create', function(req, res) {
  console.log('hit create route');
  console.log('req.body = ', req.body);

  var newUser = new User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
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



// server listen
var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Listening on port ', port);
});
