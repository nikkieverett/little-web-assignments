import React from 'react';

class QuerySearch extends React.Component{
  onQueryChange(evt){
    if(evt.keyCode === 13){
      this.props.onQueryInput(evt.target.value);
      evt.target.value = '';
    }
  }
  render(){
    return(
      <div className="query">
        <input
          type="text"
          name="QuerySearch"
          placeholder="Search Query"
          onKeyUp={(evt) => this.onQueryChange(evt)}
        />
      </div>
    );
  }
}

module.exports = QuerySearch;
