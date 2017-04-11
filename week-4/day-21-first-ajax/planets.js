var promise = $.ajax({
  url: 'http://swapi.co/api/planets'
});

var planetList = document.querySelector('#planets-list');

promise.done(function(data) {
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
