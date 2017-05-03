import React from 'react';

class Ticker extends React.Component{
  constructor(){
    super();
    this.state ={
      value: 0
    }
  }

  componentDidMount(){
    this.timer = setInterval(
      () =>
      this.setState({
        value: this.state.value +1
      }),
      1000
    );
  }
  render(){
    return(
      <div className="box" >
        <span>{this.state.value}</span>
      </div>
    )
  }
}

module.exports = Ticker;
