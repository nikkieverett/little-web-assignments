import React from 'react';
import { createStore } from 'redux';

const actions = {
  ON_FILTER_CHANGE: { type: 'ON_FILTER_CHANGE' },
  REMOVE_FILTER: { type: 'REMOVE_FILTER' },
  ADD_FILTER: { type: 'ADD_FILTER' },
  RENDER_FILTER: { type: 'RENDER_FILTER' },
  QUERY_TEXT: { type: 'QUERY_TEXT' },
  RENDER_DATA: { type: 'RENDER_DATA' },
};

const initialState = {
  recipes: [],
  filters: [],
  currentFilter: '',
  queryText: ''
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'RENDER_DATA':
      return Object.assign({}, state, { recipes: action.recipes });
    case 'ON_FILTER_CHANGE':
      return Object.assign({}, state, { currentFilter: action.currentFilter });
    case 'REMOVE_FILTER':
      return Object.assign({}, state, { filters: action.filters });
    case 'ADD_FILTER':
      return Object.assign({}, state, { filters: action.filters });
    case 'QUERY_TEXT':
      return Object.assign({}, state, { queryText: action.queryText });
  }
  return state;
};

const store = createStore(reducer);

module.exports = {
  store: store,
  actions: actions
};
