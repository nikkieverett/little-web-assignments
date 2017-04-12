var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('public'));

app.get('/api/favoritefoods', function(req, res){
  console.log('Calling favorite foods api');
  var output = {
    foods: ['cheese', 'bread', 'nachos', 'burgs']
  };
  res.send(output);
});

app.get('/api/favoritesoda', function(req,res){
  var output = {
    sodas:['Dr Pepper', 'Coke', 'Sunkist']
  };
  res.send(output);
});

app.get('/api/halloffame', function(req,res) {
  fs.readFile('HallOfFame.csv', 'utf-8', function(err, data){
    var lines = data.split('\r\n');

    var output = [];

    for(var i = 0; i < lines.length; i++){
      var values = lines[i].split(',');

      var person = values[0];
      var year = values[1];
      var votes = values[5];

      output.push({
        personId: person,
        year: year,
        votes: votes
      });

    }
    res.send({
      stats: output
    });
  });

});

app.listen(7690, function(){
  console.log('listening at port 7690');
});
