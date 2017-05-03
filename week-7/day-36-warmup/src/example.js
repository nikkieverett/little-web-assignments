import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Input extends React.Component{
  constructor(){
    super();
    this.state = {
      items: [],
    };
  }
  handleKeyUp(evt){
    if(evt.keyCode === 13){
      var copy = this.state.items.slice();
      copy.push(evt.target.value);

      this.setState({
        items: copy
      })
      evt.target.value="";
    }
  }
  handleClick(i){
    var newArr = this.state.items.slice();
    newArr.splice(i,1);

    this.setState({
      items: newArr
    })
  }
  render(){
    console.log(this.state.items);
    var items = this.state.items.map((x, i) => <li key={i} onClick={()=>this.handleClick(i)}>{x}</li>);
    return(
      <div>
        <input type="text" onKeyUp={(evt)=>this.handleKeyUp(evt)}/>
        <ol>
          {items}
        </ol>
      </div>
    );
  }
}
class App extends React.Component{
  render(){
    return(
      <div>
        <Input />
      </div>
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
