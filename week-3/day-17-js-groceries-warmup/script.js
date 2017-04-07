var groceries = [
  { name: 'milk', cost: 5.20 },
  { name: 'ribeye', cost: 12.78 },
  { name: 'gum', cost: 1.12 },
  { name: 'flowers', cost: 7.99 },
  { name: 'pork chops', cost: 8.50 },
  { name: 'eggs', cost: 3.40 },
  { name: 'Dr Pepper', cost: 0.99 },
  { name: 'lip balm', cost: 0.99 },
  { name: 'tissues', cost: 1.30 },
  { name: 'toothbrush', cost: 3.00 },
  { name: 'Claritin', cost: 12.36 },
  { name: 'Tic-Tacs', cost: 1.85 }
];


//Make this function calculate and return the average cost.
var result = 0;
function averageCost(items) {
  for(var i = 0; i < groceries.length; i++){
    result += groceries[i].cost;
  }
  return result / groceries.length;
}

var average = averageCost(groceries);
console.log('average', average);


//Make this function return the most expensive item.

function mostExpensive(items) {
  var current = groceries[0].cost;
  for(var i = 0; i < groceries.length; i++){
    if(groceries[i].cost > current) {
      current = groceries[i].cost;
    }
  }
  return current;
}

var mostExpensiveItem = mostExpensive(groceries);
console.log('most expensive', mostExpensiveItem);


//Make this function return the least expensive item.
function leastExpensive(items) {
  var current2 = groceries[0].cost;
  for(var i = 0; i < groceries.length; i++){
    if(groceries[i].cost < current2) {
      current2 = groceries[i].cost;
    }
  }
  return current2;
}

var leastExpensiveItem = leastExpensive(groceries);
console.log('least expensive', leastExpensiveItem);

var char = '#';
var str = '';
var num = 50;

for(var i = 0; i <= num; i ++) {
  str += char;
  console.log(str);
}
