import React from "react";
import bsa from "../assets/bsa.png";
import MyDesktop from "../MyHelpComponents/MyDesktop";
import { Helmet } from "react-helmet";

const BSA = () => {
  return (
    <div className="container-fluid pt-4">
      <Helmet title="Business Setup Advisory" />
      <div className="row my-5">
        <div className="col-12 text-center bsa">Business Setup Advisory</div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <img src={bsa} alt="" className="img-fluid" />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-6 ">
          <div className="container content-l my-4">
            As entry strategy specialists, we understand that setting up
            business in a complex Indian jurisdiction can be challenging and
            time consuming task. With over a decade of experience in giving
            structured and timely advice, our project management service
            supports every stage of your business setting up. From identifying
            the most suitable entry route and assisting you in deal structuring
            to providing a one stop shop for all regulatory approvals, we help
            you consolidate the new set up. From obtaining clearances and
            approvals from Government bodies like the Reserve Bank of India
            (RBI), Secretariat of Industrial Assistance (SIA), Foreign
            Investment Promotion Board (FIPB), Registrar of Companies (ROC),
            Foreign Contribution Regulation Authority (FCRA) etc., to land
            acquisition, clear title and conversion rights, we make your
            experience in India a hassle-free one.
            <br />
            <br />
            <br />
            <br />
            <div className="title-bsa">Location Study:</div>
            <br />
            We conduct location studies by evaluating relative advantage of
            different Indian states based on our well-defined multi perspective
            geographic, political, economic parameters, including fiscal
            incentives, rebates and tax concessions knowledge.
          </div>
        </div>
        <MyDesktop>
          <div className="text-center">
            <div className="col-1 vl"></div>
          </div>
        </MyDesktop>
        <div className="col-md-5">
          <div className="container content-l my-4">
            <div className="title-bsa my-4">Entry Strategy:</div>
            <div className="content-l">
              <ul>
                <li>
                  Planning and implementing an appropriate route for investing
                  into India
                </li>
                <li>Suggest, plan and implement entry strategy.</li>
                <li>
                  Detailed analysis of the regulatory environment, evaluate
                  alternative entry options and decide best option.
                </li>
              </ul>
            </div>
            <br />
            <div className="title-bsa">Project Management:</div>
            <br />
            <div className="content-l">
              Project managing factory establishment in India, including
              identification of industrial location, necessary clearances from
              government agencies and facilitating relationship with key service
              providers and contractors.
            </div>
            <br />
            <br />
            <div className="title-bsa">Regulatory Approvals:</div>
            <br />
            <div className="content-l">
              Specialized teams to assist in getting approvals from the ‘Reserve
              Bank of India’ (RBI), ‘Secretariat of Industrial Assistance’
              (SIA), ‘Foreign Investment Facilitation Portal (FIFP), ‘Registrar
              of Companies’ (ROC), ‘Foreign Contribution Regulation Authority’
              (FCRA) and other concerned agencies.
            </div>
            <br />
            <br />
            <div className="title-bsa">Secretarial Support:</div>
            <br />
            <div className="content-l">
              Assisting the management in drafting and maintaining statutory
              records, minutes of meetings of the Board (Annual, Shareholders,
              Board), appointment and resignation of key personnel,
              increase/reduction of capital, dividend declaration, change of
              registered office etc. and if required assist in closure of office
              and liquidation of an entity.
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BSA;
