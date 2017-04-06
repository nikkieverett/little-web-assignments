//begining set of numbers
var nums = [1, 2, 3, 4, 5, 6];
//array to put random numbers into
var randomArray = [];

//keeps track of beginning array length as things are removed
var count = nums.length;


for(var i = 0; i < count; i++){
  //generates a random number based on current length of array
  var randomIndex = Math.floor(Math.random() * nums.length);

  //takes a number from beginning array at the index of the randomly generated number, removes it, and pushes it onto the new array.
  var randomNum = nums[randomIndex];
  nums.splice(randomIndex, 1);
  randomArray.push(randomNum);

}
console.log(randomArray);
