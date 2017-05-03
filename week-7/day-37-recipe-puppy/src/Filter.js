import React from 'react';

class Filter extends React.Component{
  onFilterChange(evt){
    if(evt.keyCode === 13){
      this.props.onFilterInput(evt.target.value);
      evt.target.value='';
    }
  }
  handleClick(evt,index){
    this.props.onFilterRemoveInput(index);
  }
  render(){
    var filterList = this.props.filterText.map((item, i) => <li key={i} onClick={(evt) => this.handleClick(evt, i)}>{item}</li>);
    return(
      <div className="filter">
        <p>Would you also like to filter by ingredients?</p>
        <input
          type="text"
          name="Filter"
          placeholder="Ingredient"
          onKeyUp={(evt) => this.onFilterChange(evt)}
        />
      <ul className="filteredList">
        {filterList}
      </ul>
      </div>
    );
  }
}

module.exports = Filter;
