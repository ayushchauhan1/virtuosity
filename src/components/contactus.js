import React, { Component } from "react";
import axios from "axios";
import { withSnackbar } from "react-simple-snackbar";
import { Map, GoogleApiWrapper } from 'google-maps-react';
class Contacts extends Component {
  state = {
    name: "",
    contact: "",
    email: "",
    loading: false,
  };
 
  handleSubmit = () => {
    this.setState({ loading: true });
    const { openSnackbar } = this.props;
    var arr = [];
    arr.push(this.state.name);
    arr.push(this.state.contact);
    arr.push(this.state.email);
  
    if (
      this.state.name === "" ||
      this.state.contact === "" ||
      this.state.email === "" 
      
    ) {
      openSnackbar("Please fill all details");
      this.setState({ loading: false });
    } else {
      axios
        .post(
          "https://v1.nocodeapi.com/dhwajgupta/google_sheets/kjDeLqJzSGXaEdtf",
          [arr]
        )
        .then((res) => {
          this.setState({ loading: false });
          openSnackbar("Thanks for Contacting");
        })
        .catch((err) => {
          this.setState({ loading: false });
        });
    }
  };
  render() {
    const  mapStyles = {
      width: '100%',
      height: '100%',
    };
    return (
      <div >
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12 '>
            <div className='contactHeading '>Contact US</div>
            <div className=' contactHeading2'>Fill  up  the  form  and  we’ll  contact  you  soon !</div>
            <div className='iput'>
            <input
             type="text"
             className="form-control "
             onChange={(e) => this.setState({ name: e.target.value })}
             placeholder="Enter Name"></input>
             <input
              type="text"
              className="form-control "
              onChange={(e) => this.setState({ contact: e.target.value })}
              placeholder="Enter Contact Number"
            ></input>
              <input
              type="text"
              className="form-control "
              onChange={(e) => this.setState({ email: e.target.value })}
              placeholder="Enter Email address"
            ></input> 
          
             </div>
             <button type="button" class="btn btn-dark  butt" onClick={this.handleSubmit}>Submit</button>
          </div>
           <div className='col-lg-6 col-md-6 col-sm-12 block5'>
           <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
           </div>
        </div>
      </div>
    );
  }
}
export default withSnackbar(Contacts);