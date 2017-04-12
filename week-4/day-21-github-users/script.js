var searchQuery = document.querySelector('#query');
var userList = document.querySelector('#user-list');


query.addEventListener('keyup', function(evt){
  if(evt.keyCode !== 13){
    return;
  }
  userList.innerHTML = '';
  var promise = $.ajax({
    url: ('https://api.github.com/search/repositories?q=' + searchQuery.value)
  });
  promise.done(function(data) {
    console.log(data);
    for(var i = 0; i < data.items.length; i ++){
      var li = document.createElement('li');
      li.classList.add('entry');
      userList.appendChild(li);

      var repoName = document.createElement('a');
      repoName.classList.add('repo');
      repoName.textContent = data.items[i].name;
      repoName.href = data.items[i].html_url;
      li.appendChild(repoName);

      var user = document.createElement('a');
      user.classList.add('user');
      user.textContent = 'by ' + data.items[i].owner.login;
      user.href = data.items[i].owner.html_url;
      li.appendChild(user);
    }
  });
});
