import React, { Component } from 'react';
import "../App.css";
import Axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';

import AddNewItem from './AddNewItem';


class ItemIndex extends Component {
  state = {
    allTheItems: []
  };
  componentWillMount() {
    this.fetchItems();
  }

  fetchItems = () => {
    Axios.get("http://localhost:5000/api/items")
      .then(responseFromApi => {
        this.setState({ allTheItems: responseFromApi.data.reverse() });
      })
      .catch(err => {});
  };

  showAllItems = () => {
    //this.fetchItems()
    const allTheItems = this.state.allTheItems;
    // console.log(allTheItems)

    return allTheItems.map(eachItem => {
      console.log(eachItem);
      return (
        <div className="eachItem">
          <h3>{eachItem.name}</h3>
          <h3 className="descriptionBox">{eachItem.description}</h3>
          <h3> {eachItem.itemCost}</h3>
          <h3> {eachItem.retailPrice}</h3>
          <h3>
            <Link to={`/items/details/${eachItem._id}`}>See Details</Link>
            </h3>
        </div>
      );
    });
  };

  addItemToState = (item) => {
    console.log(item)
    let allItems = [...this.state.allTheItems];
    allItems.unshift(item.data)
    this.setState({ allTheItems: allItems });
  }

  render() {
    // console.log(this.props)

    return <div>
        <div>
          <div className="eachItem">
            <h3>Name</h3>
            <h3 className="descriptionBox">Description</h3>
            <h3>Cost in U$</h3>
            <h3>Retail Price in U$</h3>
            <h3>See Details </h3>
          </div>
        <h3>{this.showAllItems()}</h3>
        </div>

        {/* <div>
          {this.showAllItems()}
        </div> */}
        <div>
          <AddNewItem addItemToState={this.addItemToState} />
        </div>
      </div>;
  }
}
export default ItemIndex;

