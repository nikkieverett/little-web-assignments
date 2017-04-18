var someStrings = ['chicken', 'rice', 'pepper', 'carrots', 'peas', 'siracha'];

// someStrings.forEach(function(str){
//   console.log(str);
// });

var longerThan5 = someStrings.filter(function(str) {
  return str.length > 5;
});
// console.log('longer than 5', longerThan5);

var containsLetter = someStrings.filter(function(str){
  return str.indexOf('c') > -1;
  }
);
// console.log(containsLetter);

var makeLi = someStrings.map(function(str) {
  return 'I ate ' + str;
  }
);
console.log(makeLi);
