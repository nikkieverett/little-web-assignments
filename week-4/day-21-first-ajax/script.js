var peopleList = document.querySelector('#people-list');

var promise = $.ajax({
  url: 'http://swapi.co/api/people'
});

promise.done(function(data) {

  for (var i =0; i < data.results.length; i++){
    var people = document.createElement("li");
    peopleList.appendChild(people);

    var personName = document.createElement("h2");
    personName.textContent = data.results[i].name;
    people.appendChild(personName);

    var gender = document.createElement('div');
    gender.textContent = "Gender: " + data.results[i].gender;
    people.appendChild(gender);

    var haircolor = document.createElement('div');
    haircolor.textContent = 'Hair Color: ' + data.results[i].hair_color;
    people.appendChild(haircolor);
  }

});
