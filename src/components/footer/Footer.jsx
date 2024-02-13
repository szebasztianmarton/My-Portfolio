import React from "react";
import "./footer.css";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Szebasztián Márton</h1>
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
            href="https://twitter.com/szebamarton"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
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
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
        </div>
        <span className="footer__copy">
          &copy; {new Date().getFullYear()} All rights are reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
