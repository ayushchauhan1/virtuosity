import React, { Component } from "react";
import axios from "axios";
import { withSnackbar } from "react-simple-snackbar";
import MapContainer from "./map";
import MapGL, { Marker } from "react-map-gl";
import Logo from "../assets/marker.png";
import { Helmet } from "react-helmet";
const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZGh3YWpndXB0YSIsImEiOiJja29jeDEzbngzZWozMnFscG56Z3R1Yjd4In0.lN-Fv7XpL6p3noEvggH1QQ"; // Set your mapbox token here

class Contacts extends Component {
  state = {
    name: "",
    contact: "",
    email: "",
    loading: false,
    viewport: {
      latitude: 28.570271,
      longitude: 77.360486,
      zoom: 14,
      bearing: 0,
      pitch: 0,
    },
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
          "https://v1.nocodeapi.com/dhwajgupta/google_sheets/kjDeLqJzSGXaEdtf?tabId=Sheet1",
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
    return (
      <div>
        <Helmet title="Contact Us" />
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <div className="contactHeading ">Contact US</div>
            <div className=" contactHeading2">
              Fill up the form and we’ll contact you soon !
            </div>
            <div className="iput">
              <input
                type="text"
                className="form-control "
                onChange={(e) => this.setState({ name: e.target.value })}
                placeholder="Enter Name"
              ></input>
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
            <button
              type="button"
              class="btn btn-dark  butt"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5 pt-5 w-100">
            {/* <MapContainer></MapContainer> */}
            <MapGL
              {...this.state.viewport}
              height="70vh"
              width="90%"
              className="py-3"
              mapStyle="mapbox://styles/mapbox/streets-v9"
              onViewportChange={(viewport) => this.setState({ viewport })}
              mapboxApiAccessToken={MAPBOX_TOKEN}
            >
              <Marker
                latitude={28.570271}
                longitude={77.360486}
                offsetLeft={0}
                offsetTop={0}
              >
                <img src={Logo} width="30%" />
              </Marker>
            </MapGL>
          </div>
        </div>
      </div>
    );
  }
}
export default withSnackbar(Contacts);
