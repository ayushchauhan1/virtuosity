import React from "react";
import Litigation from "../assets/Litigation Support.png";
import { Helmet } from "react-helmet";

const LitigationSupport = () => {
  return (
    <div className="container pt-5">
      <Helmet title="Litigation Support" />
      <div className="row">
        <div className="col-12 text-center bsa my-5">LITIGATION SUPPORT</div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <img src={Litigation} alt="" className="img-fluid" />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-2"></div>
        <div className="col-md-8     title-bsa">
          OUR TEAM OF EXPERTS PROVIDES A COMPLETE RANGE OF LITIGATION SUPPORT
          SERVICES, INCLUDING:
          <br /> <br />
          <ul>
            <li>
              <div className="content-l">
                Developing and implementing strategies for quick resolution of
                issues.
              </div>
            </li>
            <br />
            <li>
              <div className="content-l">
                Representation before Indian tax authorities and various
                appellate forum such as{" "}
              </div>
              COMMISSIONER (APPEALS), APPELLATE TRIBUNALS.
            </li>
            <br />
            <li>
              <div className="content-l">
                Assistance in preparation and representation of case before High
                Courts and{" "}
              </div>{" "}
              Supreme COURT OF INDIA.
            </li>
            <br />
            <li>
              <div className="content-l">
                Assistance and representation in relation to the Advance
                Rulings.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LitigationSupport;
