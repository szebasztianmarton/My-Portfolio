import React from "react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

import {Sociallinks} from "../../components/data/Text"

const Social = () => {

  const links = Sociallinks[0];
  return (
    <div className="home__social">
      <a
        href={links.x}
        className="home__social-icon"
        target="_blank"
      >
        <FaXTwitter />
      </a>
      <a
        href={links.github}
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FiGithub />
      </a>
      <a
        href={links.linkedin}
        className="home__social-icon"
        target="_blank"
      >
        <FiLinkedin />
      </a>
      <a href={links.instagram} className="home__social-icon" target="_blank">
        <FiInstagram />
      </a>
    </div>
  );
};

export default Social;
