import React from 'react'
import cfa from "../assets/CFA.png";
import MyDesktop from '../MyHelpComponents/MyDesktop';
const corporatefinancialadvisory = () => {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-12 text-center bsa my-5">
                Corporate Financial Advisory
               </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <img src={cfa} alt="" className="img-fluid" />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-6 content-l my-5">
                    <div className="title-bsa">
                    OUR SERVICES INCLUDE THE FOLLOWING:
                    </div>
                    <br />
                    <ul>
                        <li>
                            <div className="title-bsa">
                            Fund raising
                            </div>— Venture capital and private equity
                        </li>
                        <li>
                        Advisory to Private Equity funds on fund organization, identification of opportunities, due diligence, negotiations, documentation support and transaction management services.
                        </li>
                        <li>
                        Debt and private equity syndication.Structured Finance
                        </li>
                        <li>
                        Structured Finance
                        </li>
                        <li>
                        Domestic or cross border mergers & acquisitions and joint venture financing.
                        </li>
                        <li>
                        Structured products for promoter financing.
                        </li>
                        <li>
                        Infrastructure, real estate funding, asset financing, project financing.
                        </li>
                        <li>
                        Structured products for balance sheet, capital structure & liquidity management.
                        </li>
                        <li>
                        Convertibles, ECBs & equity linked products
                        </li>
                        <li>
                        Business valuations & fair value opinion.
                        </li>
                    </ul>
                </div>
                <MyDesktop>
                <div className="text-center">
                        <div className="col-md-1 vl">
                        </div>
                    </div>
                </MyDesktop>
                <div className="col-md-5 my-5 content-l">
                FINANCE FORMS A BASIC INGREDIENT FOR ANY GROWTH OBJECTIVE. WE HAVE THE RIGHT BLEND OF PEOPLE WITH REQUISITE SKILLS TO RENDER CORPORATE FINANCIAL SERVICES.
                <br />
                <br />
                <br />
                <div className="title-bsa text-center">
                THE FIRM PROVIDES CLIENTS WITH A COMPLETE SPECTRUM OF TAX SUPPORT SERVICES:
                </div>
                <br />
                    <ul>
                        <li>
                        Advisory services in terms of the Indian Income Tax Laws
                        </li>
                        <li>
                        Advice on tax planning opportunities to optimize tax incidence
                        </li>
                        <li>
                        Assistance in tax compliance
                        </li>
                        <li>
                        Advice on business re-organization from a fiscal perspective
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default corporatefinancialadvisory
