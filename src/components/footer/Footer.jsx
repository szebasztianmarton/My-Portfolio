import React from "react";
import "./footer.css";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

import {HomeText,Sociallinks} from "../../components/data/Text"

const Footer = () => {
  const links = Sociallinks[0];
  const home = HomeText[0];

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">{home.title}</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href={links.x}
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
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
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
        </div>
        <span className="footer__copy">
          &copy; {new Date().getFullYear()} {home.copy}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
