import React from 'react'
import indirect from "../assets/indirect tax.png";
import MyDesktop from '../MyHelpComponents/MyDesktop';
const indirect_tax = () => {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-12 text-center bsa my-5">
                    INDIRECT TAX
               </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <img src={indirect} alt="" className="img-fluid" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center my-5 cnt">
                    OUR SERVICE OFFERINGS ENCOMPASS<br /> THE FOLLOWING
               </div>
            </div>
            <div className="row my-5">
                <div className="col-md-6 my-5">
                    <div className="title-bsa">
                        INDIAN LEGISLATION AND RULES:
                    </div>
                    <br />
                    <div className="content-l">
                        <ul>
                            <li>Chapter V of the Finance Act, 1994 (Service Tax Legislation)</li>
                            <li>Central Excise Act, 1944</li>
                            <li> The Customs Act, 1962</li>
                            <li>Foreign Trade Policy and SEZ Regulations</li>
                            <li>Central Sales Tax Laws</li>
                            <li>State Value Added Tax, Professional Tax, Entry Tax.</li>
                        </ul>
                    </div>
                </div>
                <MyDesktop>
                <div className="text-center">
                <div className="col-md-1 vl">
                </div>
                </div>
                </MyDesktop>
                <div className="col-md-5 my-5">
                    <div className="title-bsa">
                        OUR INDIRECT TAX ADVISORY SERVICES INCLUDE:
                </div>
                <br />
                <div className="content-l">
                    <ul>
                        <li>Advising on operations/transactions and tax benefits/exemptions/set offs available.</li>
                        <li>Conducting Health Check/Credit reviews.</li>
                        <li>Due diligence reviews.</li>
                        <li>Advice on execution of Turnkey Projects/EPC Contracts.</li>
                        <li>Opportunities, devising the most tax efficient models and comprehensive range of compliance services.</li>
                        <li>Providing on-call advisory services on specific Indirect Tax queries.</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}

export default indirect_tax