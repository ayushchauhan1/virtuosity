import React from 'react'
import IDFC from "../assets/IDFC.png";
import Bikanervala from "../assets/Bikanervala.png";
import UltraTech from "../assets/UltraTech.png";
import asalapi from "../assets/asalapi.png";
import ireda from "../assets/ireda.png";
import supertech from "../assets/supertech.png";
import ansalhousing from "../assets/ansalhousing.png";
import jmc from "../assets/jmc.png";
import mcx from "../assets/mcx.png";
import khfoges from "../assets/khfoges.png";
import triveni from "../assets/triveni.png";
import Sol from "../assets/Solicitors.png";

const contactus = () => {
    return (
        <div>
            <div className="text-center title-1">
                 SOME OF OUR SATISFIED CLIENTS
            </div>
            <div className="container">
                <div className="row my-5 align-items-center">
                    <div className="col-md-4 text-center">''
                        <img src={IDFC} alt=""/>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={Bikanervala} alt=""/>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={UltraTech} alt=""/>
                    </div>
                </div>
                <div className="row my-5 align-items-center">
                    <div className="col-md-4 text-center">
                        <img src={asalapi} alt=""/>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={ireda} alt=""/>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={supertech} alt=""/>
                    </div>
                </div>
                <div className="row my-5 align-items-center">
                    <div className="col-md-4 text-center">
                        <img src={ansalhousing} alt=""/>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={jmc} alt=""/>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={mcx} alt=""/>
                    </div>
                </div>
                <div className="row my-5 align-items-center">
                    <div className="col-md-4 text-center">
                        <img src={khfoges} alt=""/>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={triveni} alt=""/>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={Sol} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contactus;
