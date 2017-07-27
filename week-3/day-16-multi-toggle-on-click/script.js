// var bob = document.getElementById('bob');
// var sue = document.getElementById('sue');
// var fred = document.getElementById('fred');
// var jack = document.getElementById('jack');
// var dean = document.getElementById('dean');
//
// bob.addEventListener('click', function(){
//   bob.classList.toggle('clicked');
// });
// sue.addEventListener('click', function(){
//   sue.classList.toggle('clicked');
// });
// fred.addEventListener('click', function(){
//   fred.classList.toggle('clicked');
// });
// jack.addEventListener('click', function(){
//   jack.classList.toggle('clicked');
// });
// dean.addEventListener('click', function(){
//   dean.classList.toggle('clicked');
// });

var button = document.querySelector('#add-thing');
var container = document.querySelector('.all-the-circles');

container.addEventListener('click', function(evt){
  console.log(evt.target.tagName);
  if (evt.target.tagName === 'LI')
  evt.target.classList.toggle('clicked');
});

button.addEventListener('click', function(){
  var newCircle = document.createElement('li');
  newCircle.textContent = 'new';
  newCircle.classList.add('circle');
  container.appendChild(newCircle);

});
