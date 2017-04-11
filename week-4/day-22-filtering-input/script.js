var list = document.querySelector('#food-list');
var input = document.querySelector('#query');

var foods = [
  'steak',
  'nachos',
  'wings',
  'fried shrimp',
  'pizza',
  'burgers'
];

createList(foods);

input.addEventListener('keydown', function(evt){
  if(evt.keyCode !== 13){
    return;
  }

  var newList = [];
  for(var i = 0; i < foods.length; i++){
    if(foods[i].indexOf(input.value) > -1){
      newList.push(foods[i]);
    }
  }

  list.innerHTML = '';
  createList(newList);
});

function createList(arr){
  for(i = 0; i < arr.length; i++){
    var newLi = document.createElement('li');
    newLi.textContent = arr[i];
    list.appendChild(newLi);
  }
}
