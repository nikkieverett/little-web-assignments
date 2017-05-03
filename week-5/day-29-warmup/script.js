// This code uses a function called head and a function called tail.
// Unfortunately, those functions aren't built-in to arrays in JS :(
// Fortunately, you can add them to the prototype! Do it!



var nums = [1, 52, 16, 9, 100, 4];
// var strs = ['Mary', 'had', 'a', 'little', 'lamb'];

Array.prototype.head = function(){
  return this[0];
};
var head = nums.head();
console.log(head); //This should be 1

Array.prototype.tail = function() {
  return this.slice(1);
};
var tail = nums.tail();
console.log(tail); //This should be [52, 16, 9, 100, 4]
