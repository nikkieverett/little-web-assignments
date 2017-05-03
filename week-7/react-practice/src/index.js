import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class PRow extends React.Component{
  render(){
    var name = this.props.product.stocked ? this.props.product.name : <span style={{color:"red"}}>{this.props.product.name}</span>
    return(
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    )
  }
}
class PCRow extends React.Component{
  render(){
    return(
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
}
class ProductTable extends React.Component{
  render(){
    var self = this;
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product){
      if(product.name.indexOf(self.props.filterText) === -1 || (!product.stocked && self.props.inStockOnly)){
        return;
      }
      if(product.category !== lastCategory){
        rows.push(<PCRow category={product.category} key={product.category} />)
      }
      rows.push(<PRow product={product} key={product.name} />)
      lastCategory= product.category
    })
    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}
class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this);

  }
  handleFilterTextInputChange(evt){
    this.props.onFilterTextInput(evt.target.value);
  }
  handleInStockInputChange(evt){
    this.props.onInStockInput(evt.target.checked);
  }
  render(){
    console.log(this.state.filterText)
;    return(
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockInputChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}
class FilterableProductTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inStockOnly: false,
      filterText: ''
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleInStockInput = this.handleInStockInput.bind(this);
  }
  handleFilterTextInput(filterText){
    this.setState({
      filterText: filterText
    })
  }
  handleInStockInput(inStockOnly){
    this.setState({
      inStockOnly: inStockOnly
    })
  }
  render(){
    return(
      <div id="container">
        <SearchBar
          inStockOnly={this.state.inStockOnly}
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
          onInStockInput={this.handleInStockInput}
        />
        <ProductTable
          products={this.props.products}
          inStockOnly={this.state.inStockOnly}
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
          onInStockInput={this.handleInStockInput}
        />
      </div>
    );
  }
}
var PRODUCTS = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
ReactDOM.render(
  <FilterableProductTable products={PRODUCTS}/>,
  document.getElementById('root')
);
