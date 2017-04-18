var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/api/violation_data', function(req, res){
  fs.readFile('violation-data.csv', 'utf-8', function(err,data){
    var lines = data.split('\n');

    var arr = [];

    for(var i=1; i < lines.length-1; i++){
      var values = lines[i].split(',');

      var date = values[0];
      var product = values[1];
      var violation = values[2];
      var firm = values[3];

      arr.push({
        date: date,
        product: product,
        violation: violation,
        firm: firm,
      });
    }

    res.send({
      items: arr
    });
  });
});

app.get('/about', function(req, res){
  res.render('pages/about');
});

app.listen('4321', function(){
  console.log('listening on port 4321');
});
