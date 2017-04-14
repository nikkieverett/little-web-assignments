var list = document.querySelector('#dates-list');
var tbody = document.querySelector('tbody');
var templateDOM = document.querySelector('#row-template');


var ajaxData;

$.ajax({
  url:'/api/violation_data'
})

.done(function(data){
  ajaxData = data;
  var dates = [];

  for(var i = 0; i < data.items.length; i++){
    var item = data.items[i].date;
    if(dates.indexOf(item) !== -1){
      continue;
    }
    dates.push(item);
  }
  for(var i = 0; i < dates.length; i++){
    var li = document.createElement('li');
    li.textContent = dates[i];
    list.appendChild(li);
  }
});

list.addEventListener('click', function(evt){

  var date = evt.target.textContent;

  var filtered = [];
  for(var i =0; i < ajaxData.items.length; i ++){
    if(ajaxData.items[i].date === date){
      filtered.push(ajaxData.items[i]);
    }
  }
  console.log(filtered);
  putOnPage(filtered);
});

function putOnPage(arr) {
  tbody.innerHTML = '';

  var template = templateDOM.innerHTML;
  var totalHtml = '';

  for(var i = 0; i < arr.length; i++){
    var html = Mustache.render(template, arr[i]);
    totalHtml += html;
  }

  tbody.innerHTML = totalHtml;
}
