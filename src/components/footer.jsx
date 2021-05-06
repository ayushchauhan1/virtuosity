import React from "react";
import phone from "../assets/phone.png";
import telephone from "../assets/telephone.png";
import mail from "../assets/mail.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import whatsapp from "../assets/whatsapp.png";
const footer = () => {
  return (
    <footer>
      <div className="foot">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="about">About Us- </div>
              <div className="">
                <a href="" className="f-links">Our Board</a><br />
                <a href="" className="f-links">Our Services</a>
              </div>
            </div>
            <div className="col-md-5 text-center">
              <div className="row">
                <div className="col-1 text-center">
                  <img src={phone} alt="" className="phone-img" />
                </div>
                <div className="col-5 text-left">
                  <div className="num">+91-9999030920</div>
                </div>
              </div>
              <div className="row text-center">
                <div className="col-1 text-center">
                  <img src={telephone} alt="" className="phone-img tele" />
                </div>
                <div className="col-5 text-left">
                  <div className="num tele-num">01203519356</div>
                </div>
              </div>
              <div className="row">
                <div className="col-1 text-center">
                  <img src={mail} alt="" className="phone-img mail" />
                </div>
                <div className="col-5 text-left">
                  <div className="num mail-id">info@virtuosityfinancial.com</div>
                </div>
              </div>
            </div>
            <div className="col-md-2 ">
              <div className="row connection">
                <div className="col-4 text-center">
                  <a href=""><img src={facebook} alt="" className="social" /></a>
                </div>
                <div className="col-4 text-center">
                  <a href=""><img src={linkedin} alt="" className="social" /></a>
                </div>
                <div className="col-4 text-center">
                  <a href=""><img src={whatsapp} alt="" className="social" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  <div className="branding text-center p-2">
    Developed by SAD Developers.
      </div>
    </footer>
  )
};

export default footer;
