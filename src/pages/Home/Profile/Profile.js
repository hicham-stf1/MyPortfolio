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
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/hicham-za%C3%AFdi-2983331a3/">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://web.facebook.com/profile.php?id=100008363893267">
                <i className="fa fa-facebook-square"></i>
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
                    "Full Stack Developer 💻",
                    1000,
                    "React/React Native Dev 🔴",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                I Develop Mobile and Web Apps, Don't Hesitate to Contect ME 😄
              </span>
            </span>
          </div>
          <div className="profile-options">
            <div className="getResume">
              <a href="cvhicham.pdf" download="hicham.pdf">
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
