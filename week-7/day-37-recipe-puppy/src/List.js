import React from 'react';

class ListItems extends React.Component{
  render(){
    var listItems = this.props.data.results.map((result) => {
      if(result.thumbnail === ''){
        result.thumbnail ="No_Image_Available.png"
      }
    })
    listItems = this.props.data.results.map((result) => {
      return (
        <li key={result.href}>
          <img src={result.thumbnail} />
          <h1><a href={result.href}>{result.title}</a></h1>
          <p>{result.ingredients}</p>
        </li>
      );
    });
    return(
      <ul>
        {listItems}
      </ul>
    );
  }
}
class List extends React.Component{
  render(){
    return(
      <div className="list">
        <ListItems data={this.props.data} />
      </div>
    );
  }
}

module.exports = List;
