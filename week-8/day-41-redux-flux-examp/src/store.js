import React from 'react';
import { createStore } from 'redux';


const INCREMENT = { type: 'INCREMENT' }
const DECREMENT = { type: 'DECREMENT' }
const RESET = { type: 'RESET' }

const counterReducer = (state = {number: 0}, action) => {
  switch(action.type){
    case 'INCREMENT':
      return { number: state.number + 1 };
    case 'DECREMENT':
      return { number: state.number - 1 };
    case 'RESET':
      return { number: 0 };
  }
  return state;
};

var store = createStore(counterReducer);
console.log(store);

module.exports = {
  store,
  actions: {
    INCREMENT,
    DECREMENT,
    RESET
  }
}
