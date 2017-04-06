var nav = document.querySelector('nav');

var isOn = false;

window.addEventListener('scroll', function(){
  if(document.body.scrollTop > 300 && isOn === false){
    nav.classList.add('nav-bg-on');
    isOn = true;
  }
  else if(document.body.scrollTop < 300 && isOn === true){
    nav.classList.remove('nav-bg-on');
    isOn = false;
  }
});
