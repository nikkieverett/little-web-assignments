var numbers = [1, 56, 89, 12, 45, 211, 45, 56, 32];

// function loopAndConsoleLog(arr) {
//   for(var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//   }
// }

// loopAndConsoleLog(numbers);

numbers.forEach(function(num) {
  if(num > 50){
    // console.log(num);
  }
});

var output = numbers.filter(function(num) {
  return num > 50;
});

numbers.sort(function(a, b){
  if(a < b) {
    return true;
  }
  else {
    return false;
  }
});
console.log(numbers);
