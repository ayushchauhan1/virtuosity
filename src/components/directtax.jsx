import React from "react";
import direct from "../assets/direct tax.png";
import { Helmet } from "react-helmet";

const directtax = () => {
  return (
    <div className="container pt-5">
      <Helmet title="Direct Tax" />
      <div className="row">
        <div className="col-12 text-center bsa my-5">DIRECT TAX</div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <img src={direct} alt="" className="img-fluid" />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-3"></div>
        <div className="col-md- text-left title-bsa my-5">
          <ul>
            <li>
              <div className="content-l">
                {" "}
                Advisory on tax effective structures ,strategizing , compliance
                etc.
              </div>
            </li>
            <li>
              <div className="content-l">Issuance of legal opinions.</div>
            </li>
            <li>
              <div className="content-l">
                Effective litigation handling and support TAX.
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default directtax;
