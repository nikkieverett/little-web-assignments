import React from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';

import About from './About';
import List from './List';
import Detail from './Detail';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      people: [
        {
          id: 1,
          name: "Bob",
          description: "Hello my name is Bob."
        },
        {
          id: 2,
          name: "Joe",
          description: "Hello my name is Joe."

        },
        {
          id: 3,
          name: "Sue",
          description: "Hello my name is Sue."

        },
        {
          id: 4,
          name: "Larry",
          description: "Hello my name is Larry."

        }
      ]
    }
  }
  render(){
    return(
      <Router>
        <div>
          <nav>
            <ol>
              <li><Link to="/">List</Link></li>
              <li><Link to="/detail">Detail</Link></li>
              <li><Link to="/about">About</Link></li>
            </ol>
          </nav>
          <Route exact path="/" render={() => <List people={this.state.people}/>} />
          <Route path="/detail/:id" render={(props) => <Detail people={this.state.people} id={props.match.params.id}/>} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
