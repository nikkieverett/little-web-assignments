import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Counter from './Counter.js';
import Ticker from './Ticker.js';


class Timezone extends React.Component{
  constructor(){
    super();
    this.state = {
      date: new Date(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
    };
  }

  central(){
    return;
  }
  mountain(){

  }
  pacific(){

  }
  render(){
    return(
      <div>
        <span>{this.state.date.toLocaleTimeString()}</span>
      </div>
    )
  }
}


class Clock extends React.Component{

  componentDidMount(){
    this.timer = setInterval(
      () =>
      this.setState({
        date: new Date()
      }),
      1000
    );
  }
  render(){
    return(
      <Timezone />
    )
  }
}

class SuperClock extends React.Component{
  render(){
    return(
      <div>
        <Clock timezone={central()}/>
        <Clock timezone={mountain()}/>
        <Clock timezone={pacific()}/>
      </div>
    )
  }
}


class App extends React.Component{
  render(){
    return(
      <div>
        <SuperClock />
        <Clock />
        <Counter />
        <Ticker />
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
