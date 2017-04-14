var tbody = document.querySelector('tbody');
var productInput = document.querySelector('#product-input');
var violationInput = document.querySelector('#violation-input');
var firmInput = document.querySelector('#firm-input');
var templateDOM = document.querySelector('#row-template');

var ajaxData;

function makeList(arr){
  tbody.innerHTML = '';
  var template = templateDOM.innerHTML;
  var totalHtml = '';

  for(var i = 0; i < arr.length; i++){
    var html = Mustache.render(template, arr[i]);
    totalHtml += html;
  }
  tbody.innerHTML = totalHtml;
}

$.ajax({
  url:'/api/violation_data'
})
.done(function(data){
  ajaxData = data;
  makeList(ajaxData.items);
});

var porductFilter = '';
var violationFilter = '';
var firmFilter = '';

productInput.addEventListener('keyup',function(evt){
  productFilter = productInput.value.toUpperCase();
  filter();
});
violationInput.addEventListener('keyup',function(evt){
  violationFilter = violationInput.value.toUpperCase();
  filter();
});
firmInput.addEventListener('keyup',function(evt){
  firmFilter = firmInput.value.toUpperCase();
  filter();
});

function filter(){
  var filtered = [];
  console.log(filtered);

  for(var i = 0; i < ajaxData.items.length; i++){
    var item = ajaxData.items[i];
    
    if(item.product.indexOf(productFilter) === -1){
      continue;
    }
    if(item.violation.indexOf(violationFilter) === -1){
      continue;
    }
    if(item.firm.indexOf(firmFilter) === -1){
      continue;
    }
    filtered.push(ajaxData.items[i]);
  }
  makeList(filtered);
}
