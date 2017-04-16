var searchQuery = document.querySelector('#query');
var userList = document.querySelector('#user-list');
var previous = document.querySelector('#previous');
var next = document.querySelector('#next');
var pageIndex = document.querySelector('#page-count');
var templateDOM = document.querySelector('#row-template');

var currentPage = 0;
var totalResults;
var totalPages;

query.addEventListener('keyup', function(evt){
  if(evt.keyCode !== 13){
    return;
  }
  currentPage+=1;
  ajaxCall();
});

next.addEventListener('click', function(){
  currentPage += 1;
  ajaxCall();
});
previous.addEventListener('click', function(){
  currentPage -= 1;
  ajaxCall();
});

var ajaxCall = function(){
  userList.innerHTML = '';
  var promise = $.ajax({
    url: 'https://api.github.com/search/repositories?q=' + searchQuery.value + '&page=' + currentPage
  });
  promise.done(function(data) {
    totalResults = data.total_count;
    totalPages += Math.ceil(totalResults / 30);

    var template = templateDOM.innerHTML;
    var totalHTML = '';

    for(var i = 0; i < data.items.length; i ++){
      var html = Mustache.render(template, data.items[i]);
      totalHTML += html;
      console.log(html);
    }

    userList.innerHTML = totalHTML;

      // var li = document.createElement('li');
      // li.classList.add('entry');
      // userList.appendChild(li);
      //
      // var repoName = document.createElement('a');
      // repoName.classList.add('repoName');
      // repoName.textContent = data.items[i].name;
      // repoName.href = data.items[i].html_url;
      // li.appendChild(repoName);
      //
      // var user = document.createElement('a');
      // user.classList.add('user');
      // user.textContent = 'by ' + data.items[i].owner.login;
      // user.href = data.items[i].owner.html_url;
      // li.appendChild(user);

    pageIndex.textContent = currentPage;
    if(currentPage === 1){
      previous.style.display = 'none';
    } else{
      previous.style.display = 'inline-block';
    }
    if(currentPage >= totalPages){
      next.style.display = 'none';
    } else {
      next.style.display = 'inline-block';
    }
  });
};
