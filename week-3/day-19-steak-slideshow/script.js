var previous = document.querySelector('#previous');
var next = document.querySelector('#next');
var play = document.querySelector('#play');
var stop = document.querySelector('#stop');
var imageDiv = document.querySelector('#image');

var images = ['<img src="steak1.jpg" width="500px"/>','<img src="steak2.jpg" width="500px"/>','<img src="steak3.jpg" width="500px"/>','<img src="steak4.jpg" width="500px"/>','<img src="steak5.jpg" width="500px"/>'];

var currentImageIndex = 0;
imageDiv.innerHTML = images[0];

next.addEventListener('click', function(){
  if(currentImageIndex > images.length -2){
    currentImageIndex = 0;
  }
  currentImageIndex += 1;
  imageDiv.innerHTML = images[currentImageIndex];
});
previous.addEventListener('click', function(){
  if(currentImageIndex <= 0){
    currentImageIndex = images.length;
  }
  currentImageIndex -= 1;
  imageDiv.innerHTML = images[currentImageIndex];
});

var on = false;

function animate(){
  currentImageIndex += 1;
  imageDiv.innerHTML = images[currentImageIndex];
  if(currentImageIndex > images.length -2){
    currentImageIndex = 0;
  }
}

play.addEventListener('click', function(){
  intervalId = setInterval(animate, 2000);
  on = true;
  if(on === true){
    play.className = "hide";
    stop.className = "show";
  }
});
stop.addEventListener('click', function(){
  on = false;
  clearInterval(intervalId);
  if(on === false){
    play.className = "show";
    stop.className = "hide";
  }
});
