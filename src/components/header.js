import React, { Component, Fragment } from "react";
import logo from "../assets/logo.svg";
import MyDesktop from "../MyHelpComponents/MyDesktop";
import MyMobile from "../MyHelpComponents/MyMobile";
import { ChevronLeft, Menu, Mail, Search } from "react-feather";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Package } from "react-feather";

class Header extends Component {
  state = {
    drawerOpen: false,
    showlink: false,
  };
  render() {
    return (
      <>
        {/* Desktop Header */}
        <MyDesktop>
          <div className="header fixed-top">
            <div className="d-flex justify-content-around">
              <div className="">
                <Link to="/">
                  <img className="logo my-auto" src={logo}></img>
                </Link>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="d-flex justify-content-around">
                    <div className="row">
                      <Link className="mt-3 th-link mr-3" to="/">
                        <div
                          className={"mx-3 th-16 pb-2 middle th-bold"}
                          style={{ textDecoration: "none", color: "#1A1C20" }}
                        >
                          HOME
                        </div>
                      </Link>
                      <Link className="mt-3 th-link  mr-3" to="/aboutus">
                        <div
                          className={"mx-3 th-16 pb-2 middle th-bold"}
                          style={{ textDecoration: "none", color: "#1A1C20" }}
                        >
                          ABOUT US
                        </div>
                      </Link>
                      <Link className="mt-3 th-link mr-3" to="/ourboard">
                        <div
                          className={"mx-3 th-16 pb-2 middle th-bold"}
                          style={{ textDecoration: "none", color: "#1A1C20" }}
                        >
                          OUR BOARD
                        </div>
                      </Link>
                      <Link className="mt-3 th-link mr-3" to="/ourclients">
                        <div
                          className={"mx-3 th-16 pb-2 middle th-bold"}
                          style={{ textDecoration: "none", color: "#1A1C20" }}
                        >
                          OUR CLIENTS
                        </div>
                      </Link>
                      <div className="th-header-dropdown mt-3 mr-3">
                        <div className={"mx-3 th-16 th-bold"}>SERVICES</div>
                        <div className="th-header-dropdown-content th-16 ">
                          <Link to="/">Transfer Pricing Service Offerings</Link>
                          <Link to="/">International Taxation</Link>
                          <Link to="/">Non-Core Process Outsourcing</Link>
                          <Link to="/">Corporate Financial Advisory</Link>
                          <Link to="/">Emerging Laws</Link>
                          <Link to="/">Direct Tax</Link>
                          <Link to="/">Goods and Serivice Tax</Link>
                        </div>
                      </div>
                      <Link
                        className="mt-3 th-link mr-3 th-bold"
                        to="/contactus"
                      >
                        <div
                          className={"mx-3 th-16 pb-2 middle"}
                          style={{ textDecoration: "none", color: "#1A1C20" }}
                        >
                          CONTACT US
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MyDesktop>
        {/* Mobile Header */}
        <MyMobile>
          <div className="container py-2 bg-primary shadow-sm fixed-top">
            <div className="row py-1">
              <div className="col-12">
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    className="th-btn-primary-ghost my-auto"
                    onClick={() =>
                      this.setState({ drawerOpen: !this.state.drawerOpen })
                    }
                  >
                    <Menu size={22} color={"#000"} />
                  </button>

                  <div className="mx-auto">
                    <Link to="/">
                      <img
                        alt="Virtuosity Logo"
                        className="my-auto"
                        src={logo}
                        style={{
                          height: 45,
                        }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Drawer */}
          {this.state.drawerOpen ? (
            <div
              className="th-side-drawer-backdrop"
              onClick={() =>
                this.setState({ drawerOpen: !this.state.drawerOpen })
              }
            />
          ) : null}
          <div
            className={
              this.state.drawerOpen
                ? "th-side-drawer open shadow-sm py-5 rounded-right px-3"
                : "th-side-drawer shadow-sm py-5 rounded-right px-3"
            }
          >
            <div className="my-3">
              <Link
                className="th-16 w-100 th-link"
                to="/"
                onClick={() =>
                  this.setState({ drawerOpen: !this.state.drawerOpen })
                }
              >
                Home
              </Link>
            </div>
            <div className="my-3">
              <Link
                className="th-16 w-100 th-link"
                to="/aboutus"
                onClick={() =>
                  this.setState({ drawerOpen: !this.state.drawerOpen })
                }
              >
                About Us
              </Link>
            </div>
            <div className="my-3">
              <Link
                className="th-16 w-100 th-link"
                to="/ourboard"
                onClick={() =>
                  this.setState({ drawerOpen: !this.state.drawerOpen })
                }
              >
                Our Board
              </Link>
            </div>
            <div className="my-3">
              <Link
                className="th-16 w-100 th-link"
                to="/ourclients"
                onClick={() =>
                  this.setState({ drawerOpen: !this.state.drawerOpen })
                }
              >
                Our Clients
              </Link>
            </div>
            <div
              className="my-3"
              onClick={() => this.setState({ showlink: !this.state.showlink })}
            >
              <div className="row my-auto mx-auto th-16 w-100 th-link">
                <div className="col-9 my-auto px-0">Services</div>
                <div className="col-2 text-right">
                  {this.state.showlink ? (
                    <Fragment>
                      <ChevronUp size={20} />
                    </Fragment>
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </div>
              </div>
            </div>
            {this.state.showlink && (
              <Fragment>
                <div className="my-2  p-1 ml-2">
                  <Link to="/" className="th-link">
                    <span className="th-grey">
                      Transfer Pricing Service Offerings
                    </span>
                  </Link>
                </div>
              </Fragment>
            )}
            <div className="my-3">
              <Link
                className="th-16 w-100 th-link"
                to="/contactus"
                onClick={() =>
                  this.setState({ drawerOpen: !this.state.drawerOpen })
                }
              >
                Contact Us
              </Link>
            </div>
            <hr className="mt-5" />
            <p className="th-grey th-12 text-center">
              www.virtuosityfinancial.com
            </p>
          </div>
        </MyMobile>
      </>
    );
  }
}

export default Header;
