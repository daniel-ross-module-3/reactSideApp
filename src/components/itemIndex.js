import React, { Component } from 'react';
import "../App.css";
import Axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import Table from "react-bootstrap/lib/Table";
import { Button } from "react-bootstrap";
import ModalComponent from "./ModalComponent";

import AddNewItem from './AddNewItem';


class ItemIndex extends Component {
  state = {
    allTheItems: [],
    editing: false
  };
  componentWillMount() {
    this.fetchItems();
  }
  fetchItems = () => {
    
    Axios.get("http://localhost:5000/api/items",
    {withCredentials: true})
      .then(responseFromApi => {
        console.log("9090909090",responseFromApi);
        this.setState({ allTheItems: responseFromApi.data.reverse() });
      })
      .catch(err => {});
  };
  showAllItems = () => {
    //this.fetchItems()
    const allTheItems = this.state.allTheItems;
    console.log("==========",allTheItems)

    return allTheItems.map(eachItem => {
      // console.log(eachItem.quantity);
      return <tr key={eachItem._id}>
          <td>{eachItem.name}</td>
          <td>{eachItem.description}</td>
          <td>{eachItem.itemCost}</td>
          <td>{eachItem.retailPrice}</td>
          <td>
            <Button bsStyle="warning" onClick={() => this.changeQuanity(-1, eachItem)}>
              -
            </Button>
            {eachItem.quantity} <Button bsStyle="warning" onClick={() => this.changeQuanity(1, eachItem)}>
              +
            </Button>
          </td>
          <Link to={`/items/details/${eachItem._id}`}>
            <Button bsStyle="info">Info</Button>
          </Link>
          {/* <button>
          <Link to={`/items/details/${eachItem._id}`}>Edit Item</Link>
        </button> */}
        </tr>;
         
    });
  };
  changeQuanity = (num, item) => {

    // console.log("something")
    

    //+1 or -1 &&& the id of the box
    // console.log(num, item)
    let editedItems = [...this.state.allTheItems];
    // console.log("-=-=-=",editedItems)
    // console.log("+++++++",this.state.allTheItems)
    editedItems.map((eachItem) => {
      if(item._id === eachItem._id){ //Found the item that we want to edit
        eachItem.quantity+=num
        // console.log(eachItem.quantity)
        // return eachItem.quantity
        Axios.post(
          "http://localhost:5000/api/items/edit/" + eachItem._id,
          {
            theTitle: eachItem.name,
            theDescription: eachItem.description,
            itemCost: eachItem.cost,
            retailPrice: eachItem.retailPrice,
            quantity: eachItem.quantity
          }
        )
          .then(() => {
            console.log("hello");
            this.setState({ allItems: editedItems });
          })
          .catch(() => {});
        }
    })
  }



  addItemToState = item => {
    // console.log(item);
    let allItems = [...this.state.allTheItems];
    allItems.unshift(item.data);
    this.setState({ allTheItems: allItems });
  };

showNumbers=()=>{
  return (
    <tr>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      
    </tr>
  )
}

  render() {
    // console.log(this.props)

    return <div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Description</th>
              <th>Cost in U$</th>
              <th>Retail Price</th>
              <th>Amount in Stock</th>
              <th>See Details</th>
            </tr>
          </thead>
          <tbody>
          {this.showAllItems()}
        
            <tr>
              <th>--</th>
              <th>--</th>
              <th>Full Inventory Cost</th>
              <th>Full Inventory Value</th>
              <th>Full Inventory Amount of Units</th>
              <th>--</th>

            </tr>
            
          </tbody>
          
        <tfoot>
          {this.showNumbers()}
        </tfoot>
          
        </Table>

      <div className="App">
        <ModalComponent />
      </div>
        <div>
          <AddNewItem addItemToState={this.addItemToState} />
        </div>
      </div>;
  }
}
export default ItemIndex;

