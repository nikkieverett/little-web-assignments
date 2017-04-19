var peeps = [
  { firstName: 'Jane', lastName: 'Jones', age: 12 },
  { firstName: 'John', lastName: 'Smith', age: 18 },
  { firstName: 'Fred', lastName: 'Johnson', age: 11 },
  { firstName: 'Jaime', lastName: 'Oliver', age: 9 },
  { firstName: 'Ragan', lastName: 'Perkinson', age: 1 },
  { firstName: 'Chris', lastName: 'Smith', age: 5 },
  { firstName: 'George', lastName: 'Jungle', age: 17 },
  { firstName: 'Mike', lastName: 'Tyson', age: 16 },
  { firstName: 'Jimmy', lastName: 'Smith', age: 21 },
  { firstName: 'Chris', lastName: 'Thompson', age: 17 }
];

peeps.forEach(function(obj){
  // console.log(obj.firstName);
});
var youngerThan15 = peeps.filter(function(obj){
  return obj.age < 15;
});
// console.log(youngerThan15);
var olderThan15 = peeps.filter(function(obj){
  return obj.age >= 15;
});
// console.log(olderThan15);
var namedChris = peeps.filter(function(obj){
  return obj.firstName === 'Chris';
});
// console.log(namedChris);
var iName = peeps.filter(function(obj){
  return obj.firstName.indexOf('i') > -1;
});
// console.log(iName);
var names = peeps.map(function(obj){
  return obj.firstName + ' ' + obj.lastName;
});
// console.log(names);
var fullName = peeps.map(function(obj){
  // obj.fullName = obj.firstName + ' ' + obj.lastName;
  // return obj;
  var newObj = {
    firstName: obj.firstName,
    lastName: obj.lastName,
    fullName: obj.firstName + ' ' + obj.lastName,
    age: obj.age
  };
  console.log(newObj);
});
