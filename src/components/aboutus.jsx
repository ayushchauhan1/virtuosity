import React from "react";
import first from "../assets/revenue.svg";
import second from "../assets/2nd.svg";
import third from "../assets/3rd.svg";
import fourth from "../assets/expert.svg";

const aboutus = () => {
  return (
    <div>
      <div class="container">
        <div className="row upper">
          <div className="col-md obcol">
            <p className="ob">ABOUT US</p>
          </div>
        </div>

        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={first} alt="First slide" />
              <div class="carousel-caption d-none d-md-block">
                <p class="slide">We ensure transparency and trust in all our dealings. It is not a hidden fact that any dealing with government agencies lead to sleepless nights for any assessee. The opaque system and uncertainty has been the real challenge to deal with. Our team has handled many top businesses in the most transparent manner with client updation at every step.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={second} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={third} alt="Third slide" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default aboutus;
