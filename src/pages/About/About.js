import React from "react";
import "./About.css";
import Container from "../../Components/Container/Container";

function About() {
  return (
    <div className="about" id="about">
      <Container className="about-cont" data-aos="fade-in">
        <div className="about-main-content">

          <div className="about-img" data-aos="fade-up">
            <img
              src={require("../../pictures/img1.jpg")}
              alt="Abhishek Singh"
            />
          </div>

          <div className="about-text" data-aos="fade-up">

            <div className="about-title">
              <h2>
                About <tag>Me</tag>
              </h2>
            </div>

            <div className="about-p">
              <p>
                Hi, I’m Abhishek Singh, a Full Stack Java Developer from Rewa,
                India. I have around 3 years of experience in developing
                scalable and user-friendly web applications using React,
                HTML, CSS, JavaScript, and Bootstrap.

                My primary expertise is in backend development using
                Java and Spring Boot, where I build RESTful APIs and
                microservices-based applications. I also work with
                databases like MySQL and Oracle to design secure,
                efficient, and reliable backend systems.
              </p>
            </div>

            <div className="about-list-skills">
              <div className="about-list">

                <div className="about-list-item">
                  <h5>Name</h5>
                  <tag className="name-colon">:</tag>
                  <p>Abhishek Singh</p>
                </div>

                <div className="about-list-item">
                  <h5>Age</h5>
                  <tag className="age-colon">:</tag>
                  <p>23</p>
                </div>

                <div className="about-list-item">
                  <h5>Address</h5>
                  <tag className="adress-colon">:</tag>
                  <p>Rewa, India</p>
                </div>

                <div className="about-list-item">
                  <h5>Phone</h5>
                  <tag className="phone-colon">:</tag>
                  <p>(+91) 8815341979</p>
                </div>

                <div className="about-list-item">
                  <h5>Email</h5>
                  <tag className="email-colon">:</tag>
                  <p>abhisheksinghmnc@gmail.com</p>
                </div>

              </div>
            </div>

            <div className="about-btn">
              <a
                className="download-btn"
                href={require("../../pictures/Abhishek_singh.pdf")}
                download
              >
                Download Resume
              </a>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;