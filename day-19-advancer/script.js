var previous = document.querySelector('#previous-button');
var next = document.querySelector('#next-button');
var display = document.querySelector('#display');

var currentMessageIndex = 0;

var messages =[
  "You're cool",
  "Neato",
  "JavaScript is fun and easy",
  "You don't hate your life or Eric, I promise"
];

display.textContent = messages[0];

next.addEventListener('click', function(){
  currentMessageIndex += 1;
  if(currentMessageIndex >= messages.length){
    currentMessageIndex = 0;
  }
  display.textContent = messages[currentMessageIndex];
});
previous.addEventListener('click', function(){
  currentMessageIndex -= 1;
  if(currentMessageIndex < 0){
    currentMessageIndex = messages.length -1;
  }
  display.textContent = messages[currentMessageIndex];
});
