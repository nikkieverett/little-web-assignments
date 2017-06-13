import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import './cssreset.css'
import './index.css';

import Header from './Header.js';
import QuerySearch from'./QuerySearch.js';
import List from './List.js';
import Filter from './Filter.js';
import { store, actions } from './Store.js';


class App extends React.Component{
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    store.subscribe(() => this.setState(store.getState()));
  }
  makeAjaxCall(){
    var makeUrl = `/api/?i=${this.state.filters.join(',')}&q=${this.state.queryText}&p=1`;
    $.ajax({
      url: makeUrl
    })
    .done((ajaxData) => {
      let parsedData = JSON.parse(ajaxData);
      store.dispatch(Object.assign({}, actions.RENDER_DATA, { recipes: parsedData.results }));
    })
  }
  handleFilterInput(input){
    store.dispatch(Object.assign({}, actions.ON_FILTER_CHANGE, { currentFilter: input }));
  }
  handleFilterRemoveInput(index){
    let copy = this.state.filters.slice();
    copy.splice(index,1);
    store.dispatch(Object.assign({}, actions.REMOVE_FILTER, { filters: copy }), this.makeAjaxCall());
  }
  handleFiltersList(){
    console.log('does handle filter list happen first?')
    let copy = this.state.filters.slice();
    copy.push(this.state.currentFilter);
    store.dispatch(Object.assign({}, actions.ADD_FILTER, { filters: copy }));
  }
  handleFilterDone(){
    console.log(this.state.filters);
    this.makeAjaxCall();
  }
  handleQueryInputChange(input){
    store.dispatch(Object.assign({}, actions.QUERY_TEXT, { queryText: input }));
  }
  handleQueryDone(){
    this.makeAjaxCall();
  }
  render(){
    return(
      <div>
        <Header />
        <div className="bodyContainer">
          <QuerySearch
            queryText={this.state.queryText}
            onQueryInput={(input) => this.handleQueryInputChange(input)}
            onQueryDone={() => this.handleQueryDone()}
            ajaxCall={() => this.makeAjaxCall()}
            />
          <List
            recipes={this.state.recipes}
            queryText={this.state.queryText}
            filterText={this.state.filters}
            />
          <Filter
            filterText={this.state.filters}
            onFilterInput={(input) => this.handleFilterInput(input)}
            onFilterRemoveInput={(index) => this.handleFilterRemoveInput(index)}
            updateFiltersList={() => this.handleFiltersList()}
            onFilterDone={() => this.handleFilterDone()}
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
