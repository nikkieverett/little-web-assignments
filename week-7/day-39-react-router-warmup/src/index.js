import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';

const Page1= ()=> {
  return <div>This is the first page.</div>
}
const Page2= ()=> {
  return <div>This is the second page. It is more grand. It has all sorts of content</div>
}
const Page3= ()=> {
  return <div>This is the third page. It is mediocre. Nothing interesting.</div>
}

ReactDOM.render(
  <Router>
    <div>
      <nav>
        <ul>
          <li><Link to="/">Page 1</Link></li>
          <li><Link to="/page2">Page 2</Link></li>
          <li><Link to="/page3">Page 3</Link></li>
        </ul>
      </nav>
      <div>
        <Route exact path="/" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
      </div>
    </div>
  </Router>,
  document.getElementById('root')
);
