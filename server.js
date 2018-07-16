var express = require('express');

//
// APP OBJECT:
//
var app = express();

//
// DB CONNECTION:
//
var mongojs = require('mongojs');
var db = mongojs('channel',['link']);

// REQUIREMENTS:
var bodyparser = require('body-parser');

//
// MIDDLEWARES:
//
app.use(express.static(__dirname + "/channels"));
app.use(bodyparser.json());

//
// HANDLERS:
//
app.post('/link', function(req, res){
  db.link.insert({
    "hotel":req.body.hotel,"location":req.body.location,"channels":req.body.chan,"date":req.body.date,"time":req.body.time
  });
  // db.link.insert([
  //   {hotel: req.body.hotel},
  //   {location: req.body.location},
  //   {channels: req.body.chan},
  //   {time: req.body.time},
  //   {date: req.body.date}
  //    ]);
  console.log(req.body);
});

//
// START DEBUGGING SERVER:
//
app.listen(3000);
console.log("running sucessfully");
