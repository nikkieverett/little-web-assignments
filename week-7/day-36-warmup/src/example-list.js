import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class List extends React.Component {
  constructor(){
    super();
    this.state= {
      items: ['i','like', 'to', 'eat','apples','and','bananas']
    }
  }
  render(){
    return(
      <div>
        <ol>
          {this.state.items.map((x, i) => <li key={i}>{x}</li>)}
        </ol>
      </div>
    )
  }
}

ReactDOM.render(
  <List />,
  document.getElementById('root')
);
