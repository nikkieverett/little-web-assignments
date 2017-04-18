var swapiPeopleOL = document.querySelector('#swapi-people');
var templateDOM = document.querySelector('#row-template').innerHTML;
var detailsDiv = document.querySelector('#details');
var detailTemplate = document.querySelector('#detail-template').innerHTML;
var ajaxData;

$.ajax({
  url: 'http://swapi.co/api/people'
})
.done(function(data) {
  ajaxData = data;
  var html = '';
  for(var i = 0; i < data.results.length; i++){
    html += Mustache.render(templateDOM, {
    index: i,
    name: data.results[i].name
    });
  }
  swapiPeopleOL.innerHTML = html;
});

swapiPeopleOL.addEventListener('click', function(evt){

  if(evt.target.tagName === "LI"){
    var index = evt.target.getAttribute('data-index');
    var person = ajaxData.results[index];
    var personDetails = Mustache.render(detailTemplate, person);

    detailsDiv.innerHTML= personDetails;
  }
});
