var downButton = document.querySelector('#down');
var upButton = document.querySelector('#up');
var display = document.querySelector('#number');

var counter = 0;

downButton.addEventListener('click', function(){
  if(counter <= 0){
    display.textContent = 0;
  }
  else {
    display.textContent = counter -= 1;
    console.log(counter);
  }
});
upButton.addEventListener('click', function(){
  display.textContent = counter += 1;
  console.log(counter);
});
