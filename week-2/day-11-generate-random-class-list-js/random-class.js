var peeps = ['Me', 'Stevie', 'Monica', 'Sam', 'Brian', 'David', 'Eric', 'Ali', 'Haley'];

var randomPeeps = [];

for (var i = 0; i < 8; i++) {
  var randomNumber = Math.floor(Math.random() * peeps.length);

  randomPeeps.push(peeps[randomNumber])

}

console.log(randomNumber, peeps[randomNumber]);
