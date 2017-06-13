import React from 'react';

class QuerySearch extends React.Component{
  onQueryKeyUp(evt){
    if(evt.keyCode === 13){
      evt.target.value = '';
      this.props.onQueryDone();
    }
  }
  onQueryChange(evt){
    this.props.onQueryInput(evt.target.value);
  }
  render(){
    return(
      <div className="query">
        <input
          type="text"
          name="QuerySearch"
          placeholder="Search Query"
          onChange={(evt) => this.onQueryChange(evt)}
          onKeyUp={(evt) => this.onQueryKeyUp(evt)}
        />
      </div>
    );
  }
}

module.exports = QuerySearch;
