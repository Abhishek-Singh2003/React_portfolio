import React, { useState } from "react";
import "./ProjectItem.css";
import { AiFillGithub } from "react-icons/ai";
import { CgMediaLive } from "react-icons/cg";

function ProjectItem(props) {
  const [onHover, setOnHover] = useState(true);

  return (
    <div
      data-aos="fade-up"
      duration="40000"
      className="project-item"
      onMouseLeave={() => setOnHover(true)}
      onMouseOver={() => setOnHover(false)}
    >
      <div className="links-cont">
        <div className="links">
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="link-icon" />
          </a>

          <a
            href={props.host}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CgMediaLive className="link-icon" />
          </a>
        </div>

        <h1 className="text">{props.title}</h1>
      </div>

      <div
        className={
          onHover
            ? "project-image"
            : "project-image project-image-hover"
        }
      >
        <img
          className={!onHover ? "image-hover" : ""}
          src={props.img}
          alt={props.title}
        />
      </div>

      <div
        className={
          onHover
            ? "hover-content"
            : "hover-content hover-content-hover"
        }
      ></div>
    </div>
  );
}

export default ProjectItem;