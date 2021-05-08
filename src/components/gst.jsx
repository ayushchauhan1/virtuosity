import React from "react";
import Gst from "../assets/gst.png";
import { Helmet } from "react-helmet";

const gst = () => {
  return (
    <div className="container pt-5">
      <Helmet title="Goods And Service Tax" />
      <div className="row">
        <div className="col-12 text-center bsa my-5">Goods And Service Tax</div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <img src={Gst} alt="" className="img-fluid" />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-2"></div>
        <div className="col-md-8 content-l">
          <div className="title-bsa">
            OUR SERVICES IN RELATION TO THE GST INTER ALIA INCLUDE THE
            FOLLOWING:
          </div>
          <br />
          <ul>
            <li>GST implementation services.</li>
            <li>Conducting Health Check / Credit reviews.</li>
            <li>Undertaking due diligence reviews.</li>
            <li>GST advisory services on all matters.</li>
            <li>Advice on execution of turnkey projects / EPC Contracts.</li>
            <li>
              Conducting anti-profiteering studies and assistance in relation to
              anti-profiteering certification, assistance in relation to ITC –
              02 certification for transfer of credit in case of sale, merger,
              de-merger, amalgamation etc of entity.
            </li>
            <li>
              End to end assistance in relation to GST enquiries and
              assessments, including representation before the Tax Authorities.
            </li>
            <li>Tax Authorities</li>
            <li>
              Representation before the Authority for Advance Ruling/ Appellate
              Authority of Advance Ruling.
            </li>
            <li>Complete outsourcing of GST compliances on PAN India basis.</li>
            <li>GST Audits and credit reconciliations.</li>
            <li>Drafting, filing and processing of refund claims.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default gst;
