import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import Yogi from "../assets/yogendra.png";
import kish from "../assets/kishore.png";
import prad from "../assets/pradeep.png";
import pada from "../assets/padam.png";
import sanj from "../assets/sanjeev.png";
import rake from "../assets/rakesh.png";
import gaur from "../assets/gaurav-chopra.png";
import vima from "../assets/vimal.png";
import prat from "../assets/prateek.png";
import shee from "../assets/sheenu.png";
var arr = [
  {
    image: Yogi,
    name: "Mr. Yogendra K Batra",
    description:
      "He retired as Principal Commissioner of Income Tax, Ahmedabad, in 2015, and is currently teaching at the Institute of Law, Nirma University, Ahmedabad. From heading all the top posts in the Income Tax Department to teaching undergraduate and postgraduate students, his expertise in the field of income tax law is unparalleled. He started his career as Assistant Commissioner (Investigation Circle) in New Delhi. He has worked as Under Secretary, Tax Policy and Legislation in the Central Board of Direct Taxes, the apex body of Income Tax Department wherein he worked for more than three years and contributed to four finance bills, i.e. 1991 to 1994. Also worked as Commissioner of Income tax as Appellate Commissioner, Director of Income tax (Investigation), Commissioner (Audit), Commissioner TDS and Principal Commissioner. His rich experience of working insightfully with big business houses adds spine to our core team.",
  },
  {
    image: kish,
    name: "Mr. Kishore Kumar Sharma",
    description:
      "He is a widely known and respected Senior advocate, mediator and International arbitrator, currently practising in Supreme Court and various high courts. He specializes in commercial mediation and International arbitration.His efforts have been recognized by Asian Law as a notable contribution. He is looked upon as a hallmark of quality, standards, reliability and dependability in providing a wide range of turnkey legal solutions and services on every aspect of law ranging from commercial law to criminal law and from litigation to arbitration. The skills, experience and expertise picked up through over four decades can be attributed to its untiring efforts, dedication and commitment to the legal field. Clients of the firm range from banks, trans-national companies, private companies, financial institutions & individuals. He represents the interests of clients in major legal disputes before trial and appellate courts, High Courts, Supreme Court and other judicial/quasi-judicial forums.",
  },
  {
    image: prad,
    name: "Mr. Pradeep Gupta",
    description:
      "He is a senior lawyer with experience spanning to over 40+ years. He is a well known and respected figure in the department and professional fraternity. His area of expertise has been Tax litigation, both direct and indirect . His vast experience includes dealing with various MNCs, HNI, Listed Companies, etc. Being a member of Bar Association , he has been representing the clients at various platforms and authorities. His portfolio is also enriched with clients in Delhi NCR and across geographical borders . His skills, experience and expertise picked up through over four decades can be attributed to his untiring efforts, dedication and commitment to the legal field.",
  },
  {
    image: pada,
    name: "Mr. Padam Kumar Goel",
    description:
      "Retired as Additional Commissioner , Uttar Pradesh Commercial taxes. He is a veteran having an experience of 35+ years in the field of taxation . Worked in very sensitive and complex fields of Search and Seizure ( Raids) , Departmental representative for litigation , Policy framing and implementation for his jurisdiction , Assessments and reassessments etc. He is renowned author of several books on GST , major one being “ GST – A complete study “. He is invited to various forums as a speaker for his GST lectures/seminars. His thorough knowledge and representational skills make him one of the strong pillars of the team.",
  },
  {
    image: sanj,
    name: "Mr. Sanjeev Mohan",
    description:
      "He is a retired joint commissioner from Uttar Pradesh commercial taxes and holds 35+ years experience in handling indirect tax matters related to VAT / GST . His working experience includes heading search and seizure cases, Special Investigation Bureau teams , Assessments,Appeal and client advisory. A lawyer as well from CCS university , Mr. Sanjeev exudes impeccable representational skills . A perfect addition to the team to handle complex tax cases.",
  },
  {
    image: rake,
    name: "Mr. Rakesh Kumar Jain ",
    description:
      "He is a Chartered Accountant from 1982 batch. He is a considered as stalwart in the real estate sector . He has extensive experience of over three decades in consulting & advisory related to the sales , marketing, liaison, procurement and stakeholder engagement. Mr. R.K. Jain possess comprehensive knowledge about legal/commercial nuances and is well networked with the government and other stakeholders in the sector. He has enjoyed high profile designations with some of the big real estate houses such as Omaxe , Ansal Group , Wave Infratech , Supertech , Unitech Group etc and assisted the client to sale through some remarkable projects.",
  },
  {
    image: gaur,
    name: "Mr. Gaurav Chopra",
    description:
      "He has two decades of experience in various domains like entertainment, finance, media, to name a few. The comp anies, including Niche Overseas, and Joint Media Initiative, are thriving under his leaders.. He is pursuing his passion at Filmy Duniya Digital as a Founder. He has pioneered the concept of adding humour with satire to the film-based content creation. Being the Co-Founder at BIP Start-up Venture Capital Fund, he strategizes and provides the fund, incubation infrastructure to small, emerging organizations that have demonstrated or are deemed to have high growth potential. His strength is turning a promising idea into a proliferating business through strategy. Now with a vision to further contribute to the society, he is working with Delhi Advertising Club, and the central organization of the Press of India, The Indian Newspaper Society.",
  },
  {
    image: vima,
    name: "Mr. Vimal Kumar",
    description:
      "He is commerce graduate from Delhi University and a qualified Chartered Accountant since 2011. His 9+ years of post qualification experience spans from dealing in all sort of audits, taxations and litigation. He has been part of many committees/study group of ICAI namely Study group on Service tax and GST, Study group on blockchain etc. Apart from technical knowledge he has been invited many times on various media platforms as panelist for Discussions.",
  },
  {
    image: prat,
    name: "Mr. Prateek Gupta",
    description:
      "He is commerce graduate and a qualified Chartered Accountant since 2011. His 9+ years of post qualification experience is rich in dealing with tax litigations upto Tribunal. He has also been extensively involved in preparing/assisting tax cases for various high courts and Supreme court. Also a Lawyer, Prateek brings with him the fresh perspective of law interpretations with utmost simplicity for the client. His knack of handling complex cases like search and seizure , appeals , advance ruling etc have been much appreciated by the clients. Technical knowledge combined with precise departmental representation are his main strengths.",
  },
  {
    image: shee,
    name: "Mrs. Sheenu Jain",
    description:
      "She is commerce graduate and a qualified Chartered Accountant from India. Her area of specialization relates to Audit ( Statutory , Internal etc) and international taxation. She holds the international front for our firm in Toronto ,Canada. Her experience of working with Deloitte and been an enriching addition to the team. Having worked for various multi national companies , she possess in-depth understanding of cross border transactions , taxation from both the countries perspective and compliance environment required . All this coupled with effective client communication and handling makes her one of the prominent faces for the firm.",
  },
];
const Ourboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <div class="container py-5">
        <div className="row upper">
          <div className="col-md" id="obcol">
            <p id="ob">OUR BOARD</p>
          </div>
        </div>

        <div className="row">
          {arr.map((item) => (
            <div class="col-md-4 crdcol">
              <div class="card crd">
                <img
                  class="card-img-top"
                  src={item.image}
                  alt="Card image cap"
                  className="crdimg"
                />
                <div class="card-body">
                  <h6 class="card-title" align="center">
                    {item.name}
                  </h6>
                  <p
                    className="card-text truncated"
                    onClick={() => (
                      setShowModal(true),
                      setName(item.name),
                      setDescription(item.description)
                    )}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton className="modalhdr">
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modalbdy">
          <p>{description}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Ourboard;
