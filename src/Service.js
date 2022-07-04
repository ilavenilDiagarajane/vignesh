import React from "react";
import group from "./image/group.png";
import maskgroup22 from "./image/Mask Group 22.png";
import maskgroup25 from "./image/MaskGroup25.png";
import group25 from "./image/Group1170.png";
import group1236 from "./image/Group1236.png";
import group1173 from "./image/Group1173.png";
import group1234 from "./image/Group1234.png";
import group575 from "./image/Group575.png";
function Service() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 d-flex align-items-center justify-content-center about">
            <div class="title">
              <h3>SERVICES</h3>
              <h1>PROBACKERS</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12  d-flex align-items-center justify-content-center about_middle m-3">
            <h1>
              OU<span>R</span> KEY STRENGTHS
            </h1>
          </div>
          <div className="col-lg-12  d-flex align-items-center justify-content-center about_middle m-1">
            <h5 className="service_middle_title">
              WE HELP COMPANIES WITH RAISING FUNDS IN A VAST NUMBER OF WAYS TO
              HELP THEM GROW.
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6  d-flex align-items-center justify-content-center ">
            <img
              src={maskgroup25}
              class="img-fluid  maskgroup25"
              alt=" maskgroup25"
            />
          </div>
          <div className="col-lg-6  my-5">
            <div className="fs-3 text-start ">FUNDING</div>
            <div className="about_middle_para justify-content-start my-5">
              <h4 className="fs-5 m-1 text-start  ">Equity Funding</h4>
              <p className="col-lg-8 fs-6 m-1">
                Leveraging our extensive network of investors, we can assist you
                in connecting the ideal investor(s) for your company.
              </p>
              <div />
            </div>
            <div className="about_middle_para justify-content-start my-5">
              <h4 className="fs-5 m-1 text-start  ">Debt Funding</h4>
              <p className="col-lg-8 fs-6 m-1">
              Secure/unsecured loans from banks, NBFCs, private lenders, overseas lenders/grants.
              </p>
              <div />
            </div>
            <div className="about_middle_para justify-content-start my-5">
              <h4 className="fs-5 m-1 text-start  ">Project Funding</h4>
              <p className="col-lg-8 fs-6 m-1">
              Raising funds for huge projects from private and public lenders on a case-by-case basis
              </p>
              <div />
            </div>
            <div className="about_middle_para justify-content-start my-5">
              <h4 className="fs-5 m-1 text-start  ">Financial Instruments</h4>
              <p className="col-lg-8 fs-6 m-1">
              Bill discounting, Line of Credit (LC), SBLC, & Bank Guarantee for both government and non-government tenders
              </p>
              <div />
            </div>
            <div className="about_middle_para justify-content-start my-5">
              <h4 className="fs-5 m-1 text-start  ">Debt Restructuring</h4>
              <p className="col-lg-8 fs-6 m-1">
              Restructure your debt by raising fresh funds.
              </p>
              <div />
            </div>
          </div>
        </div>

        
        <div className="row  m-5 ">
          <div className="col-lg-12 d-flex justify-content-evenly ">
            <div className=" m-5 ">
              <h6 className="text-end">REACH US</h6>
              <p className="text-end">
                Level 6, N Heights, <br />
                Plot no 38, Phase 2, <br />
                Hitech City, Hyderabad
              </p>
            </div>
            <div>
              <img
                src={group575}
                className="img-fluid group575 m-5 "
                alt=" group575"
              />
            </div>

            <div className=" m-5 ">
              <h6 className="text-start">CONTACT</h6>
              <p className="text-start">
                +91 9626511458 <br />
                www.probackers.in <br />
                conatct@probackers.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
