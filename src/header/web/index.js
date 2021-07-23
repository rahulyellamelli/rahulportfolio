import React from "react";
import "./web.css";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
          <i class="fi-rr-edit-alt option-icon"></i>Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i class="fi-rr-laptop option-icon"></i>Skills
        </a>
      </div>

      <div className="web-option option-icon">
        <a href="#contact">
          <i class="fi-rr-user"></i>Contact
        </a>
      </div>
    </div>
  );
}

export default Web;
