import React from 'react'
import InterTax from "../assets/International Tax.png";
const InternationalTax = () => {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-12 text-center bsa my-5">
                International Taxation
               </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <img src={InterTax} alt="" className="img-fluid" />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-3">
                </div>
                <div className="col-md-6 content-l">
                    <div className="title-bsa">
                    OUR RANGE OF SERVICES INCLUDE:
                    </div>
                
                    <br />
                    <br />
                <ul>
                    <li>
                    Advice on cross border transactions
                    </li>
                    <li>
                    Advice on double tax treaties and foreign tax systems/implications
                    </li>
                    <li>
                    Tax efficient structuring of cross border transactions
                    </li>
                    <li>
                    Advisory services in relation to the improvement/effectiveness of the cross border ‘Supply Chain’ process.
                    </li>
                    <li>
                    International tax dispute resolution
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default InternationalTax
