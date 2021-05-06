import React from 'react'
import noncoreprocess from "../assets/noncore.png";
import MyDesktop from '../MyHelpComponents/MyDesktop';
const noncore = () => {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-12 text-center bsa my-5">
                    Non Core Process Outsourcing
               </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <img src={noncoreprocess} alt="" className="img-fluid" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center my-5 cnt">
                    OUR SPECIALIZED ADVISORY TEAMS <br /> ASSIST YOU IN DECISION MAKING WITH:
               </div>
            </div>
            <div className="row my-5">
                <div className="col-md-6 my-5 title-bsa">
                <ul><li>
                    Financial Accounting
                        <div className="content-l">
                        -Conversant with Indian and international accounting softwares
                        </div></li>
                        <br />
                        <li>
                        Virtual CFO
                        <div className="content-l">
                        -Virtual Chief Financial Officer (CFO) services by managing, providing analytics and business insights for decision making requirements.
                        </div></li>
                        <br />
                        <li>
                        Payroll
                        <div className="content-l">
                        -Set-up, maintain and ensure timely and accurate processing of employee payroll in line with payroll manual, HR policies and regulations. Compliance Diagnostics – Comprehensive diagnostic check of business to identify and remediate compliance gaps.
                        </div></li>
                        </ul>
                </div>
                <MyDesktop>
                    <div className="text-center">
                        <div className="col-md-1 vl">
                        </div>
                    </div>
                </MyDesktop>
                        <div className="col-md-5 title-bsa my-5">
                            <ul>
                                <li>
                                Compliance Diagnostics
                                <div className="content-l">
                                -Comprehensive diagnostic check of business to identify and remediate compliance gaps.
                                </div>
                                </li>
                                <br />
                                <li>
                                Debtor/ Vendor Reconciliation
                                <div className="content-l">
                                -Analysis of agreements, scrutiny of transaction at invoice level to affirm book balance is in conformity with the balance at other end, aging analysis and over viewing/ follow-up assistance in collection and Payments.
                                </div>
                                </li>
                                <br />
                                <li>
                                Inventory Management
                                <div className="content-l">
                                -Assistance in managing inventory through controlling re-order levels, overseeing transportation, monitoring storage of the same, notifying on the unnecessary leakages.
                                </div>
                                </li>
                            </ul>
                        </div>
            </div>
        </div>
    )
}

export default noncore
