var peopleList = document.querySelector('#people-list');
var planetList = document.querySelector('#planets-list');
var starshipList = document.querySelector('#starships-list');


var promise1 = $.ajax({
  url: 'http://swapi.co/api/people'
});
var promise2 = $.ajax({
  url: 'http://swapi.co/api/planets'
});
var promise3 = $.ajax({
  url: 'http://swapi.co/api/starships'
});

promise1.done(function(data) {

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

promise2.done(function(data) {
  for (var i =0; i < data.results.length; i++){
    var planets = document.createElement('li');
    planetList.appendChild(planets);

    var planetName = document.createElement('h2');
    planetName.textContent = data.results[i].name;
    planets.appendChild(planetName);

    var climate = document.createElement('div');
    climate.textContent = "climate: " + data.results[i].climate;
    planets.appendChild(climate);

    var population = document.createElement('div');
    population.textContent = "population: " + data.results[i].population;
    planets.appendChild(population);

    var terrain = document.createElement('div');
    terrain.textContent = "terrain: " + data.results[i].terrain;
    planets.appendChild(terrain);
  }
});

promise3.done(function(data) {
  console.log(data);
  for (var i = 0; i < data.results.length; i ++){
    var starships = document.createElement('li');
    starshipList.appendChild(starships);

    var starshipName = document.createElement('h2');
    starshipName.textContent = data.results[i].name;
    starships.appendChild(starshipName);

    var className = document.createElement('div');
    className.textContent = "starship class: " + data.results[i].starship_class;
    starships.appendChild(className);

    var hyperdrive = document.createElement('div');
    hyperdrive.textContent = "hyperdrive rating: " + data.results[i].hyperdrive_rating;
    starships.appendChild(hyperdrive);

    var manufacturer = document.createElement('div');
    manufacturer.textContent = "manufacturer: " +  data.results[i].manufacturer;
    starships.appendChild(manufacturer);
  }

});
