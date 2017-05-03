var clickMe = document.querySelector('#click-me');
var clear = document.querySelector('#clear');


console.log();

var count = Number(localStorage.getItem('click-count'));
clickMe.innerHTML = count;

clickMe.addEventListener('click', function(){
  count +=1;
  localStorage.setItem('click-count', count);
  clickMe.textContent = count;
});
clear.addEventListener('click', function(){
localStorage.clear();
});
