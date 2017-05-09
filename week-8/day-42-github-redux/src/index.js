import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store.js';
import api from './Api.js';
import './index.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    // store.subscribe(() => this.setState(store.getState()));
    store.subscribe(() => {
      const currentState = store.getState();
      this.setState(currentState);
    })
  }
  handleChange(evt){
    const action = { type: 'SEARCH_VALUE_CHANGE', value: evt.target.value }
    store.dispatch(action);
  }
  handleKeyUp(evt){
    if(evt.keyCode === 13){
      api.repoSearch(this.state.searchValue);
    }
  }
  render(){
    const items = this.state.items.map((x) => <li key={x.id}>{x.name}</li>)
    return(
      <div>
        <input onChange={(evt) => this.handleChange(evt)}
          onKeyUp={(evt) => this.handleKeyUp(evt)}/>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
