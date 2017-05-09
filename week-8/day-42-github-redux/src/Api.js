import $ from 'jquery';
import { store } from './store.js';

var api = {
  repoSearch: function(searchValue){
    $.ajax({
      url: `https://api.github.com/search/repositories?q=${searchValue}`
    })
    .done((data) => {
      const action = { type: 'CHANGE_REPOS', items: data.items };
      store.dispatch(action);
    })
  }
};

module.exports = api;
