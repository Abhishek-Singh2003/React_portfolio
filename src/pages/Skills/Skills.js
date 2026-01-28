import React from "react";
import Container from "../../Components/Container/Container";
import "./Skills.css";

import {
  DiCss3,
  DiBootstrap,
  DiReact,
  DiHtml5,
  DiJava,
  DiGit
} from "react-icons/di";

import {
  SiJavascript,
  SiSpringboot,
  SiMysql,
  SiOracle,
  SiPostgresql,
  SiDocker,
  SiJenkins,
  SiPostman,
  SiSwagger,
  SiJunit5,
  SiApachemaven,
  SiLinux,
  SiTypescript
} from "react-icons/si";

import { FaServer, FaKey } from "react-icons/fa"; // FaKey for JWT
import { MdCloudQueue } from "react-icons/md"; // for Microservices

function Skills() {
  return (
    <div className="skills-outer">
      <div className="skills" id="skills">
        <Container className="skills-cont">
          <div className="skills-content-wrapper">
            <div className="skills-header">
              <h1>Skills</h1>
            </div>

            <div className="skills-list-wrapper">
              {/* Frontend */}
              <div className="skills-card" data-aos="slide-down">
                <DiHtml5 className="skills-icon html" />
                <div className="skill-title">HTML</div>
              </div>

              <div className="skills-card" data-aos="fade-up">
                <DiCss3 className="skills-icon css" />
                <div className="skill-title">CSS</div>
              </div>

              <div className="skills-card" data-aos="slide-up">
                <SiJavascript className="skills-icon js" />
                <div className="skill-title">JavaScript</div>
              </div>

              <div className="skills-card" data-aos="slide-down">
                <SiTypescript className="skills-icon typescript" />
                <div className="skill-title">TypeScript</div>
              </div>

              <div className="skills-card" data-aos="slide-down">
                <DiBootstrap className="skills-icon bootstrap" />
                <div className="skill-title">Bootstrap</div>
              </div>

              <div className="skills-card" data-aos="slide-down">
                <DiReact className="skills-icon react" />
                <div className="skill-title">React</div>
              </div>

              {/* Backend */}
              <div className="skills-card" data-aos="slide-up">
                <DiJava className="skills-icon java" />
                <div className="skill-title">Java</div>
              </div>

              <div className="skills-card" data-aos="slide-up">
                <SiSpringboot className="skills-icon springboot" />
                <div className="skill-title">Spring Boot</div>
              </div>

              <div className="skills-card" data-aos="slide-up">
                <MdCloudQueue className="skills-icon microservices" />
                <div className="skill-title">Microservices</div>
              </div>

              <div className="skills-card" data-aos="slide-up">
                <FaKey className="skills-icon jwt" />
                <div className="skill-title">JWT</div>
              </div>

              <div className="skills-card" data-aos="slide-up">
                <FaServer className="skills-icon restfulapi" />
                <div className="skill-title">RESTful API</div>
              </div>

              {/* Database */}
              <div className="skills-card" data-aos="slide-up">
                <SiMysql className="skills-icon mysql" />
                <div className="skill-title">MySQL</div>
              </div>

              <div className="skills-card" data-aos="slide-up">
                <SiOracle className="skills-icon oracle" />
                <div className="skill-title">Oracle</div>
              </div>

              <div className="skills-card" data-aos="slide-up">
                <SiPostgresql className="skills-icon postgresql" />
                <div className="skill-title">PostgreSQL</div>
              </div>

              {/* Tools */}
              <div className="skills-card" data-aos="slide-up">
                <DiGit className="skills-icon git" />
                <div className="skill-title">Git</div>
              </div>

              <div className="skills-card" data-aos="slide-up">
                <SiDocker className="skills-icon docker" />
                <div className="skill-title">Docker</div>
              </div>

              <div className="skills-card" data-aos="slide-up">
                <SiJenkins className="skills-icon jenkins" />
                <div className="skill-title">Jenkins</div>
              </div>

              <div className="skills-card" data-aos="slide-up">
                <SiPostman className="skills-icon postman" />
                <div className="skill-title">Postman</div>
              </div>

              <div className="skills-card" data-aos="slide-up">
                <SiSwagger className="skills-icon swagger" />
                <div className="skill-title">Swagger</div>
              </div>

              <div className="skills-card" data-aos="slide-up">
                <SiJunit5 className="skills-icon junit" />
                <div className="skill-title">JUnit</div>
              </div>

              <div className="skills-card" data-aos="slide-up">
                <SiApachemaven className="skills-icon maven" />
                <div className="skill-title">Maven</div>
              </div>

              <div className="skills-card" data-aos="slide-up">
                <SiLinux className="skills-icon linux" />
                <div className="skill-title">Linux</div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Skills;
