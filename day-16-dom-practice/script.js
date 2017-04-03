
var buttonClick = document.getElementById('click-me');
var countNum = document.getElementById('count-display');

var clickCount = 0;

buttonClick.addEventListener('click', function(){
  clickCount++;
  countNum.textContent= 'you clicked ' + clickCount + ' times!';
});
//----------------------------------------OBJECTS AND ARRAYS

var addButton = document.getElementById('add-to-list');
var list = document.getElementById('list-stuff');


addButton.addEventListener('click', function(){
  // var currentHTML = list.innerHTML;
  // currentHTML += '<li>cheese balls</li>';
  // list.innerHTML = currentHTML;
  var newItem = document.createElement('li');
  newItem.textContent = 'cheese balls';
  list.appendChild(newItem);
});
//----------------------------------------OBJECTS AND ARRAYS

var foodList = document.getElementById('fave-foods');
var foods = ['fried rice', 'brownies', 'spicy chicken sandwhich', 'fajitas', 'cheesecake'];

for(var i = 0; i < foods.length; i++) {
  var newItem = document.createElement('li');
  newItem.textContent = foods[i];
  foodList.appendChild(newItem);
}
//----------------------------------------OBJECTS AND ARRAYS
var people = [
  {
    name: 'Eric',
    age: '41'
  },

  {
      name: 'Nikki',
    age: '24'
  },

  {
     name: 'Bentley',
    age: '7'
  },
];

for (var i = 0; i < people.length; i++) {
  var person = people[i];
  console.log(person.name);
}
//----------------------------------------OBJECTS AND ARRAYS

var books = [
  {
    name: "Intelligent Person's Guide to Mud",
    author: "Frank Lyn",
    pageCount: 60
  },
  {
    name: 'Tao of Steak',
    author: 'Eric Sowell',
    pageCount: 135
  },
  {
    name: 'Books are Great',
    author: 'Guy Pants',
    pageCount: 190
  },
  {
    name: 'How to be a Sucker',
    author: 'Frank Lyn',
    pageCount: 83
  }
];

var bookList = document.getElementById('book-list');
var avgPages = document.getElementById('avg-pages');

var totalPages = 0;

for(var i = 0; i < books.length; i++) {
  var newItem = document.createElement('li');
  newItem.textContent =
  books[i].name + ' (' + books[i].author + ' - '  + books[i].pageCount  + ' pages)';
  bookList.appendChild(newItem);

  totalPages += books[i].pageCount;
}

avgPages.textContent = 'Average number of pages: ' + totalPages/books.length;
