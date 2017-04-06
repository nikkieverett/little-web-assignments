var div = document.getElementById('special-div');


// window.onscroll = function(){
//   if(document.body.scrollTop > 300){
//     div.classList.add('hide');
//   }
//   else if(document.body.scrollTop < 300){
//     div.classList.remove('hide');
//   }
// };


window.addEventListener('scroll', function(){
  if(document.body.scrollTop > 1000){
    div.classList.add('hide');
  }
  else if(document.body.scrollTop < 1000){
    div.classList.remove('hide');
  }
});
