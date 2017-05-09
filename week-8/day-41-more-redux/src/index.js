import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';

const messages = [
  "You're cool",
  "Neato",
  "JavaScript is fun and easy",
  "You don't hate your life or Eric, I promise"
];
var currentIndex = 0;

const INCREMENT = { type: 'INCREMENT' }
const DECREMENT = { type: 'DECREMENT' }

const counterReducer = ( state = {text: messages[0]}, action) => {
  switch(action.type){
    case 'INCREMENT':
      if(currentIndex >= messages.length -1){
        currentIndex = 0;
      } else {
        currentIndex += 1;
      }
      return { text: messages[currentIndex] };

    case 'DECREMENT':
    if(currentIndex <= 0){
      currentIndex = messages.length -1;
    } else {
      currentIndex -= 1;
    }
    return { text: messages[currentIndex] };
  }
  return state;
}

var store = createStore(counterReducer);

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: messages[0]
    }
  }
  componentDidMount(){
    store.subscribe (() => {
      this.setState(store.getState());
    })
  }
  handleKeyUp(evt){
    if(evt.keyCode === 13){
      messages.push(evt.target.value);
      currentIndex = messages.length - 1;
      console.log(currentIndex);
      this.setState({
        text: messages[currentIndex]
      })
      evt.target.value = "";
    }
  }
  render() {
    console.log(messages);
    console.log(currentIndex);
    return (
      <div>
        <input onKeyUp={(evt) => this.handleKeyUp(evt)}></input>
        <br />
        <button onClick={()=> store.dispatch(DECREMENT)}>
          previous
        </button>
        <div>
          {this.state.text}
        </div>
        <button onClick={()=> store.dispatch(INCREMENT)}>
          next
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
