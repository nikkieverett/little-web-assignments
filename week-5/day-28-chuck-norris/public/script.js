function makeAjaxCall(){
  $.ajax({
    url:'https://api.icndb.com/jokes/random'
  })
  .done(function(data){
    joke.textContent = data.value.joke;
  });
}
function nameAjaxCall(x, y){
  $.ajax({
    url: 'https://api.icndb.com/jokes/random?firstName=' + x + '&lastName=' + y
  })
  .done(function(data){
    joke.innerHTML = data.value.joke;
  });
}
var joke = document.querySelector('#joke');
var button = document.querySelector('#button');
button.addEventListener('click', function(){
  makeAjaxCall();
});

var inputField = document.querySelector('#input');

inputField.addEventListener('keyup', function(evt){
  if(evt.keyCode === 13){
    var input = inputField.value.split(' ');
    var FirstName = input.splice(0,1);
    var LastName = input.splice(0,1);
    nameAjaxCall(FirstName, LastName);
  }
});
