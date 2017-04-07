var div = document.getElementById('special-div');
var isHidden = false;


// window.onscroll = function(){
//   if(document.body.scrollTop > 300){
//     div.classList.add('hide');
//   }
//   else if(document.body.scrollTop < 300){
//     div.classList.remove('hide');
//   }
// };


window.addEventListener('scroll', function(){
  if(document.body.scrollTop > 1000 && isHidden === false){
    div.classList.add('hide');
    isHidden = true;
  }
  else if(document.body.scrollTop < 1000 && isHidden === true){
    div.classList.remove('hide');
    isHidden = false;
  }
});

window.addEventListener('resize', function(){
  console.log('resizing');
});
