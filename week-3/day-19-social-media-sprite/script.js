var entries = document.querySelector('.entries');

var books = [
  {
    image: '<img src="book1.png"/>',
    title: 'The Search for Nefrtiti: The True Story of an Amazing Discovery',
    author: 'J Fletcher',
    type:'Paperback',
    prime: true,
    price: '$7.65',
    rating: '4'
  },
  {
    image: '<img src="book2.png"/>',
    title: 'Mythology 101: From Gods and Goddesses to Monsters and Mortals, your Guide to Ancient Mythology',
    author: 'Kathleen Sears',
    type:'Paperback',
    prime: false,
    price: '$9.95',
    rating: '5'
  },
  {
    image: '<img src="book3.png"/>',
    title: 'Byzantium',
    author: 'Robert Wernick',
    type:'Hardback',
    prime: false,
    price: '$7.65',
    rating: '3'
  },
  {
    image: '<img src="book6.png"/>',
    title: 'The Drunken Botanist',
    author: 'Amy Stewart',
    type:'Hardback',
    prime: true,
    price: '$18.99',
    rating: '5'
  },
  {
    image: '<img src="book4.png"/>',
    title: 'The Art of War',
    author: 'Sun Tzu',
    type:'Paperback',
    prime: true,
    price: '$23.95',
    rating: '3'
  },
  {
    image: '<img src="book5.png"/>',
    title: 'The Plague of War: Athens, Sparta, and the Struggle for Ancient Greece (Ancient Warfare and Civilization)',
    author: 'Jennifer T. Roberts',
    type:'Hardback',
    prime: false,
    price: '$17.98',
    rating: '4'
  }
];

for(var i =0; i < books.length; i++){
  var book = document.createElement('div');
  book.classList.add('entry');
  book.innerHTML = books[i].image;
  entries.appendChild(book);

  var title = document.createElement('h1');
  title.textContent = books[i].title;
  book.appendChild(title);

  var author = document.createElement('p');
  author.textContent = books[i].author;
  book.appendChild(author);

  var type = document.createElement('p');
  type.classList.add('type');
  type.textContent = books[i].type;
  book.appendChild(type);

  var price = document.createElement('p');
  price.classList.add('price');
  price.textContent = books[i].price;
  book.appendChild(price);

  var rating = document.createElement('div');
  rating.classList.add('rating');
  if(books[i].rating === '5'){
    rating.classList.add('fiveStars');
  }
  else if(books[i].rating === '4'){
    rating.classList.add('fourStars');
  }
  else if(books[i].rating === '3'){
    rating.classList.add('threeStars');
  }
  book.appendChild(rating);

  if(books[i].prime === true){
    var prime = document.createElement('div');
    prime.classList.add('prime');
    book.appendChild(prime);
  }
}
