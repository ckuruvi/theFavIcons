var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var bios = require('./data');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.get('/bios', function(req, res){
  res.send(bios);

});

app.post('/likes/Charles', function(req,res){
  bios.forEach(function(person){
    if(person.firstName=='Charles'){
      person.likes++;
    }
  });
//  console.log(bios);
  res.sendStatus(200);
});
app.post('/likes/Ethan', function(req,res){
  bios.forEach(function(person){
    if(person.firstName=='Ethan'){
      person.likes++;
    }
  });
//  console.log(bios);
  res.sendStatus(200);
});
app.post('/likes/Bob', function(req,res){
  bios.forEach(function(person){
    if(person.firstName=='Bob'){
      person.likes++;
    }
    });
  //  console.log(bios);
    res.sendStatus(200);
});
app.post('/likes/Mathias', function(req,res){
  bios.forEach(function(person){
    if(person.firstName=='Mathias'){
      person.likes++;
    }
  });
//  console.log(bios);
  res.sendStatus(200);
});

app.get('/likes', function(req, res) {
  console.log(bios);
  res.send(bios);
  //res.sendStatus(200);

});


app.listen(3000);
