import React, { Component } from "react";
import axios from "axios";
import { withSnackbar } from "react-simple-snackbar";
import { Helmet } from "react-helmet";
import MyDesktop from "../MyHelpComponents/MyDesktop";
import MyMobile from "../MyHelpComponents/MyMobile";

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
          openSnackbar("Thanks for Contacting Us");
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
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5 pt-5 text-center">
            {/* <MapContainer></MapContainer> */}
            {/* <MapGL
              {...this.state.viewport}
              height="100%"
              width="90%"
              className="py-3 text-center"
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
            </MapGL> */}
            <MyDesktop>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14015.86928434274!2d77.361938!3d28.570744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd834fff36fe62a89!2sTossin%20Pizza%20Sector%2050%20Noida%20%7C%20Best%20Pizza%20Restaurant%20in%20Noida!5e0!3m2!1sen!2sin!4v1621078929473!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0, padding: 0 }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </MyDesktop>
            <MyMobile>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14015.86928434274!2d77.361938!3d28.570744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd834fff36fe62a89!2sTossin%20Pizza%20Sector%2050%20Noida%20%7C%20Best%20Pizza%20Restaurant%20in%20Noida!5e0!3m2!1sen!2sin!4v1621078929473!5m2!1sen!2sin"
                width="300"
                height="200"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </MyMobile>
          </div>
        </div>
      </div>
    );
  }
}
export default withSnackbar(Contacts);
