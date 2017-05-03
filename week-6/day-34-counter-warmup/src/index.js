import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Counter from './Counter.js';
import Ticker from './Ticker.js';


// class Timezone extends React.Component{
//   central(){
//   }
//   mountain(){
//   }
//   pacific(){
//   }
// }
class Clock extends React.Component{
  render(){
    var hour = this.props.date.getHours() + this.props.offset;
    if (hour > 12){
      hour-= 12;
    }
    if (hour < 10){
      hour= '0'+ hour;
    }

    var minutes = this.props.date.getMinutes();
    if (minutes < 10){
      minutes= '0'+ minutes;
    }

    var seconds = this.props.date.getSeconds();
    if (seconds < 10){
      seconds= '0'+ seconds;
    }

    return(
      <div>
        {this.props.timezone} - {hour}:{minutes}:{seconds}
      </div>
    )
  }
}
class SuperClock extends React.Component{
  constructor(){
    super();
    this.state = {
      date: new Date(),
    };
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }
  render(){
    return(
      <div>
        <Clock date={this.state.date} offset={-2} timezone="California Time"/>
        <Clock date={this.state.date} offset={0} timezone="Dallas Time"/>
        <Clock date={this.state.date} offset={1} timezone="New York Time"/>
      </div>
    )
  }
}
class App extends React.Component{
  render(){
    return(
      <div>
        <SuperClock />
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
