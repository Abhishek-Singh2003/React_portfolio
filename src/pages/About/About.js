import React from "react";
import "./About.css";
import Container from "../../Components/Container/Container";
import Button from "../../Components/Button/Button";

function About() {
  return (
    <div className='about' id='about'>
      <Container className='about-cont' data-aos='fade-in'>
        <div className='about-main-content'>
          <div className='about-img' data-aos='fade-up'>
            <img src={require("../../pictures/img1.jpg")} />
          </div>
          <div className='about-text' data-aos='fade-up'>
            <div className='about-title'>
              <h2>
                About <tag>Me</tag>
              </h2>
            </div>
            <div className='about-p'>
              <p>
               Hi, I’m Abhishek Singh, a Full Stack Web Developer from Rewa, India. I have around 2 years of experience in building responsive and user-friendly web applications using HTML, CSS, JavaScript, Bootstrap, and Angular. On the backend, I work with Java and Spring Boot, along with databases like MySQL and Oracle, and I build RESTful APIs to connect front-end and back-end systems.


              </p>
            </div>
            <div className='about-list-skills'>
              <div className='about-list'>
                <div className='about-list-item'>
                  <h5>Name</h5> <tag className='name-colon'>:</tag>
                  <p>Abhishek Singh</p>
                </div>

                <div className='about-list-item'>
                  <h5>Age </h5> <tag className='age-colon'>:</tag>
                  <p>23</p>
                </div>

                <div className='about-list-item'>
                  <h5>Address</h5> <tag className='adress-colon'>:</tag>{" "}
                  <p>India, Hyderabad</p>
                </div>

                <div className='about-list-item'>
                  <h5>Phone</h5> <tag className='phone-colon'>:</tag>{" "}
                  <p>(+91) 9165946929</p>
                </div>

                <div className='about-list-item'>
                  <h5>Email</h5> <tag className='email-colon'>:</tag>{" "}
                  <p>abhisheksinghmnc@gmail.com</p>
                </div>
              </div>
            </div>
            <div className='about-btn'>
              <a
                className='download-btn'
                href={require("../../pictures/Abhishek_singh.pdf")}
                download>
                {" "}
                Download &nbsp;Resume{" "}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
