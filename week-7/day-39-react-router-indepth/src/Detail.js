import React from 'react';

class Detail extends React.Component{
  render(){
    for(var i = 0; i < this.props.people.length; i ++){
      if(this.props.people[i].id == this.props.id) {
        var person = this.props.people[i];
        break;
      }
    }
    return(
      <div>
      <h2>Name: {person.name}</h2>
        <div>Description: {person.description}</div>
        <div>Id: {person.id}</div>
      </div>
    );
  }
}

module.exports = Detail;
