import React from "react";
import SocialContact from "../../common/social-contact/index";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There ✋,I am
          <br /> <span className="info-name">Rahul Yellamelli</span>
          <br /> I love experimenting with the Web.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/Coding.png").default}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
