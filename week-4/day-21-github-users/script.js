var promise = $.ajax({
  url: 'https://api.github.com/search/users?q=aquaman'
});

var userList = document.querySelector('#user-list');

promise.done(function(data){
  console.log(data);

  for(var i = 0; i < data.items.length; i ++){
    var li = document.createElement('li');
    userList.appendChild(li);

    var avatar = document.createElement('img');
    avatar.src = data.items[i].avatar_url;
    userList.appendChild(avatar);

    var user =document.createElement('a');
    user.textContent =  data.items[i].login;
    user.href = data.items[i].html_url;
    userList.appendChild(user);
    console.log(user);

    var score = document.createElement('p');
    score.textContent = "rating: " + data.items[i].score;
    userList.appendChild(score);

  }

});
