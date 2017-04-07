var theList = document.querySelector('#the-list');

var groceryList = [
  'sausage',
  'shrimp',
  'Texjoy',
  'Dr Pepper',
  'steak',
  'Tostitos',
  'cheese',
  'gum'
];

for(var i = 0; i < groceryList.length; i++){
  var newLi = document.createElement('li');
  newLi.textContent = groceryList[i];
  theList.appendChild(newLi);
}
