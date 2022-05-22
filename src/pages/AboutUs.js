import React from "react";
import "./AboutUs.css";
import Footer1 from "./Footer1";
import image from "../assets/Home/coding.png";

function AboutUs() {
  return (
    <div className="container">
      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">About Me</h2>
              <p className="text-muted mb-4">
                Hi! My name is Hicham, i'm a software engineering student in
                high school of IT in Morocco<span>'INPT'</span>, i'm very
                passionate about development, either Mobile or Web. I already
                build a lot of projects during my study or during the intership
                in professionel mode.
              </p>
            </div>
            <div
              style={{ width: "100px" }}
              className="col-lg-5 px-5 mx-auto w-[100%] order-1 order-lg-2"
            >
              <img src={image} alt="" className="img-fluid mb-4 mb-lg-0" />
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
    </div>
  );
}

export default AboutUs;
