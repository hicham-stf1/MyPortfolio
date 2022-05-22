import React from "react";
import "./Resume.css";
import Footer1 from "./Footer1";

function Resume() {
  return (
    <div className="container">
      <h1 cl>Education</h1>
      <div className="card">
        <p style={{ fontWeight: "bold" }}>
          CPGE Ibno Bajja - TSI <span> 2018-2020</span>
        </p>
      </div>
      <div className="card">
        <p style={{ fontWeight: "bold" }}>
          Advanced Software Engineering For Digital Services - INPT Rabat{" "}
          <span> 2020-présent</span>
        </p>
      </div>

      <h1>Skills</h1>

      <div className="row">
        <div class="col-6">
          <h5>HTML, CSS, Bootstrap, Tailwind CSS, Materiel UI </h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "60%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              60%
            </div>
          </div>
          <h5>Java, Python, JavaScript</h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "60%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              60%
            </div>
          </div>
          <h5>Android (Java)</h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "60%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              60%
            </div>
          </div>
          <h5>Docker</h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "40%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              40%
            </div>
          </div>
          <h5>UX/UI DESIGN</h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              50%
            </div>
          </div>
        </div>

        <div class="col-6">
          <h5>MySQL, PostgreSQL, Firebase, MongoDB</h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              50%
            </div>
          </div>

          <h5>PHP, NodeJs, java, Spring Boot</h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              50%
            </div>
          </div>

          <h5>ReactJS , ReactNative</h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "40%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              40%
            </div>
          </div>
          <h5>Code Test : Junit5</h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "40%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              40%
            </div>
          </div>
          <h5>Machine Learning : Python</h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "40%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              40%
            </div>
          </div>
        </div>
      </div>

      <h1>Projects</h1>
      <div className="card">
        <h5>
          E-commerce Web Application :
          <span>HTML, CSS, PHP, JavaScript, Bootstrap</span>
        </h5>
        <p>
          Esta-Elzare is the name of our application, it's an E-commerce web
          application that handles the process of shopping online{" "}
        </p>
      </div>
      <div className="card">
        <h5>
          Liqah-Corona :<span>Java, FireBsae et Xml</span>
        </h5>
        <p>
          {" "}
          It is a Mobile Android Aplication that handles the processus of
          Vaccination in our country, it is a very simple application that
          provide many services like Informations, RDV of Vaccination and more.
        </p>
      </div>
      <div className="card">
        <h5>
          MERN Web Application:
          <span> MongoDB, Express, React JS et Node JS</span>
        </h5>
        <p> Une application web pour lier les avocats et les clients</p>
      </div>
      <div className="card">
        <h5>
          Android application called Geeked
          <span> Java, FireBsae et XML</span>
        </h5>
        <p>
          {" "}
          Une application mobile Android qui offre un réseau social pour le
          partage des projets et articles IT{" "}
        </p>
      </div>
      <h1>Work Expertise</h1>
      <div className="card">
        <h5>
          Aji Nhedrou :<span>Java, FireBsae, Xml</span>
        </h5>
        <p>
          {" "}
          In the cadre of intership in Zaim Digital Company, my role in the
          intership is to develop a new version of a Mobile Application called
          Aji-Nhedrou in the domain Of Health.
        </p>
      </div>

      <h1>logiciels</h1>
      <div className="card" style={{ marginBottom: "20px" }}>
        <p>
          AdobeXd, Eclipse, Intellij IDEA, Android Studio, Enterprise Architect,
          Balsamiq, XAMP, Figma, Canva, Postman, Insomnia , Docker, Jenkins
          ,VMWare .. And more{" "}
        </p>
      </div>
      <Footer1 />
    </div>
  );
}

export default Resume;
