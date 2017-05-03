import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: 'on'
    }
  }
  handleClick(){
    this.setState({
      text: this.state.text === 'on' ? 'off' : 'on'
    })
  }
  render(){
    return(
      <div onClick={() => this.handleClick()}>{this.state.text}</div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
