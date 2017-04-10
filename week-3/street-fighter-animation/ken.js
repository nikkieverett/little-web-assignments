var ken = document.querySelector('.ken');
var startButton = document.querySelector('.startButton');

var kenxPos = 0; //-10
var kenyPos = 0; //-117
var kenMove = 200;
var kenKicking;
var kenPunching;
var kenWalkingForwards;
var kenWalkingBackwards;

var intervalOn = false;

function kenPunch(){
  kenyPos = -236;
  kenxPos -= 102;
  ken.style.backgroundPositionY = kenyPos + 'px';
  ken.style.backgroundPositionX = kenxPos + 'px';
  if(kenxPos <= -204){
    kenxPos = 0;
    clearInterval(kenPunching);
  }
}
function kenManualWalk() {
  kenyPos = -355;
  kenxPos -= 102;
  ken.style.backgroundPositionY = kenyPos + 'px';
  ken.style.backgroundPositionX = kenxPos + 'px';
  if(kenxPos <= -408){
    kenxPos = 0;
  }
}
function kenAnimatedWalkForwards() {
  kenManualWalk();
  kenMove += 10;
  ken.style.left = kenMove + 'px';
  if (kenMove > 330){
    clearInterval(kenWalkingForwards);
    kenWalkingBackwards = setInterval(kenAnimatedWalkBackwards, 200);
  }
  console.log(kenMove);
}
function kenAnimatedWalkBackwards(){
  kenManualWalk();
  kenMove -= 10;
  ken.style.left = kenMove + 'px';
  if(kenMove < 270){
    clearInterval(kenWalkingBackwards);
    kenKicking = setInterval(kenKick, 200);
  }
  console.log(kenMove);
}
function kenKick() {
  console.log(kenxPos);
  
  kenyPos = -706;
  kenxPos -= 105;
  ken.style.backgroundPositionY = kenyPos + 'px';
  ken.style.backgroundPositionX = kenxPos + 'px';
  if(kenxPos === -410){
    kenxPos = -10;
    clearInterval(kenKicking);
  }
}

window.addEventListener('keydown', function(evt){
  //move right
  if(evt.keyCode === 39){
    kenMove += 10;
    ken.style.left = kenMove + 'px';
    kenManualWalk();
  }
  //move left
  if(evt.keyCode === 37){
    kenMove -= 10;
    ken.style.left = kenMove + 'px';
    kenManualWalk();
  }
  //kick
  if(evt.keyCode === 93){
    clearInterval(kenKicking);
    kenKicking = setInterval(kenKick, 1000);
  }
  //punch
  if(evt.keyCode === 18){
    clearInterval(kenPunching);
    kenPunching = setInterval(kenPunch, 100);
  }
});

startButton.addEventListener('click', function(){
  kenWalkingForwards = setInterval(kenAnimatedWalkForwards, 200);
});
