var mainImage = document.querySelector('#main-image');
var thumbnailList = document.querySelector('#thumbnail-images');
var thumbnailTemp = document.querySelector('#thumbnail-template').innerHTML;
var leftArrow = document.querySelector('.left-arrow');
var rightArrow = document.querySelector('.right-arrow');



var outData = '';

$.ajax({
  url: '/api/pics'
})
.done(function(data){
  outData = data;
  putOnPage(outData.pictures);

});

function putOnPage(x){
  var totalHTML = '';
  for(var i = 0; i < x.length; i++){
    var html = Mustache.render(thumbnailTemp, x[i]);
    totalHTML += html;
  }
  thumbnailList.innerHTML = totalHTML;
}


thumbnailList.addEventListener('click', function(evt){
  if(evt.target.tagName === 'IMG'){
    var image = evt.target.getAttribute('data-index');
    mainImage.innerHTML = '<img src="'+ image + '" />';
  }
});
var currentMargin = -10;
leftArrow.addEventListener('click', function(){
  currentMargin -= 110;
  thumbnailList.style.marginLeft = currentMargin + 'px';
  console.log(currentMargin);
});
rightArrow.addEventListener('click', function(){
  currentMargin += 100;
  thumbnailList.style.marginLeft = currentMargin + 'px';
  console.log(currentMargin);
});
