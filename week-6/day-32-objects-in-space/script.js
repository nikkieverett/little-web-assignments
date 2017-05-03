function Counter(){
  this.count = 0;
}

Counter.prototype.createDOM = function(x, y){
  var newDiv = document.createElement('div');
  newDiv.textContent="0";
  newDiv.style.left = (x - 50) + 'px';
  newDiv.style.top = (y - 50) + 'px';

  var self = this;
  newDiv.addEventListener('click', function(){
    self.count += 1;
    newDiv.textContent = self.count;
  });

  return newDiv;
};

document.body.addEventListener('click', function(evt){
  if(evt.target.tagName === 'DIV'){

  }
  else{
    var counter = new Counter();
    var div = counter.createDOM(evt.pageX, evt.pageY);
    document.body.appendChild(div);
  }
});
