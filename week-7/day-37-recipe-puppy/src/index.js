import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import './cssreset.css'
import './index.css';

import Header from './Header.js';
import QuerySearch from'./QuerySearch.js';
import List from './List.js';
import Filter from './Filter.js';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      data: {
        results:[]
      },
      filterText: [],
      queryText: [],
    }
  }
  makeAjaxCall(){

    var makeUrl = `/api/?i=${this.state.filterText.join(",")}&q=${this.state.queryText.join("%20")}&p=1`;
    console.log('url', makeUrl);
    $.ajax({
      url: makeUrl
    })
    .done((data) => {
      var data = JSON.parse(data);
      this.setState({
        data: data
      })
    })
  }
  handleFilterInput(input){
    let copy = this.state.filterText.slice();
    copy.push(input);
    this.setState({
      filterText: copy
    }, () => this.makeAjaxCall());
  }
  handleFilterRemoveInput(index){
    let copy = this.state.filterText.slice();
    copy.splice(index,1);
    this.setState({
      filterText: copy
    }, () => this.makeAjaxCall())
  }
  handleQueryInput(input){
    let copy = this.state.queryText.slice();
    copy.push(input);
    copy.map((str)=> {
      let strings = str.split(' ');
      this.setState({
        queryText: strings
      }, () => this.makeAjaxCall());
    });
  }
  render(){
    return(
      <div>
        <Header />
        <div className="bodyContainer">
          <QuerySearch
            queryText={this.state.queryText}
            onQueryInput={(input) => this.handleQueryInput(input)}
            ajaxCall={() => this.makeAjaxCall()}
            />
          <List
            data={this.state.data}
            queryText={this.state.queryText}
            filterText={this.state.filterText}
            />
          <Filter
            filterText={this.state.filterText}
            onFilterInput={(input) => this.handleFilterInput(input)}
            onFilterRemoveInput={(index) => this.handleFilterRemoveInput(index)}
            />
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
