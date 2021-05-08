import React from 'react'
import EL from "../assets/Emerging.png";
import MyDesktop from '../MyHelpComponents/MyDesktop';
const EmergingLaws = () => {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-12 text-center bsa my-5">
                Emerging Laws
               </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <img src={EL} alt="" className="img-fluid" />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-6 my-5 content-l">
                    <ul>
                        <li>
                        At Virtuosity we have the expertise and proficiency to help you navigate through India’s dynamic and evolving regulatory environment. Several crucial reforms, policy measures and landmark legislations have been introduced in the recent years such as
                        </li>
                        <br />
                        <div className="container">
                            <li>
                            Benami Transactions (Prohibition) Amendment Act,
                            </li>
                            <li>
                            Black Money (Undisclosed Foreign Income and Assets)
                            </li>
                            <li>
                            Imposition of Tax Act, Real Estate (Regulation and Development) Act,
                            </li>
                            <li>
                            Insolvency and Bankruptcy Code,
                            </li>
                            <li>
                            Banning of Unregulated Deposit Schemes Ordinance, to name a few
                            </li>
                        </div>
                    </ul>
                </div>
                <MyDesktop>
                    <div className="text-center">
                        <div className="col-md-1 vl">
                        </div>
                    </div>
                </MyDesktop>
                <div className="col-md-5 my-5 content-l">
                HOW CAN WE ASSIST?
                <br />
                <br />
                <ul>
                    <li>
                        <div className="title-bsa">
                        Advisory
                        </div>
                        - We provide assistance in assessing the impact of the new laws on business of the company We also handhold the organisations in terms of drafting any representations related to such emerging laws to be submitted to the Government or Regulatory Authority
                    </li>
                    <li>
                        <div className="title-bsa">
                        Compliance
                        </div>
                        - We provide assistance in undertaking the compliance mapped under the new law
                    </li>
                    <li>
                        <div className="title-bsa">
                        Litigation support
                        </div>
                        - Developing and implementing strategies for dispute resolution taking into account the dispute resolution manner specified under the new law, preparation of legal documentation and representation before the Authoritie
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default EmergingLaws
