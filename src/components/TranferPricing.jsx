import React from 'react'
import TPSO from "../assets/TPSO.png";
const TranferPricing = () => {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-12 text-center bsa my-5">
                Transfer Pricing Service Offerings
               </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <img src={TPSO} alt="" className="img-fluid" />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-2">
                </div>
                <div className="col-md-8 content-l">
                    <ul>
                        <li>
                            <div className="title-bsa">
                            Transfer Pricing Documentation
                            </div>
                            – We assist corporations to design and implement compliance policies, and prepare robust documentation.
                        </li>
                        <br />
                        <li>
                            <div className="title-bsa">
                            Transfer Pricing Planning & Supply Chain Structuring
                            </div>
                            – We provide assistance in developing and implementing viable Transfer Pricing policies, harmonization of existing Transfer Pricing policies, adopting new Transfer Pricing structures or alignment of prices with business restructuring.
                        </li>
                        <br />
                        <li>
                            <div className="title-bsa">
                            Filing of audit report with the Indian tax authorities
                            </div>
                            - function, asset and risk analysis, industry overview, bench marking study, preparation and issuance of accountant’s report.
                        </li>
                        <br />
                        <li>
                        Litigation Support / Transfer Pricing Controversy Management
                        </li>
                        <br />
                        <li>
                            <div className="title-bsa">
                            Advance Pricing Arrangements
                            </div>
                            – We can assist preparing a robust Transfer Pricing policy aligning with business and commercial substance along with deciding on various documents and information that need to be shared with tax authorities during the course of negotiating and implementation of an APA program.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TranferPricing
