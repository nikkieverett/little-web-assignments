var theSVG = document.querySelector('svg');

theSVG.addEventListener('click', function() {
  theSVG.classList.toggle('flipped');
  var theList = document.querySelector('ol');
  theList.classList.toggle('hidden');
});
