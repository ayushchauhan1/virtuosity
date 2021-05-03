import React from 'react';
import logo2 from '../assets/logo2.png';
import Services from '../assets/services.png';
import bikanervala from '../assets/bikanervala.png';
import ansal from'../assets/ansal.png';
import ultratech from '../assets/ultratech.png';
import ireda from '../assets/ireda.png';
import jmc from '../assets/jmc.png';
import why from '../assets/whyvirtuosity.png';
import useMediaQuery from "./useMediaQuery";

function Example () {
  const matches = useMediaQuery("(min-width: 600px)");
  const imgSize = matches ? '100%' : '80%';
  return imgSize;
  }

const Home = () => {
     const image = Example();
    return (
        <div>
            <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12  logo2">
                    <img src={logo2} height='25%' ></img>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 block1">
                    <div className="text-center ">
                        <h1 style={{color:'white',paddingTop:'100px'}}>What we do?</h1>
                        <div className='block1text'>Virtuosity Financial Services LLP is a Progressive, focused, specialized and well-structured full service firm of corporate strategists, tax advisory experts , legal specialists and financial and marketing analysts pooling in a combined experience of 170 plus years having regional and international presence and foreign desks combined with the expertise of our partners and experts makes us the preferred choice for companies. Our firm is committed to quality deliverables, cost optimized and value added partnerships while providing integrated solutions for setting up and running business operations in India. We constantly pursue new ideas and embrace a culture of curiosity, agility and innovation. We deliver the greatest value by collaborating across services to create innovative, tailored solutions to resolve clients’ complex challenges and helping our dynamic clients unlock their potential for growth.</div>



                    </div>

                </div>
            </div>
            </div>


            <div className="text-center pt-5 ourservicestext" >
                OUR SERVICES
            </div>

            <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 text-center serviceImg"  >
                    <img src={Services} height='75%'></img>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12  block2">
                  <ul>
                      <li className='services'>Transfer Pricing Service Offerings</li>
                      <li className='services'>Indirect Taxes</li>
                      <li className='services'>Business Setup Advisory</li>
                      <li className='services'>Litigation Support</li>
                      <li className='services'>Goods and Serivice Tax</li>
                      <li className='services'>Emerging Laws</li>
                      <li className='services'>Corporate Financial Advisory </li>
                      <li className='services'>Non-Core Process Outsourcing</li>
                      <li className='services'>International Taxation</li>
 


                  </ul>



                </div>
            </div>
            </div>
            <div id="demo" className="carousel slide block3" data-ride="carousel">

  <ul className="carousel-indicators" >
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
    <li data-target="#demo" data-slide-to="3"></li>
    <li data-target="#demo" data-slide-to="4"></li>

  </ul>
 
  <div className=" text-center align-middle someclientstext"  >
                    SOME OF OUR SATISFIED CLIENTS
            </div>

  <div className="carousel-inner text-center " >
    <div className="carousel-item active">
      <img src={ansal} height={image}></img>
    </div>
    <div className="carousel-item">
      <img src={bikanervala} height={image} ></img>
    </div>
    <div className="carousel-item">
      <img src={ultratech} height={image}></img>
    </div>
    <div className="carousel-item">
      <img src={ireda} height={image}></img>
    </div>
    <div className="carousel-item">
      <img src={jmc} height={image}></img>
    </div>
  </div>


  <a className="carousel-control-prev" href="#demo" data-slide="prev" style={{color:'black'}}>
    <span className="carousel-control-prev-icon" ></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>

</div>
<div className='container-fluid'>
<div className='row'>
    <div className='col-lg-6 col-md-6 col-sm-12 pt-5 text-center' >
        <h1>Why Virtuosity?</h1>
        <img src={why} style={{paddingTop:'50px',height:'500px'}}></img>
    </div>
    <div className='col-lg-6 col-md-6 col-sm-12 block4'></div>
</div>
</div>
        </div>
    )
}

export default Home;
