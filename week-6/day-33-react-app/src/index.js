import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clicker extends React.Component {
  constructor(){
    super();
    this.state = {
      value: 0
    };
  }
  handleClick(){
    console.log(this.state);
    var newValue = this.state.value;
    newValue += 1;
    this.setState({
      value: newValue
    });
  }
  render() {
    return(
      <div className="box" onClick={() => {this.handleClick();}}>
      {this.state.value}
      </div>
    );
  }
}

class App extends React.Component {
  render(){
    return(
      <div>
        <Clicker />
        <Clicker />
        <Clicker />
        <Clicker />
        <Clicker />
        <Clicker />
        <Clicker />

      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
