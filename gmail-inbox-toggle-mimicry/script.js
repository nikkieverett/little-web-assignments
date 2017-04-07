var list = document.querySelector('.list');

list.addEventListener('click', function(evt){
  var previous = document.querySelector('.on');
  if(previous !== null) {
    previous.classList.remove('on');
  }

  if(evt.target.tagName === "LI"){
    evt.target.classList.add('on');
  }

});
