var link = document.getElementById('link');
var stopButton = document.getElementById('stop-button');
var startButton = document.getElementById('start-button');
var Xposition = 0;
var Yposition = -650;


window.addEventListener('keydown', function(evt){
  console.log(evt);
  if(evt.keyCode === 37){
    Yposition = -650;
  }
  else if (evt.keyCode === 39) {
    Yposition = -910;
  }
  else if (evt.keyCode === 40){
    Yposition = -530;
  }
});

var intervalId = setInterval(animate, 50);


startButton.addEventListener('click', function(){
  intervalId = setInterval(animate, 50);
});
stopButton.addEventListener('click', function(){
  clearInterval(intervalId);
});

function animate() {
  Xposition -= 120;
  link.style.backgroundPositionY = Yposition + 'px';
  link.style.backgroundPositionX = Xposition + 'px';
}
