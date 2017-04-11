var promise = $.ajax({
  url: 'http://swapi.co/api/starships'
});

var starshipList = document.querySelector('#starships-list');

promise.done(function(data) {
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
