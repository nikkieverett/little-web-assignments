var downButton = document.querySelector('#down-button');
var upButton = document.querySelector('#up-button');
var leftButton = document.querySelector('#left-button');
var rightButton = document.querySelector('#right-button');

var theBall = document.querySelector('.circle');

var yValue = 0;
var xValue = 0;

downButton.addEventListener('click', function() {
  yValue += 15;
  theBall.style.top = yValue + 'px';
});

upButton.addEventListener('click', function(){
  yValue -= 15;
  theBall.style.top = yValue + 'px';
});

leftButton.addEventListener('click', function(){
  xValue -= 15;
  theBall.style.left = xValue + 'px';
});

rightButton.addEventListener('click', function(){
  xValue += 15;
  theBall.style.left = xValue + 'px';
});
