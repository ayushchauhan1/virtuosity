import React from "react";
import phone from "../assets/phone.png";
import telephone from "../assets/telephone.png";
import mail from "../assets/mail.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import whatsapp from "../assets/whatsapp.png";
import MyDesktop from "../MyHelpComponents/MyDesktop";
import MyMobile from "../MyHelpComponents/MyMobile";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer>
      <div className="foot">
        <MyDesktop>
          <div className="container pt-5 pb-4">
            <div className="row">
              <div className="col-md-5">
                <div className="row d-flex flex-column">
                  <label className="text-capitalize mb-2 font-weight-bold th-header">
                    Useful Links
                  </label>
                  <div className="th-list">
                    <li>
                      {" "}
                      <Link
                        to={`/aboutus`}
                        className="list-item th-link"
                        replace
                      >
                        About Us
                      </Link>{" "}
                    </li>
                    <li>
                      <Link
                        to={`/ourboard`}
                        className="list-item th-link"
                        replace
                      >
                        Our Board
                      </Link>{" "}
                    </li>
                    <li>
                      <Link
                        to={`/ourclients`}
                        className="list-item th-link"
                        replace
                      >
                        Our Clients
                      </Link>{" "}
                    </li>
                    <li>
                      <Link
                        to={`/contactus`}
                        className="list-item th-link"
                        replace
                      >
                        Contact Us
                      </Link>{" "}
                    </li>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <label className="text-uppercase mb-3 font-weight-bold th-header th-green">
                  Feel Free to Contact Us
                </label>
                <div>
                  <a className="th-link" href="tel:+919999030920">
                    <div className="d-flex flex-row">
                      <div className="">
                        <img src={phone} alt="" className="phone-img" />
                      </div>

                      <p className="th-phone pl-2">+91-9999030920</p>
                    </div>
                  </a>
                </div>
                <div>
                  <a className="th-link" href="tel:01203519356">
                    <div className="d-flex flex-row">
                      <div>
                        <img
                          src={telephone}
                          alt=""
                          className="phone-img tele"
                        />
                      </div>
                      <p className="th-phone pl-2">01203519356</p>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    className="th-link"
                    href="mailto:info@virtuosityfinancial.com"
                  >
                    <div className="d-flex flex-row">
                      <div>
                        <img src={mail} alt="" className="phone-img mail" />
                      </div>
                      <p className="th-phone pl-2">
                        info@virtuosityfinancial.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-2">
                <label className="text-capitalize mb-3 font-weight-bold th-header">
                  Our Socials
                </label>
                <div className="row">
                  <div className="col-4 text-center">
                    <a href="">
                      <img src={facebook} alt="" className="social" />
                    </a>
                  </div>
                  <div className="col-4 text-center">
                    <a href="">
                      <img src={linkedin} alt="" className="social" />
                    </a>
                  </div>
                  <div className="col-4 text-center">
                    <a href="">
                      <img src={whatsapp} alt="" className="social" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MyDesktop>
        <MyMobile>
          <div className="container pt-4 pb-4 text-center">
            <div className="row">
              <div className="col-md-5 mb-4">
                <div className="row d-flex flex-column">
                  <label className="text-capitalize mb-2 font-weight-bold th-header">
                    Useful Links
                  </label>
                  <div className="th-list">
                    <li>
                      {" "}
                      <Link
                        to={`/aboutus`}
                        className="list-item th-link"
                        replace
                      >
                        About Us
                      </Link>{" "}
                    </li>
                    <li>
                      <Link
                        to={`/ourboard`}
                        className="list-item th-link"
                        replace
                      >
                        Our Board
                      </Link>{" "}
                    </li>
                    <li>
                      <Link
                        to={`/ourclients`}
                        className="list-item th-link"
                        replace
                      >
                        Our Clients
                      </Link>{" "}
                    </li>
                    <li>
                      <Link
                        to={`/contactus`}
                        className="list-item th-link"
                        replace
                      >
                        Contact Us
                      </Link>{" "}
                    </li>
                  </div>
                </div>
              </div>
              <div className="col-md-5 text-center">
                <label className="text-capitalize mb-3 font-weight-bold th-header">
                  Feel Free to Contact Us
                </label>
                <div className="text-center">
                  <a className="th-link" href="tel:+919999030920">
                    <div className="d-flex flex-row justify-content-center">
                      <div className="">
                        <img src={phone} alt="" className="phone-img" />
                      </div>

                      <p className="th-phone pl-2">+91-9999030920</p>
                    </div>
                  </a>
                </div>
                <div>
                  <a className="th-link" href="tel:01203519356">
                    <div className="d-flex flex-row justify-content-center">
                      <div>
                        <img
                          src={telephone}
                          alt=""
                          className="phone-img tele"
                        />
                      </div>
                      <p className="th-phone pl-2">01203519356</p>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    className="th-link"
                    href="mailto:info@virtuosityfinancial.com"
                  >
                    <div className="d-flex flex-row justify-content-center">
                      <div>
                        <img src={mail} alt="" className="phone-img mail" />
                      </div>
                      <p className="th-phone pl-2">
                        info@virtuosityfinancial.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-2 mt-3">
                <label className="text-capitalize mb-3 font-weight-bold th-header">
                  Our Socials
                </label>
                <div className="row d-flex justify-content-around">
                  <div className=" ">
                    <a href="">
                      <img src={facebook} alt="" className="social" />
                    </a>
                  </div>
                  <div className=" ">
                    <a href="">
                      <img src={linkedin} alt="" className="social" />
                    </a>
                  </div>
                  <div className=" ">
                    <a href="">
                      <img src={whatsapp} alt="" className="social" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MyMobile>
        <hr />
        <div className="text-center pb-3 th-bold">
          Developed by: SAD Developers
        </div>
      </div>
    </footer>
  );
};

export default footer;
