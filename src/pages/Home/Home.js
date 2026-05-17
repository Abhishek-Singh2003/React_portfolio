import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import Container from "../../Components/Container/Container";
import { gsap } from "gsap";

function Home() {
  const [homeBlur, setHomeBlur] = useState(false);

  const textRef = useRef();
  const blackDivRef = useRef();
  const greenDivRef = useRef();

  useEffect(() => {
    gsap.to(textRef.current, 2, {
      opacity: 1,
      delay: 1.5,
    });

    gsap.to(greenDivRef.current, 1, {
      y: "-200%",
      delay: 1,
    });

    gsap.to(blackDivRef.current, 1, {
      y: "-100%",
      delay: 1,
    });
  }, []);

  const changeHomeBlur = () => {
    if (window.scrollY >= 500) {
      setHomeBlur(true);
    } else {
      setHomeBlur(false);
    }
  };

  window.addEventListener("scroll", changeHomeBlur);

  return (
    <div className="home" id="home">
      <div className={homeBlur ? "home-inner blur" : "home-inner"}>

        <Container className="home-cont">
          <div className="home-main-content">

            <div ref={textRef} className="home-text">

              <h3>Hi, I'm Abhishek Singh</h3>

              <h1>
                <span className="o">F</span>
                <span>u</span>
                <span>l</span>
                <span>l</span>
                <span>-</span>
                <span>S</span>
                <span>t</span>
                <span>a</span>
                <span>c</span>
                <span>k</span>

                &nbsp;

                <span className="o">J</span>
                <span>a</span>
                <span>v</span>
                <span>a</span>

                &nbsp;

                <span className="o">D</span>
                <span>e</span>
                <span>v</span>
                <span>e</span>
                <span>l</span>
                <span>o</span>
                <span>p</span>
                <span>e</span>
                <span>r</span>
              </h1>

              <p>
                Passionate Full Stack Java Developer with strong expertise
                in Java, Spring Boot, REST APIs, and Microservices architecture.
                Experienced in building scalable backend systems and responsive
                frontend applications using React, JavaScript, HTML, CSS,
                and Bootstrap.
              </p>

              <div className="home-btn">
                <a href="#contact" className="hireme-btn">
                  Hire Me
                </a>
              </div>

            </div>
          </div>
        </Container>
      </div>

      <div ref={greenDivRef} className="green-div"></div>

      <div ref={blackDivRef} className="black-div">
        <h1>Abhishek Singh</h1>
      </div>
    </div>
  );
}

export default Home;