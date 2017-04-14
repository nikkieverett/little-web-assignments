var tbody = document.querySelector('tbody');

$.ajax({
  url: '/api/popdata'
})

.done(function(data) {
  console.log('did i get data', data);

  for(var i= 0; i < data.values.length; i++){
    var tr = document.createElement('tr');
    tbody.appendChild(tr);

    var yearTD = document.createElement('td');
    yearTD.textContent = data.values[i].year;
    tr.appendChild(yearTD);

    var popTD = document.createElement('td');
    popTD.textContent = data.values[i].population;
    tr.appendChild(popTD);

  }
});
