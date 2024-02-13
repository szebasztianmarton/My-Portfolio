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
      >
        <FaXTwitter />
      </a>
      <a
        href="https://www.github.com/szebasztianmarton"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/szebasztianmarton/"
        className="home__social-icon"
        target="_blank"
      >
        <FiLinkedin />
      </a>
      <a href="" className="home__social-icon" target="_blank">
        <FiInstagram />
      </a>
    </div>
  );
};

export default Social;
