if(window.GithubApp === undefined){
  GithubApp = {};
}

(function(){
  var ajaxData = [];
  var userList = document.querySelector('#user-list');

  $.ajax({
    url: "https://api.github.com/search/users?q=unicorn"
  })
  .done(function(data){
    var ajaxData = data;
    console.log(data);
    data.items.forEach(function(user){
      var li = document.createElement('li');
      li.textContent = user.login;
      li.setAttribute('data-repos', user.repos_url);
      userList.appendChild(li);
    });
  });

  userList.addEventListener('click', function(evt){
    if(evt.target.tagName === 'LI'){
      var repoURL = evt.target.getAttribute('data-repos');

      GithubApp.loadThemRepos(repoURL);
    }
  });

})();
