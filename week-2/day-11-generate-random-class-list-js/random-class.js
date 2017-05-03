// var peeps = ['Me', 'Stevie', 'Monica', 'Sam', 'Brian', 'David', 'Eric', 'Ali', 'Haley'];
//
// var randomPeeps = [];
//
// for (var i = 0; i < 8; i++) {
//   var randomNumber = Math.floor(Math.random() * peeps.length);
//
//   randomPeeps.push(peeps[randomNumber])
//
// }
//
// console.log(randomNumber, peeps[randomNumber]);


var name1 = ['Captain', 'Turbo', 'Galactic', 'The', 'Aqua', 'Fire', 'Iron', 'Super', 'Green', 'Phantom', 'Dark', 'Ghost', 'Professor', 'Atomic', 'Rock', 'Omega', 'Rocket', 'Shadow', 'Agent', 'Silver', 'Wild', 'Wild', 'Wolf', 'Ultra', 'Wonder', 'Doctor', 'Star'];
var name2 = ['X', 'Shield', 'Machine', 'Justice', 'Beast', 'Wing', 'Arrow', 'Skull', 'Blade', 'Bolt', 'Cobra', 'Blaze', 'Soldier', 'Strike', 'Falcon', 'Fang', 'King', 'Surfer', 'Bot', 'Gaurd', 'Thing', 'Claw', 'Brain', 'Master', 'Power', 'Storm'];

var random1 = '';
for(var i = 0; i < name1.length; i++){
  var randomNumber1 = Math.floor(Math.random()*name1.length);

  random1 = name1[randomNumber1];
}
console.log(randomNumber1, name1[randomNumber1]);

var random2 = '';
for(var i = 0; i < name2.length; i++){
  var randomNumber2 = Math.floor(Math.random()*name2.length);

  random2 = name2[randomNumber2];
}
console.log(randomNumber2, name2[randomNumber2]);
