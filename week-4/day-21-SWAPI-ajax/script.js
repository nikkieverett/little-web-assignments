var promise = $.ajax({
  url: 'http://swapi.co/api/people'
});

var peopleList = document.querySelector('#people-list');
var templateDOM = document.querySelector('#row-template');

promise.done(function(data) {
  var template = templateDOM.innerHTML;
  var totalHTML = '';

  for (var i =0; i < data.results.length; i++){
    var html = Mustache.render(template, data.results[i]);
    totalHTML += html;
  }

  peopleList.innerHTML = totalHTML;

});