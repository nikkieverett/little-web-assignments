var promise = $.ajax({
  url: 'http://swapi.co/api/planets'
});

var planetList = document.querySelector('#planets-list');
var templateDOM = document.querySelector('#row-template');

promise.done(function(data) {
  var template = templateDOM.innerHTML;
  var totalHTML = '';

  console.log(data);

  for (var i =0; i < data.results.length; i++){
    var html = Mustache.render(template, data.results[i]);
    totalHTML += html;
  }

  planetList.innerHTML = totalHTML;

});
