var foodList = document.querySelector('#food-list');

var promise = $.ajax({
  url:'/api/favoritefoods'
});

promise.done(function(data){
  for(var i =0; i < data.foods.length; i++) {
    var li = document.createElement('li');
    li.textContent = data.foods[i];
    foodList.appendChild(li);
  }
});
