import React, { Component } from 'react';
import "../App.css";
import Axios from 'axios';
import { Link } from 'react-router-dom';


class AddNewItem extends Component {
  state = {
    theName: '',
    theDescription: '',
    itemCost: 0,
    retailInput: 0,
    quantity: 0

  }

  updateInput = (e) => {
    this.setState({ [e.target.id]: e.target.value })
    // console.log(e.target.value)
  }

  createANewItem = (e) => {
    e.preventDefault();
    const newName = this.state.theName;
    const newDescription = this.state.theDescription;
    const newCost = this.state.itemCost;
    const newretailInput = this.state.retailInput;
    const newQuantity = this.state.quantity
 
    Axios.post("http://localhost:5000/api/items/add-new",
      { theTitle: newName, 
        theDescription: newDescription , 
        itemCost: newCost, 
        retailPrice:newretailInput,
        quantity: newQuantity},

      { withCredentials: true })
      .then((responeFromOurAPI) => {
        // console.log("-==--=-=",this.state.retailPrice)
        // console.log(this.state.itemCost)
        // console.log(this.state.theDescription)
        // console.log(this.state.theName)
        console.log('success', responeFromOurAPI)

        this.props.addItemToState(responeFromOurAPI);

      })
      .catch((err) => {
        console.log('error creating task', err)
      })
  }


  render() {
    // console.log("================", this.state)
    return <div>
        <h2>Add New Item</h2>
        <form onSubmit={this.createANewItem}>
          <label>Name</label>
          <input type="text" value={this.state.theName} id="theName" onChange={this.updateInput} />

          <label>Description</label>
          <input type="text" value={this.state.theDescription} id="theDescription" onChange={this.updateInput} />


        <label>itemCost</label>
        <input type="number" value={this.state.itemCost} id="itemCost" onChange={this.updateInput} />

          <label>Retail Price</label>
          <input type="number"  value={this.state.retailInput} id="retailInput" onChange={this.updateInput} />


        <label>Quantity in Stock</label>
        <input type="number" value={this.state.quantity} id="quantity" onChange={this.updateInput} />
          <button>Save</button>
        </form>
      </div>;
  }





}


export default AddNewItem;

