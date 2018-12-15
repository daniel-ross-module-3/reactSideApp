import React, { Component } from "react";
import "../styles.css";
import Axios from "axios";



class Landing extends Component {

  state={
    loading:false
  }

  changeLoading = () =>{
    this.setState({
      loading: !this.state.loading
    }, () => {
      this.setState({loading:!this.state.loading})
    })
  }

 landingLogo=()=>{
   if(!this.state.loading){

     return <div className="background-marble">
         <div class="logo reveal" id="startlab" onClick={this.changeLoading}>
           <div class="circle turq" />
           <div class="circle orange" />
           <div class="circle turqoise" />
           <div class="circle navy" />
           <div class="circle grey" />
           <img src="/LogoMakr_6OQZ68.png" class="imgSize" />
         </div>
       </div>;
    }
    else{
      
     return (
     <div className="background-marble">
     <div class="logo reveal" id="startlab" onClick={this.changeLoading}>
         <div class=" turq" />
         <div class=" orange" />
         <div class=" turqoise" />
         <div class=" navy" />
         <div class=" grey" />
         <div class="image" />
       </div>;
       </div>)
    }
  } 
 render() {
   
  return(
    <div className="background-marble">
   <div data-toggle="modal" data-target="#exampleModal">
     {this.landingLogo()}

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
               About Us
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">We are a team of two people that created a react app</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>)
    ;
}
}

export default Landing