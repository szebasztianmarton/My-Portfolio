import React from "react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://twitter.com/szebamarton"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer" // Add rel="noreferrer" here
      >
        <FaXTwitter />
      </a>
      <a
        href="https://www.github.com"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer" // Add rel="noreferrer" here
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer" // Add rel="noreferrer" here
      >
        <FiLinkedin />
      </a>
      <a
        href="https://www.instagram.com"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer" // Add rel="noreferrer" here
      >
        <FiInstagram />
      </a>
    </div>
  );
};

export default Social;
