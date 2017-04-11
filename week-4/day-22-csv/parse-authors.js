var fs = require('fs');

console.log('----------------------------')
console.log('synchronous example')
console.log('----------------------------')

var fileData = fs.readFileSync('authors.csv', 'utf-8');
var lines = fileData.split('\n');

for(var i = 1; i < lines.length-1; i++){
  var line =lines[i];
  var pieces = line.split(',');
  console.log('Name-' + pieces[0]);
}

console.log('----------------------------')
console.log('asynchronous example')
console.log('----------------------------')

fs.readFile('authors.csv','utf-8', function(err, data){
  var lines = fileData.split('\n');

  for(var i = 1; i < lines.length-1; i++){
    var line =lines[i];
    var pieces = line.split(',');
    console.log('Name-' + pieces[0]);
  }
});
