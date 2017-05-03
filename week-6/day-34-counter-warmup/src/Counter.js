import React from 'react';


class Counter extends React.Component{
  constructor(){
    super();
    this.state = {
      value: 0
    };
  }
  down(){
    if(this.state.value === 0){
      return;
    }
    var newValue = this.state.value -= 1;
    this.setState({
      value: newValue
    });
  }
  up(){
    var newValue = this.state.value += 1;
    this.setState({
      value: newValue
    });
  }
  render(){
    return(
      <div className="box">
        <button onClick={() => {this.down();}}>down</button>
        <span>{this.state.value}</span>
        <button onClick={() => {this.up();}}>up</button>
      </div>
    );
  }
}

module.exports = Counter;
