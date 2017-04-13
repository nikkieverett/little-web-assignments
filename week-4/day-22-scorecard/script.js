var fs = require('fs');

var fileData = fs.readFile('Most-Recent-Cohorts-Scorecard-Elements.csv', 'utf-8', function(err, data){
  // console.log(data);
  var lines = data.split('\r\n');

  for(var i = 1; i < lines.length-1; i++){
    var line = lines[i];
    var pieces = line.split(',');
    if(pieces[32] !== 'NULL'){
      console.log('Name: ' + pieces[3]);
      console.log('ACT Score: ' + pieces[32]);
    }
  }
});
