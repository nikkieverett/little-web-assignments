var ryu = document.querySelector('.ryu');
var ken = document.querySelector('.ken');
var startButton = document.querySelector('.startButton');

var ryuxPos = -360;
var ryuyPos = 0;
var ryuMove = 200;
var ryuPunching;

var kenxPos = -10;
var kenyPos = -117;
var kenMove = 200;
var kenKicking;
var kenPunching;
var kenWalking;

var intervalOn = false;


function ryuWalk() {
  ryuyPos = -1395;
  ryuxPos += 62;
  ryu.style.backgroundPositionY = ryuyPos + 'px';
  ryu.style.backgroundPositionX = ryuxPos + 'px';
  if(ryuxPos === -112){
    ryuxPos = -360;
  }
}
function ryuPunch() {
  console.log(ryuxPos);
  ryuyPos = -110;
  ryuxPos += 62;
  ryu.style.backgroundPositionY = ryuyPos + 'px';
  ryu.style.backgroundPositionX = ryuxPos + 'px';
  if(ryuxPos === -112){
    ryuxPos = -360;
    clearInterval(ryuPunching);
  }
}
function kenPunch(){
  kenyPos = -236;
  kenxPos -= 100;
  console.log(kenxPos);
  ken.style.backgroundPositionY = kenyPos + 'px';
  ken.style.backgroundPositionX = kenxPos + 'px';
  if(kenxPos === -210){
    kenxPos = -10;
    clearInterval(kenPunching);
  }
}
function kenWalk() {
  kenyPos = -355;
  kenxPos -= 100;
  ken.style.backgroundPositionY = kenyPos + 'px';
  ken.style.backgroundPositionX = kenxPos + 'px';
  if(kenxPos === -410){
    kenxPos = -10;
  }
if(intervalOn === true){
    kenMove += 10;
    ken.style.left = kenMove + 'px';
  }
}
function kenKick() {
  kenyPos = -706;
  kenxPos -= 100;
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
    kenWalk();
  }
  if(evt.keyCode === 68){
    ryuMove -= 10;
    ryu.style.right = ryuMove + 'px';
    ryuWalk();
  }
  //move left
  if(evt.keyCode === 37){
    kenMove -= 10;
    ken.style.left = kenMove + 'px';
    kenWalk();
  }
  if(evt.keyCode === 65){
    ryuMove += 10;
    ryu.style.right = ryuMove + 'px';
    ryuWalk();
  }
  //kick
  if(evt.keyCode === 93){
    clearInterval(kenKick);
    kenKicking = setInterval(kenKick, 100);
  }
  //punch
  if(evt.keyCode === 18){
    clearInterval(kenPunch);
    kenPunching = setInterval(kenPunch, 100);
  }
  if(evt.keyCode === 20){
    clearInterval(ryuKick);
    ryuPunching = setInterval(ryuPunch, 1000);
  }
});


startButton.addEventListener('click', function(){
  intervalOn = true;
  kenWalking = setInterval(kenWalk, 200);
});
