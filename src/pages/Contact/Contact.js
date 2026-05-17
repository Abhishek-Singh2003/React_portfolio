import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import "./Contact.css";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import ContactForm from "./ContactForm/ContactForm";

function Contact() {
  const [hover, setHover] = useState(false);

  return (
    <div className="contact" id="contact">
      <Container className="contact-cont">

        <div className="contact-title">
          <h1>
            Contact <tag className="contact-title-span">Me</tag>
          </h1>
        </div>

        <div className="contact-wrapper">

          <div className="left-side" data-aos="fade-right">
            <ContactForm />
          </div>

          <div className="right-side" data-aos="fade-up">

            <div className="sircles-cont">

              <div
                className={hover ? "sircle1 sircle1-active" : "sircle1"}
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >

                {/* GitHub Icons */}
                <a
                  href="https://github.com/Abhishek-Singh2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-icon1"
                >
                  <AiFillGithub className="github" />
                </a>

                <a
                  href="https://github.com/Abhishek-Singh2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-icon2"
                >
                  <AiFillGithub className="github" />
                </a>

                <a
                  href="https://github.com/Abhishek-Singh2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-icon3"
                >
                  <AiFillGithub className="github" />
                </a>

                <a
                  href="https://github.com/Abhishek-Singh2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-icon4"
                >
                  <AiFillGithub className="github" />
                </a>

                {/* Facebook Icons */}
                <a
                  href="https://www.facebook.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fb-icon1"
                >
                  <BsFacebook className="fb" />
                </a>

                <a
                  href="https://www.facebook.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fb-icon2"
                >
                  <BsFacebook className="fb" />
                </a>

                <a
                  href="https://www.facebook.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fb-icon3"
                >
                  <BsFacebook className="fb" />
                </a>

                <a
                  href="https://www.facebook.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fb-icon4"
                >
                  <BsFacebook className="fb" />
                </a>

                <div className="sircle2">

                  <div className="sircle3">

                    {/* LinkedIn Icons */}
                    <a
                      href="https://www.linkedin.com/in/abhishek-singh-315721281"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin-icon1"
                    >
                      <AiFillLinkedin className="linkedin" />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/abhishek-singh-315721281"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin-icon2"
                    >
                      <AiFillLinkedin className="linkedin" />
                    </a>

                    <div className="sircle4">

                      <a
                        href="https://github.com/Abhishek-Singh2003"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-icon-center"
                      >
                        <AiFillGithub className="github" />
                      </a>

                    </div>
                  </div>
                </div>
              </div>

              <div className="socials-title">

                <h2>Socials</h2>

                <div className="socials">

                  <a
                    href="https://github.com/Abhishek-Singh2003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="githib-link"
                  >
                    <AiFillGithub className="soc-icon github" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/abhishek-singh-315721281"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin className="soc-icon linkdin" />
                  </a>

                </div>

                <div className="email-phone-cont">

                  <div className="phone">
                    <PhoneIcon className="phone-icon" />
                    <p>(+91) 8815341979</p>
                  </div>

                  <div className="email">
                    <EmailIcon className="email-icon" />
                    <p className="email-p">
                      abhisheksinghmnc@gmail.com
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;