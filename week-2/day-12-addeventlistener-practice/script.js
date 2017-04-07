var theHeader = document.querySelector('#the-header');
//the function declared seperately from the event listener
function clickTheHeader() {
  theHeader.textContent = "Hey you changed me!";
}
theHeader.addEventListener('click', clickTheHeader);


var theParagraph = document.querySelector('p');
//the function declared anonymously inside the event listener
theParagraph.addEventListener('click', function() {
  console.log('cliked the paragraph.');
});

//other event listeners 'mouseover', and 'mouseout'
theParagraph.addEventListener('mouseover', function() {
  console.log('mouse in!');
});
theParagraph.addEventListener('mouseout', function() {
  console.log('cmouse out!');
});

//adding css classes to change dom elements
//this adds a blue background when the header element is hovered over.
//see css for details
theHeader.addEventListener('mouseover', function() {
  theHeader.classList.add('hovery');
});
//removing css classes to change dom elements
//this removes the blue background when the header element is hovered over.
//see css for details
theHeader.addEventListener('mouseout', function() {
  theHeader.classList.remove('hovery');
});

//adding toggle
theParagraph.addEventListener('click', function() {
  theParagraph.classList.toggle('on');
});

//see mdn element classlist for more classlist functions
