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
app.use('/all', all);

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




// server listen
var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Listening on port ', port);
});
