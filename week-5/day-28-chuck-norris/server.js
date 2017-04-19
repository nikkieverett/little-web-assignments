var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/api/chucknorris', function(req, res){
  res.send();
});

app.listen(5678, function(){
  console.log('listening on port 5678');
});
