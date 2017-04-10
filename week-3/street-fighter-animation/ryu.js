var ryu = document.querySelector('.ryu');

var ryuxPos = -360;
var ryuyPos = 0;
var ryuMove = 200;
var ryuPunching;

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
window.addEventListener('keydown', function(evt){
  if(evt.keyCode === 68){
    ryuMove -= 10;
    ryu.style.right = ryuMove + 'px';
    ryuWalk();
  }
  if(evt.keyCode === 65){
    ryuMove += 10;
    ryu.style.right = ryuMove + 'px';
    ryuWalk();
  }
  if(evt.keyCode === 20){
    clearInterval(ryuKick);
    ryuPunching = setInterval(ryuPunch, 1000);
  }
});
