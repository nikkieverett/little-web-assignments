function Animal(name) {
  this.name = name;
}
Animal.prototype.makeNoise = function(){
};

function Dog(name) {
  this.name = name;
}
Dog.prototype.makeNoise = function(){
  console.log(this.name + ' goes: "Grrrrr"');
}
var fido = new Dog('Fido');
fido.makeNoise();

var spot = new Dog('Spot');
spot.makeNoise();

function Cat(name) {
  this.name = name;
}
Cat.prototype.makeNoise = function(){
  console.log(this.name + ' goes: "Meowwww"');
}
var fluffy = new Cat('Fluffy') {
  fluffy.makeNoise();
}
