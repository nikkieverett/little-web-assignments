var mainImage = document.querySelector('#main-image');
var thumbnailList = document.querySelector('#thumbnail-images');
var thumbnailTemp = document.querySelector('#thumbnail-template').innerHTML;

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
