import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      fullNameList:[],
      firstName: '',
      lastName: ''
    }
  }
  handleInputChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleClick(){
    var copy = this.state.fullNameList;
    var fullName = this.state.firstName +' '+ this.state.lastName
    copy.push(fullName)

    this.setState({
      fullNameList: copy,
      firstName: '',
      lastName: ''
    })
  }
  render(){
    var listItems = this.state.fullNameList.map((x, i) => <li key={i}>{x}</li>)
    return(
      <div>
        <input name="firstName" value={this.state.firstName} type="text" placeholder="First Name" onChange={(evt) => this.handleInputChange(evt)}></input>
        <input name="lastName" value={this.state.lastName} type="text" placeholder="Last Name" onChange={(evt) => this.handleInputChange(evt)}></input>
        <button onClick={() => this.handleClick()}>add</button>

        <ul>{listItems}</ul>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
