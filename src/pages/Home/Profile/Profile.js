import React from "react";
import Typical from "react-typical";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/hicham-stf1">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.instagram.com/hzaydi78/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://twitter.com/hichamo_01">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-test">
              {""}
              Hello, I'm
              <span className="highlighted-text">Hicham</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Mobile Developer 📱",
                    1000,
                    "Web Developer 💻",
                    1000,
                    "React/React Native Dev 🔴",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                I Will Develop for you a responsive Web or Mobile application,
                Don't Hesitate to Contect ME 😄
              </span>
            </span>
          </div>
          <div className="profile-options">
            <div className="getResume">
              <a href="cvhichamzaidi.pdf" download="hicham.pdf">
                <button type="button" className="btn btn-primary btn-rounded">
                  Get Resume
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
