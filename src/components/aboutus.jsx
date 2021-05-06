import React from "react";
import first from "../assets/revenue.svg";
import second from "../assets/2nd.svg";
import third from "../assets/3rd.svg";
import fourth from "../assets/expert.svg";



const aboutus = () => {
  return (
    <div>
      <div class="container-fluid">
        <h1 class="text-center mb-3">ABOUT US</h1>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner row w-100 mx-auto">
            <div class="carousel-item col-md-12 active">
              <div class="card">
                <img
                  class="card-img-top img-fluid"
                  src={first}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">Transparency</h4>
                  <p class="card-text">
                    We ensure transparency and trust in all our dealings. It is
                    not a hidden fact that any dealing with government agencies
                    lead to sleepless nights for any assessee. The opaque system
                    and uncertainty has been the real challenge to deal with.
                    Our team has handled many top businesses in the most
                    transparent manner with client updation at every step.
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item col-md-12">
              <div class="card">
                <img
                  class="card-img-top img-fluid"
                  src={second}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">Expertise</h4>
                  <p class="card-text">
                    Our team of experts is well-equipped to handle even the most
                    complicated cases. Their respective areas of specialization
                    ensures that clients get all the possible services and
                    solution in a particular field be it Income Tax or GST or
                    NCLAT or enforcement Directorate etc.
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item col-md-12">
              <div class="card">
                <img
                  class="card-img-top img-fluid"
                  src={third}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">Experience</h4>
                  <p class="card-text">
                    Our team has a wide range of experience in dealing with a
                    variety of situations and handling them effectively with
                    minimum response time. Many top leaders of the industries
                    have posed their faith in our execution skills which can be
                    inferred from our indicative client list.
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item col-md-12">
              <div class="card">
                <img
                  class="card-img-top img-fluid"
                  src={fourth}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">Knowledge</h4>
                  <p class="card-text">
                    Legal knowledge combined with effective representational
                    skills. We understand that we run as a part of overall
                    management team for any business. Our precise and tailormade
                    solutions not only makes the client comfortable but also
                    ensures that no compromise is made in terms of quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#myCarousel"
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
