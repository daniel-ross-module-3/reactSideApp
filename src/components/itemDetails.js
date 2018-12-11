import React, { Component } from 'react';
import "../App.css";
import Axios from 'axios';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// export const Food = () => (
//   <div>
//     Favorite Food: <FontAwesomeIcon icon="stroopwafel" />
//   </div>
// );

class itemDetail extends Component {
  state = {
    nameInput: '',
    descInput: '',
    editing: false

  }



  componentWillMount() {
    const theID = this.props.match.params.id;
    Axios.get('http://localhost:5000/api/items/details/' + theID)
      .then((theThingIGetBackFromApi) => {

        console.log('------___---__-_-_--_-_-__-_-_-_-_-___-_-----', theThingIGetBackFromApi)

        this.setState({
          theActualItem: theThingIGetBackFromApi.data,
          nameInput: theThingIGetBackFromApi.data.name,
          descInput: theThingIGetBackFromApi.data.description,
          itemCost: theThingIGetBackFromApi.data.itemCost,
          retailPrice: theThingIGetBackFromApi.data.retailPrice,
        })

      }).catch(() => {

      })
  }

  updateInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  editItem = (e) => {
    e.preventDefault();
    Axios.post(
      "http://localhost:5000/api/items/edit/" +
        this.state.theActualItem._id,
      {
        theTitle: this.state.nameInput,
        theDescription: this.state.descInput,
        itemCost: this.state.itemCost
      }
    )
      .then(() => {
        this.setState({ editing: false });
      })
      .catch(() => {});
  }


  toggleForm = () => {
    this.setState({ editing: true })

  }


  showItemDetails = () => {
    if (this.state.theActualItem) {
      if (this.state.editing) {

        return <form onSubmit={this.editItem}>
         

            <input className="input" value={this.state.nameInput} onChange={this.updateInput} id="nameInput" />
            <input className="input" value={this.state.descInput} onChange={this.updateInput} id="descInput" />
            <button>submit changes</button>
          </form>;

      } else {

        // console.log("=--=-==-=--=-=")
        return <div>
            <h1>HELLO ITEM DETAIL</h1>
            <span>
              item Name:
              {this.state.nameInput}
            </span>
            <br />
            <span> item Description :{this.state.descInput}</span>
            <br />
            <p>item Cost : {this.state.itemCost}</p>
            <p>item Retail price :{this.state.retailPrice}</p>
            {/* <div>
        <FontAwesomeIcon className="iconSize" icon="pencil-alt" />
            </div> */}
            <div>
            <FontAwesomeIcon icon="pen" onClick={this.toggleForm} />
            </div>
          </div>;
      }
    }
  }


  deleteItem = () => {
    Axios.post('http://localhost:5000/api/items/delete/' + this.state.theActualItem._id, {})
      .then(() => {

        this.props.history.push('/itemList');
        // this is how your redirect in react
      })
      .catch(() => {

      })
  }



  render() {
    console.log(this.props)
    console.log(this.state)
    return (
      <div>
        <h1> Item Details Page</h1>
        {this.showItemDetails()}

        <br />
        <br />
        <br />
        <br />
        <div>
          <button onClick={this.deleteItem} className="delete">Delete This Item</button>
        </div>

      </div>
    )
  }




}



export default itemDetail;